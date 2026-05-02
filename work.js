function detailSection(title, body) {
  const D = window.SafeDOM;
  return D.el("section", { className: "detail-block" }, [D.el("h2", { text: title }), D.el("p", { text: body })]);
}
function renderNotFound(host) {
  window.SafeDOM.clear(host).appendChild(window.SafeDOM.el("section", { className: "page-hero" }, [window.SafeDOM.el("div", { className: "container narrow" }, [window.SafeDOM.el("p", { className: "eyebrow", text: "Not Found" }), window.SafeDOM.el("h1", { text: "没有找到这个作品" }), window.SafeDOM.el("p", { text: "作品可能已经更名，或者链接缺少正确的 id 参数。" }), window.SafeDOM.el("a", { className: "btn btn-primary", href: "works.html", text: "返回作品总览" })])]));
}
function neighborLinks(works, current) {
  const index = works.findIndex((work) => work.id === current.id);
  const previous = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];
  const D = window.SafeDOM;
  return D.el("nav", { className: "detail-nav", "aria-label": "作品前后导航" }, [D.el("a", { href: "work.html?id=" + encodeURIComponent(previous.id) }, [D.el("span", { text: "上一篇" }), D.el("strong", { text: previous.title })]), D.el("a", { href: "work.html?id=" + encodeURIComponent(next.id) }, [D.el("span", { text: "下一篇" }), D.el("strong", { text: next.title })])]);
}
function renderWork(host, work, works) {
  const D = window.SafeDOM;
  D.clear(host);
  document.title = work.title + " " + work.titleEn + " · Synthetic Atelier";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", work.excerpt);
  const gallery = D.el("div", { className: "detail-gallery" }, [D.el("figure", { className: "detail-cover" }, [D.el("img", { src: work.cover.src, alt: work.cover.alt }), D.el("figcaption", { text: work.cover.alt })]), ...(work.detailImages || []).map((image) => D.el("figure", {}, [D.el("img", { src: image.src, alt: image.alt }), D.el("figcaption", { text: image.caption })]))]);
  const iterationList = D.el("ol", { className: "process-list detail-process" }, (work.iterations || []).map((item, index) => D.el("li", {}, [D.el("span", { text: String(index + 1).padStart(2, "0") }), D.el("strong", { text: item.title }), D.el("p", { text: item.text })])));
  const metaList = D.el("dl", { className: "meta-list" }, [
    D.el("div", {}, [D.el("dt", { text: "图片类型" }), D.el("dd", { text: work.medium })]),
    D.el("div", {}, [D.el("dt", { text: "风格" }), D.el("dd", { text: work.style })]),
    D.el("div", {}, [D.el("dt", { text: "情绪" }), D.el("dd", { text: work.mood })]),
    D.el("div", {}, [D.el("dt", { text: "使用场景" }), D.el("dd", { text: work.useCase })]),
    D.el("div", {}, [D.el("dt", { text: "资产" }), D.el("dd", { text: work.coverType + " / " + work.meta.format })]),
    D.el("div", {}, [D.el("dt", { text: "授权" }), D.el("dd", { text: work.meta.license })])
  ]);
  host.appendChild(D.fragment([
    D.el("section", { className: "work-hero" }, [D.el("div", { className: "container work-hero-grid" }, [D.el("div", {}, [D.el("a", { className: "text-link", href: "works.html", text: "返回作品总览" }), D.el("p", { className: "eyebrow", text: work.medium + " / " + work.year }), D.el("h1", { text: work.title }), D.el("p", { className: "title-en", text: work.titleEn }), D.el("p", { className: "hero-tagline", text: work.excerpt }), D.el("div", { className: "meta-strip" }, [D.el("span", { text: work.style }), D.el("span", { text: work.mood }), D.el("span", { text: work.useCase })]), D.el("div", { className: "tag-row" }, (work.tags || []).map((tag) => D.el("span", { className: "tag", text: tag }))) ]), D.el("img", { className: "work-hero-image", src: work.cover.src, alt: work.cover.alt })])]),
    D.el("section", { className: "section" }, [D.el("div", { className: "container detail-layout" }, [D.el("div", { className: "detail-main" }, [detailSection("项目背景", work.background), detailSection("提示词思路", work.promptApproach), detailSection("应用场景", work.useCase), D.el("section", { className: "detail-block" }, [D.el("h2", { text: "迭代过程" }), iterationList]), detailSection("结果说明", work.result), D.el("section", { className: "detail-block" }, [D.el("h2", { text: "作品图像" }), gallery])]), D.el("aside", { className: "detail-aside" }, [D.el("h2", { text: "图片元信息" }), metaList])])]),
    D.el("section", { className: "section" }, [D.el("div", { className: "container" }, [neighborLinks(works, work)])])
  ]));
}
async function initWorkDetailPage() {
  const host = document.querySelector("#workDetail");
  if (!host) return;
  const works = await getWorksData();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || (works[0] && works[0].id);
  const work = works.find((item) => item.id === id);
  if (!work) renderNotFound(host); else renderWork(host, work, works);
}
document.addEventListener("DOMContentLoaded", initWorkDetailPage);
