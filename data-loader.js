async function loadJsonWithFallback(jsonPath, fallbackValue) {
  if (location.protocol === "file:" && fallbackValue) {
    return fallbackValue;
  }

  try {
    const response = await fetch(jsonPath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${jsonPath}: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (fallbackValue) {
      return fallbackValue;
    }
    throw error;
  }
}

function getWorksData() {
  return loadJsonWithFallback("./data/works.json", window.WORKS_DATA || null);
}

function getCollaborationData() {
  return loadJsonWithFallback(
    "./data/collaboration.json",
    window.COLLAB_DATA || null
  );
}
