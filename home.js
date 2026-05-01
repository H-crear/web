async function loadFeaturedWorks() {
  const container = document.querySelector("#featured-works");
  if (!container) return;

  try {
    const works = await getWorksData();
    const featured = works.slice(0, 6);

    container.innerHTML = featured
      .map(
        (item) => `
          <article class="work-card reveal">
            <a href="work.html?id=${encodeURIComponent(item.id)}" aria-label="查看 ${item.title}">
              <div class="work-cover">
                <img src="${item.cover}" alt="${item.title} 封面" loading="lazy">
              </div>
              <div class="work-body">
                <h3>${item.title}</h3>
                <p class="muted">${item.year} · ${item.category}</p>
                <p>${item.excerpt}</p>
                <div class="chip-row">
                  ${item.tags.slice(0, 3).map((tag) => `<span class="chip">${tag}</span>`).join("")}
                </div>
              </div>
            </a>
          </article>
        `
      )
      .join("");

    if (typeof setupReveals === "function") {
      setupReveals();
    }
  } catch (error) {
    container.innerHTML = `<div class="empty-state">精选作品加载失败，请检查 data/works.json 或 data/works-data.js。</div>`;
    console.error(error);
  }
}

loadFeaturedWorks();
