let allWorks = [];
let activeCategory = "全部";

function uniqueCategories(works) {
  return ["全部", ...new Set(works.map((item) => item.category))];
}

function renderFilters(categories) {
  const host = document.querySelector("#works-filters");
  if (!host) return;

  host.innerHTML = categories
    .map(
      (category) => `
      <button
        class="filter-btn ${category === activeCategory ? "active" : ""}"
        data-category="${category}"
        type="button"
      >
        ${category}
      </button>`
    )
    .join("");

  host.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "全部";
      renderFilters(categories);
      renderWorks();
    });
  });
}

function renderWorks() {
  const host = document.querySelector("#works-grid");
  if (!host) return;

  const filtered =
    activeCategory === "全部"
      ? allWorks
      : allWorks.filter((item) => item.category === activeCategory);

  if (!filtered.length) {
    host.innerHTML = `<div class="empty-state">该分类暂时没有作品，换一个看看。</div>`;
    return;
  }

  host.innerHTML = filtered
    .sort((a, b) => Number(b.year) - Number(a.year))
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
                ${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
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
}

async function initWorksPage() {
  try {
    allWorks = await getWorksData();
    renderFilters(uniqueCategories(allWorks));
    renderWorks();
  } catch (error) {
    const host = document.querySelector("#works-grid");
    if (host) {
      host.innerHTML = `<div class="empty-state">作品数据加载失败，请检查 data/works.json 或 data/works-data.js。</div>`;
    }
    console.error(error);
  }
}

initWorksPage();
