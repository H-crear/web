const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const requiredIds = [
  "midnight-atlas",
  "porcelain-clouds",
  "memory-reef",
  "neon-herbarium",
  "lunar-street-market",
  "glass-monsoon",
  "satellite-garden",
  "desert-signal-library"
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
}

function fail(message) {
  throw new Error(message);
}

const works = readJson("data/works.json");
if (works.length !== 8) fail("Expected exactly 8 works");
const ids = works.map((work) => work.id);
if (JSON.stringify(ids) !== JSON.stringify(requiredIds)) fail("Work ids do not match the v1 portfolio set");

for (const work of works) {
  for (const key of ["id", "title", "titleEn", "year", "category", "excerpt", "tags", "cover", "detailImages", "background", "promptApproach", "iterations", "result", "meta"]) {
    if (!work[key]) fail("Missing " + key + " on " + work.id);
  }
  if (!work.cover.alt) fail("Missing cover alt on " + work.id);
  if (!Array.isArray(work.detailImages) || work.detailImages.length !== 2) fail("Expected 2 detail images on " + work.id);
  if (!Array.isArray(work.iterations) || work.iterations.length < 3) fail("Expected at least 3 iterations on " + work.id);
  for (const image of [work.cover, ...work.detailImages]) {
    const assetPath = image.src.replace(/^\.\//, "");
    if (!fs.existsSync(path.join(root, assetPath))) fail("Missing asset " + image.src);
    if (!image.alt) fail("Missing alt for " + image.src);
  }
  if (!work.meta.credits || !work.meta.license) fail("Missing credits/license on " + work.id);
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data/works-data.js"), "utf8"), sandbox);
if (JSON.stringify(sandbox.window.WORKS_DATA) !== JSON.stringify(works)) fail("works-data.js is not in sync");

const collab = readJson("data/collaboration.json");
for (const key of ["kpis", "principles", "steps", "deliverables", "stack"]) {
  if (!Array.isArray(collab[key]) || collab[key].length === 0) fail("Missing collaboration " + key);
}

const manifest = readJson("data/assets-manifest.json");
if (!Array.isArray(manifest.works) || manifest.works.length !== works.length) fail("Asset manifest count mismatch");

for (const page of ["index.html", "works.html", "work.html", "collaboration.html", "about.html", "contact.html"]) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  if (!html.includes("./safe-dom.js")) fail(page + " does not include safe-dom.js");
  const blankLinks = [...html.matchAll(/<a\s+[^>]*target=["']_blank["'][^>]*>/g)];
  for (const match of blankLinks) {
    if (!/rel=["'][^"']*noopener[^"']*noreferrer[^"']*["']/.test(match[0])) {
      fail(page + " has target=_blank without noopener noreferrer");
    }
  }
}

console.log("validate-site: ok");
