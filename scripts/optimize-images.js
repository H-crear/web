const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const puppeteer = require("puppeteer");

const root = path.resolve(__dirname, "..");
const worksPath = path.join(root, "data", "works.json");
const worksDataPath = path.join(root, "data", "works-data.js");
const manifestPath = path.join(root, "data", "assets-manifest.json");
const manifestDataPath = path.join(root, "data", "assets-manifest-data.js");

function toProjectPath(filePath) {
  return "./" + path.relative(root, filePath).replace(/\\/g, "/");
}

async function convertPngToWebp(page, pngPath, webpPath) {
  const bytes = fs.readFileSync(pngPath);
  const dataUrl = `data:image/png;base64,${bytes.toString("base64")}`;
  const result = await page.evaluate(async (src) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    const webp = canvas.toDataURL("image/webp", 0.78);
    return {
      width: img.naturalWidth,
      height: img.naturalHeight,
      base64: webp.split(",")[1]
    };
  }, dataUrl);
  fs.writeFileSync(webpPath, Buffer.from(result.base64, "base64"));
  return { width: result.width, height: result.height };
}

async function main() {
  const works = JSON.parse(fs.readFileSync(worksPath, "utf8"));
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (const work of works) {
    const existingSrc = work.cover.fallbackSrc || work.cover.src;
    const pngPath = path.join(root, existingSrc.replace(/^\.\//, ""));
    if (!fs.existsSync(pngPath)) {
      throw new Error(`Missing PNG cover for ${work.id}: ${existingSrc}`);
    }
    const webpPath = pngPath.replace(/\.png$/i, ".webp");
    const dimensions = await convertPngToWebp(page, pngPath, webpPath);
    work.cover = {
      ...work.cover,
      src: toProjectPath(webpPath),
      fallbackSrc: toProjectPath(pngPath),
      width: dimensions.width,
      height: dimensions.height
    };
    work.coverType = "raster WebP + PNG fallback";
    if (work.meta && work.meta.format) {
      work.meta.format = "WebP raster cover + PNG fallback + 2 SVG details";
    }
  }

  await browser.close();

  const manifest = {
    works: works.map((work) => ({
      id: work.id,
      coverType: work.coverType,
      medium: work.medium,
      style: work.style,
      cover: work.cover.src,
      fallbackCover: work.cover.fallbackSrc,
      width: work.cover.width,
      height: work.cover.height,
      details: work.detailImages.map((image) => image.src),
      alts: [work.cover.alt, ...work.detailImages.map((image) => image.alt)]
    }))
  };

  fs.writeFileSync(worksPath, JSON.stringify(works, null, 2) + "\n");
  fs.writeFileSync(worksDataPath, `window.WORKS_DATA = ${JSON.stringify(works, null, 2)};\n`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  fs.writeFileSync(manifestDataPath, `window.ASSETS_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`);

  const totalPng = works.reduce((sum, work) => sum + fs.statSync(path.join(root, work.cover.fallbackSrc.replace(/^\.\//, ""))).size, 0);
  const totalWebp = works.reduce((sum, work) => sum + fs.statSync(path.join(root, work.cover.src.replace(/^\.\//, ""))).size, 0);
  console.log(`optimized ${works.length} covers`);
  console.log(`png total: ${(totalPng / 1024 / 1024).toFixed(2)} MB`);
  console.log(`webp total: ${(totalWebp / 1024 / 1024).toFixed(2)} MB`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
