async function loadJsonWithFallback(url, fallbackName, fallbackDefault) {
  try {
    if (window.location.protocol === "file:") {
      throw new Error("Use inline fallback for file protocol");
    }
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) throw new Error("Failed to load " + url);
    return await response.json();
  } catch (error) {
    const fallback = window[fallbackName];
    if (fallback !== undefined) return fallback;
    return fallbackDefault;
  }
}

function getWorksData() {
  return loadJsonWithFallback("./data/works.json", "WORKS_DATA", []);
}

function getCollaborationData() {
  return loadJsonWithFallback("./data/collaboration.json", "COLLAB_DATA", {});
}

function getAssetsManifestData() {
  return loadJsonWithFallback("./data/assets-manifest.json", "ASSETS_MANIFEST", { works: [] });
}
