function renderSteps(steps) {
  const host = document.querySelector("#collab-steps");
  if (!host) return;

  host.innerHTML = steps
    .map(
      (step, index) => `
      <article class="timeline-item reveal">
        <p class="eyebrow">阶段 ${index + 1} · ${step.phase}</p>
        <h3>${step.owner}</h3>
        <p><strong>输入：</strong>${step.input}</p>
        <p><strong>输出：</strong>${step.output}</p>
        <p><strong>质量门禁：</strong>${step.qualityGate}</p>
        <p><strong>证据：</strong>${step.evidence}</p>
      </article>
    `
    )
    .join("");
}

function renderMilestones(milestones) {
  const host = document.querySelector("#milestone-list");
  if (!host) return;

  host.innerHTML = milestones
    .map(
      (item) => `
      <article class="card reveal">
        <p class="eyebrow">${item.date}</p>
        <h3>${item.name}</h3>
        <p>${item.status}</p>
        <p class="muted" style="margin-top:0.5rem;">交付物：${item.artifactLink}</p>
      </article>
    `
    )
    .join("");
}

function renderKpi(kpis) {
  const host = document.querySelector("#kpi-row");
  if (!host) return;

  host.innerHTML = kpis
    .map(
      (item) => `
      <div class="kpi reveal">
        <strong>${item.value}</strong>
        <span class="muted">${item.label}</span>
      </div>
    `
    )
    .join("");
}

async function initCollaborationPage() {
  try {
    const data = await getCollaborationData();
    renderSteps(data.steps || []);
    renderMilestones(data.milestones || []);
    renderKpi(data.kpis || []);

    if (typeof setupReveals === "function") {
      setupReveals();
    }
  } catch (error) {
    const host = document.querySelector("#collab-steps");
    if (host) {
      host.innerHTML = `<div class="empty-state">协同流程数据加载失败，请检查 data/collaboration.json 或 data/collaboration-data.js。</div>`;
    }
    console.error(error);
  }
}

initCollaborationPage();
