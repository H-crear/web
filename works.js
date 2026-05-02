function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function createWorkCard(work) {
  const D = window.SafeDOM;
  const tags = (work.tags || []).map((tag) => D.el("span", { className: "tag", text: tag }));
  return D.el("article", { className: "work-card is-visible" }, [
    D.el("a", { className: "work-thumb", href: "work.html?id=" + encodeURIComponent(work.id), "aria-label": "查看 " + work.title }, [
      D.el("img", { src: work.cover.src, alt: work.cover.alt })
    ]),
    D.el("div", { className: "work-card-body" }, [
      D.el("div", { className: "work-meta-line" }, [
        D.el("span", { text: work.category }),
        D.el("span", { text: work.year })
      ]),
      D.el("h2", {}, [
        D.el("a", { href: "work.html?id=" + encodeURIComponent(work.id), text: work.title + " " + work.titleEn })
      ]),
      D.el("p", { text: work.excerpt }),
      D.el("div", { className: "tag-row" }, tags)
    ])
  ]);
}

function matchesSearch(work, query) {
  if (!query) return true;
  const haystack = [
    work.title,
    work.titleEn,
    work.category,
    work.excerpt,
    work.background,
    work.promptApproach,
    ...(work.tags || [])
  ].map(normalize).join(" ");
  return haystack.includes(query);
}

function renderFilters(categories, activeCategory, onChange) {
  const host = document.querySelector("#categoryFilters");
  if (!host) return;
  window.SafeDOM.clear(host);
  ["全部", ...categories].forEach((category) => {
    const pressed = category === activeCategory;
    host.appendChild(window.SafeDOM.el("button", {
      type: "button",
      className: "filter-chip" + (pressed ? " is-active" : ""),
      "aria-pressed": String(pressed),
      text: category,
      onclick: () => onChange(category)
    }));
  });
}

function renderWorks(works, state) {
  const D = window.SafeDOM;
  const grid = document.querySelector("#worksGrid");
  const count = document.querySelector("#resultCount");
  if (!grid) return;
  const query = normalize(state.query);
  const filtered = works.filter((work) => {
    const categoryMatch = state.category === "全部" || work.category === state.category;
    return categoryMatch && matchesSearch(work, query);
  });
  D.clear(grid);
  if (filtered.length === 0) {
    grid.appendChild(D.el("div", { className: "empty-state" }, [
      D.el("h2", { text: "没有找到匹配作品" }),
      D.el("p", { text: "换一个关键词或切回全部分类试试。" })
    ]));
  } else {
    filtered.forEach((work) => grid.appendChild(createWorkCard(work)));
  }
  if (count) {
    count.textContent = "显示 " + filtered.length + " / " + works.length + " 个项目";
  }
}

async function initWorksPage() {
  const works = await getWorksData();
  const categories = [...new Set(works.map((work) => work.category))];
  const state = { query: "", category: "全部" };
  const search = document.querySelector("#workSearch");
  const sync = () => {
    renderFilters(categories, state.category, (category) => {
      state.category = category;
      sync();
    });
    renderWorks(works, state);
  };
  if (search) {
    search.addEventListener("input", () => {
      state.query = search.value;
      renderWorks(works, state);
    });
  }
  sync();
}

document.addEventListener("DOMContentLoaded", initWorksPage);
