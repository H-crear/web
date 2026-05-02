function normalize(value) { return String(value || "").trim().toLowerCase(); }
function createWorkCard(work, index) {
  const D = window.SafeDOM;
  const tags = [work.medium, work.style, ...(work.tags || []).slice(0, 3)].filter(Boolean).map((tag) => D.el("span", { className: "tag", text: tag }));
  return D.el("article", { className: "work-card is-visible" }, [
    D.el("a", { className: "work-thumb", href: "work.html?id=" + encodeURIComponent(work.id), "aria-label": "查看 " + work.title }, [D.image({ src: work.cover.src, fallbackSrc: work.cover.fallbackSrc, alt: work.cover.alt, width: work.cover.width, height: work.cover.height, loading: index < 3 ? "eager" : "lazy", decoding: "async" })]),
    D.el("div", { className: "work-card-body" }, [
      D.el("div", { className: "work-meta-line" }, [D.el("span", { text: work.category }), D.el("span", { text: work.year })]),
      D.el("h2", {}, [D.el("a", { href: "work.html?id=" + encodeURIComponent(work.id), text: work.title + " " + work.titleEn })]),
      D.el("p", { text: work.excerpt }),
      D.el("p", { className: "use-case", text: "适合：" + work.useCase }),
      D.el("div", { className: "work-facets" }, [D.el("span", { text: work.medium }), D.el("span", { text: work.style }), D.el("span", { text: work.mood })]),
      D.el("div", { className: "tag-row" }, tags)
    ])
  ]);
}
function matchesSearch(work, query) {
  if (!query) return true;
  return [work.title, work.titleEn, work.category, work.excerpt, work.background, work.promptApproach, work.style, work.medium, work.mood, work.useCase, ...(work.tags || [])].map(normalize).join(" ").includes(query);
}
function renderFilterGroup(hostId, values, active, onChange) {
  const host = document.querySelector(hostId);
  if (!host) return;
  window.SafeDOM.clear(host);
  ["全部", ...values].forEach((value) => {
    const pressed = value === active;
    host.appendChild(window.SafeDOM.el("button", { type: "button", className: "filter-chip" + (pressed ? " is-active" : ""), "aria-pressed": String(pressed), text: value, onclick: () => onChange(value) }));
  });
}
function renderWorks(works, state) {
  const D = window.SafeDOM;
  const grid = document.querySelector("#worksGrid");
  const count = document.querySelector("#resultCount");
  if (!grid) return;
  const query = normalize(state.query);
  const filtered = works.filter((work) => {
    return (state.category === "全部" || work.category === state.category)
      && (state.medium === "全部" || work.medium === state.medium)
      && (state.style === "全部" || work.style === state.style)
      && matchesSearch(work, query);
  });
  D.clear(grid);
  if (filtered.length === 0) {
    grid.appendChild(D.el("div", { className: "empty-state" }, [D.el("h2", { text: "没有找到匹配作品" }), D.el("p", { text: "换一个关键词，或减少筛选条件试试。" })]));
  } else {
    filtered.forEach((work, index) => grid.appendChild(createWorkCard(work, index)));
  }
  if (count) count.textContent = "显示 " + filtered.length + " / " + works.length + " 个项目";
}
async function initWorksPage() {
  const works = await getWorksData();
  const state = { query: "", category: "全部", medium: "全部", style: "全部" };
  const categories = [...new Set(works.map((work) => work.category))];
  const mediums = [...new Set(works.map((work) => work.medium))];
  const styles = [...new Set(works.map((work) => work.style))];
  const syncFilters = () => {
    renderFilterGroup("#categoryFilters", categories, state.category, (value) => { state.category = value; syncFilters(); renderWorks(works, state); });
    renderFilterGroup("#mediumFilters", mediums, state.medium, (value) => { state.medium = value; syncFilters(); renderWorks(works, state); });
    renderFilterGroup("#styleFilters", styles, state.style, (value) => { state.style = value; syncFilters(); renderWorks(works, state); });
  };
  const search = document.querySelector("#workSearch");
  if (search) search.addEventListener("input", () => { state.query = search.value; renderWorks(works, state); });
  syncFilters();
  renderWorks(works, state);
}
document.addEventListener("DOMContentLoaded", initWorksPage);
