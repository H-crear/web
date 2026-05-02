(() => {
  function append(parent, children) {
    const list = Array.isArray(children) ? children : [children];
    list.forEach((child) => {
      if (child === null || child === undefined || child === false) return;
      parent.appendChild(child instanceof Node ? child : document.createTextNode(String(child)));
    });
    return parent;
  }

  function setAttrs(node, attrs = {}) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value === null || value === undefined || value === false) return;
      if (key === "className") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key === "dataset") Object.assign(node.dataset, value);
      else if (key === "style" && typeof value === "object") Object.assign(node.style, value);
      else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
      else node.setAttribute(key, value === true ? "" : String(value));
    });
    if (node.tagName === "A") secureLink(node);
    return node;
  }

  function secureLink(link) {
    const href = link.getAttribute("href") || "";
    if (/^https?:\/\//i.test(href)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  }

  function el(tag, attrs, children) {
    return append(setAttrs(document.createElement(tag), attrs), children || []);
  }

  function image(attrs = {}) {
    const fallbackSrc = attrs.fallbackSrc;
    const imageAttrs = { ...attrs };
    delete imageAttrs.fallbackSrc;
    const node = setAttrs(document.createElement("img"), imageAttrs);
    if (fallbackSrc) {
      node.dataset.fallbackSrc = fallbackSrc;
      node.addEventListener("error", () => {
        if (node.dataset.fallbackSrc && node.src !== node.dataset.fallbackSrc) {
          node.src = node.dataset.fallbackSrc;
          delete node.dataset.fallbackSrc;
        }
      }, { once: true });
    }
    return node;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
    return node;
  }

  window.SafeDOM = {
    append,
    clear,
    el,
    fragment(children) {
      return append(document.createDocumentFragment(), children || []);
    },
    image,
    secureLink,
    text(value) {
      return document.createTextNode(value == null ? "" : String(value));
    }
  };
})();
