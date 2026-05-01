function byId(list, id) {
  return list.find((item) => item.id === id);
}

function renderEmptyState(host) {
  host.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="empty-state">
          <h2>作品不存在或链接已失效</h2>
          <p style="margin-top: 0.6rem;">你可以返回作品总览重新选择案例。</p>
          <p style="margin-top: 0.9rem;"><a class="btn btn-primary" href="works.html">返回作品页</a></p>
        </div>
      </div>
    </section>
  `;
}

function findNeighbors(list, currentIndex) {
  const previous = currentIndex > 0 ? list[currentIndex - 1] : null;
  const next = currentIndex < list.length - 1 ? list[currentIndex + 1] : null;
  return { previous, next };
}

function renderWork(host, list, item) {
  const index = list.findIndex((entry) => entry.id === item.id);
  const { previous, next } = findNeighbors(list, index);
  const story = (item.story || "").trim();

  host.innerHTML = `
    <section class="detail-hero">
      <div class="container">
        <a href="works.html" class="eyebrow">← 返回作品列表</a>
        <h1>${item.title}</h1>
        <p class="muted" style="margin-top:0.8rem;">${item.year} · ${item.category}</p>
        <p style="margin-top:0.8rem; max-width:72ch;">${item.excerpt}</p>
        <div class="chip-row detail-meta">
          ${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="detail-gallery">
          ${item.detailImages
            .map(
              (src, idx) => `
                <figure class="reveal">
                  <img src="${src}" alt="${item.title} 细节图 ${idx + 1}" loading="lazy">
                </figure>
              `
            )
            .join("")}
        </div>

        <div class="detail-story reveal">
          ${story}
        </div>

        <div class="detail-nav">
          ${
            previous
              ? `<a class="btn" href="work.html?id=${encodeURIComponent(previous.id)}">← ${previous.title}</a>`
              : `<span class="muted">已经是第一项作品</span>`
          }
          ${
            item.externalLink
              ? `<a class="btn btn-primary" href="${item.externalLink}" target="_blank" rel="noopener">查看外链案例</a>`
              : `<span class="muted">该案例无外链展示</span>`
          }
          ${
            next
              ? `<a class="btn" href="work.html?id=${encodeURIComponent(next.id)}">${next.title} →</a>`
              : `<span class="muted">已经是最后一项作品</span>`
          }
        </div>
      </div>
    </section>
  `;

  document.title = `${item.title} · 作品详情`;
  if (typeof setupReveals === "function") {
    setupReveals();
  }
}

async function initWorkDetailPage() {
  const host = document.querySelector("#work-detail");
  if (!host) return;

  const id = new URLSearchParams(location.search).get("id");

  try {
    const works = await getWorksData();
    const item = id ? byId(works, id) : null;

    if (!item) {
      renderEmptyState(host);
      return;
    }

    renderWork(host, works, item);
  } catch (error) {
    renderEmptyState(host);
    console.error(error);
  }
}

initWorkDetailPage();
