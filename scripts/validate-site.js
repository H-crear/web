const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const requiredIds = ["midnight-atlas","porcelain-clouds","memory-reef","neon-herbarium","lunar-street-market","glass-monsoon","satellite-garden","desert-signal-library","synthetic-portrait-studio","hyperreal-product-lab","quiet-architecture-interior","collage-dream-engine"];
function readJson(file) { return JSON.parse(fs.readFileSync(path.join(root, file), "utf8")); }
function fail(message) { throw new Error(message); }
const works = readJson("data/works.json");
if (works.length !== 12) fail("Expected exactly 12 works");
const ids = works.map((work) => work.id);
if (JSON.stringify(ids) !== JSON.stringify(requiredIds)) fail("Work ids do not match the v2 portfolio set");
for (const work of works) {
  for (const key of ["id","title","titleEn","year","category","excerpt","tags","style","medium","mood","useCase","coverType","cover","detailImages","background","promptApproach","iterations","result","meta"]) {
    if (!work[key]) fail("Missing " + key + " on " + work.id);
  }
  if (work.coverType !== "raster WebP + PNG fallback") fail("Expected WebP coverType on " + work.id);
  if (!work.cover.src.endsWith(".webp")) fail("Cover must be WebP on " + work.id);
  if (!work.cover.fallbackSrc || !work.cover.fallbackSrc.endsWith(".png")) fail("Cover must include PNG fallback on " + work.id);
  if (!Number.isInteger(work.cover.width) || !Number.isInteger(work.cover.height)) fail("Cover dimensions missing on " + work.id);
  if (!Array.isArray(work.detailImages) || work.detailImages.length !== 2) fail("Expected 2 detail images on " + work.id);
  if (!Array.isArray(work.iterations) || work.iterations.length < 3) fail("Expected at least 3 iterations on " + work.id);
  for (const image of [work.cover, ...work.detailImages]) {
    const assetPath = image.src.replace(/^\.\//, "");
    if (!fs.existsSync(path.join(root, assetPath))) fail("Missing asset " + image.src);
    if (!image.alt) fail("Missing alt for " + image.src);
  }
  const fallbackPath = work.cover.fallbackSrc.replace(/^\.\//, "");
  if (!fs.existsSync(path.join(root, fallbackPath))) fail("Missing fallback asset " + work.cover.fallbackSrc);
  if (!work.meta.credits || !work.meta.license) fail("Missing credits/license on " + work.id);
}
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data/works-data.js"), "utf8"), sandbox);
if (JSON.stringify(sandbox.window.WORKS_DATA) !== JSON.stringify(works)) fail("works-data.js is not in sync");
const manifest = readJson("data/assets-manifest.json");
if (!Array.isArray(manifest.works) || manifest.works.length !== works.length) fail("Asset manifest count mismatch");
const manifestDataSandbox = { window: {} };
vm.createContext(manifestDataSandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data/assets-manifest-data.js"), "utf8"), manifestDataSandbox);
if (JSON.stringify(manifestDataSandbox.window.ASSETS_MANIFEST) !== JSON.stringify(manifest)) fail("assets-manifest-data.js is not in sync");
for (const item of manifest.works) {
  if (!item.cover.endsWith(".webp") || !item.fallbackCover.endsWith(".png")) fail("Manifest cover fallback mismatch on " + item.id);
  if (!item.width || !item.height) fail("Manifest dimensions missing on " + item.id);
}
for (const page of ["index.html","works.html","work.html","collaboration.html","about.html","contact.html"]) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  if (!html.includes("./safe-dom.js")) fail(page + " does not include safe-dom.js");
}
for (const page of ["index.html","works.html","work.html"]) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  for (const required of ['property="og:title"', 'property="og:description"', 'property="og:image"', 'name="twitter:card"', 'name="twitter:image"']) {
    if (!html.includes(required)) fail(page + " missing social meta " + required);
  }
}
console.log("validate-site: ok");
