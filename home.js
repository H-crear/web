function createWorkCard(work, compact) {
  const D = window.SafeDOM;
  const tags = (work.tags || []).slice(0, compact ? 3 : 4).map((tag) => D.el("span", { className: "tag", text: tag }));
  return D.el("article", { className: "work-card is-visible" }, [
    D.el("a", { className: "work-thumb", href: "work.html?id=" + encodeURIComponent(work.id), "aria-label": "查看 " + work.title }, [
      D.el("img", { src: work.cover.src, alt: work.cover.alt })
    ]),
    D.el("div", { className: "work-card-body" }, [
      D.el("div", { className: "work-meta-line" }, [
        D.el("span", { text: work.category }),
        D.el("span", { text: work.year })
      ]),
      D.el("h3", {}, [
        D.el("a", { href: "work.html?id=" + encodeURIComponent(work.id), text: work.title + " " + work.titleEn })
      ]),
      D.el("p", { text: work.excerpt }),
      D.el("div", { className: "tag-row" }, tags)
    ])
  ]);
}

async function initHomePage() {
  const host = document.querySelector("#featuredWorks");
  if (!host) return;
  const works = await getWorksData();
  const featured = works.filter((work) => work.featured).slice(0, 4);
  window.SafeDOM.clear(host);
  featured.forEach((work) => host.appendChild(createWorkCard(work, true)));
}

document.addEventListener("DOMContentLoaded", initHomePage);
