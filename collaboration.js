function renderKpis(data) {
  const host = document.querySelector("#methodKpis");
  if (!host) return;
  window.SafeDOM.clear(host);
  (data.kpis || []).forEach((item) => {
    host.appendChild(window.SafeDOM.el("div", { className: "kpi" }, [
      window.SafeDOM.el("strong", { text: item.value }),
      window.SafeDOM.el("span", { text: item.label })
    ]));
  });
}

function renderPrinciples(data) {
  const host = document.querySelector("#methodPrinciples");
  if (!host) return;
  window.SafeDOM.clear(host);
  (data.principles || []).forEach((item) => {
    host.appendChild(window.SafeDOM.el("article", { className: "stack-item" }, [
      window.SafeDOM.el("h3", { text: item.title }),
      window.SafeDOM.el("p", { text: item.text })
    ]));
  });
}

function renderSteps(data) {
  const host = document.querySelector("#methodSteps");
  if (!host) return;
  window.SafeDOM.clear(host);
  (data.steps || []).forEach((step) => {
    host.appendChild(window.SafeDOM.el("article", { className: "timeline-item is-visible" }, [
      window.SafeDOM.el("p", { className: "eyebrow", text: step.phase }),
      window.SafeDOM.el("h3", { text: step.title }),
      window.SafeDOM.el("dl", { className: "method-dl" }, [
        window.SafeDOM.el("div", {}, [window.SafeDOM.el("dt", { text: "输入" }), window.SafeDOM.el("dd", { text: step.input })]),
        window.SafeDOM.el("div", {}, [window.SafeDOM.el("dt", { text: "输出" }), window.SafeDOM.el("dd", { text: step.output })]),
        window.SafeDOM.el("div", {}, [window.SafeDOM.el("dt", { text: "验收" }), window.SafeDOM.el("dd", { text: step.qualityGate })])
      ])
    ]));
  });
}

function renderLists(data) {
  const deliverables = document.querySelector("#methodDeliverables");
  const stack = document.querySelector("#methodStack");
  if (deliverables) {
    window.SafeDOM.clear(deliverables);
    (data.deliverables || []).forEach((item) => deliverables.appendChild(window.SafeDOM.el("li", { text: item })));
  }
  if (stack) {
    window.SafeDOM.clear(stack);
    (data.stack || []).forEach((item) => stack.appendChild(window.SafeDOM.el("span", { className: "tag", text: item })));
  }
}

async function initCollaborationPage() {
  const data = await getCollaborationData();
  renderKpis(data);
  renderPrinciples(data);
  renderSteps(data);
  renderLists(data);
}

document.addEventListener("DOMContentLoaded", initCollaborationPage);
