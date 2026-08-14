// Shared across every page. Does three things:
// 1. Turns each top-level <h2> section inside <main> into a collapsible block.
// 2. Injects that same page's section list under its own sidebar link (nav.sidebar a.active),
//    as a <details> block — one click on "Sections" collapses/expands the whole list.
// 3. Adds a sidebar hide/show toggle, remembered across pages via localStorage.
// Add <script src="assets/page-nav.js"></script> (path adjusted for folder depth) to any page
// that follows the standard <main><h1>...<h2>section</h2>...<h2>section</h2></main> layout.
(function () {
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-+|-+$)/g, "");
  }

  function uniqueId(base, used) {
    var id = base || "section";
    var n = 2;
    while (used[id]) {
      id = base + "-" + n;
      n++;
    }
    used[id] = true;
    return id;
  }

  function setupSections(main) {
    var h2s = Array.prototype.slice.call(main.children).filter(function (el) {
      return el.tagName === "H2";
    });
    if (h2s.length < 2) return h2s;

    var usedIds = {};
    Array.prototype.forEach.call(main.querySelectorAll("[id]"), function (el) {
      usedIds[el.id] = true;
    });

    var detailsEls = [];

    h2s.forEach(function (h2) {
      if (!h2.id) {
        h2.id = uniqueId(slugify(h2.textContent), usedIds);
      }

      var details = document.createElement("details");
      details.className = "collapsible";
      details.open = true;

      var summary = document.createElement("summary");

      h2.parentNode.insertBefore(details, h2);
      summary.appendChild(h2);
      details.appendChild(summary);

      var node = details.nextSibling;
      while (node && !(node.nodeType === 1 && node.tagName === "H2")) {
        var next = node.nextSibling;
        details.appendChild(node);
        node = next;
      }

      detailsEls.push(details);
    });

    setupSidebarSubnav(h2s, detailsEls);
    return h2s;
  }

  function setupSidebarSubnav(h2s, detailsEls) {
    var activeLink = document.querySelector("nav.sidebar a.active");
    if (!activeLink) return;

    var subnav = document.createElement("details");
    subnav.className = "sidebar-subnav";
    subnav.open = true;

    var summary = document.createElement("summary");
    summary.textContent = "Sections";
    subnav.appendChild(summary);

    var controls = document.createElement("div");
    controls.className = "subnav-controls";
    var expandBtn = document.createElement("button");
    expandBtn.type = "button";
    expandBtn.textContent = "Expand all";
    var collapseBtn = document.createElement("button");
    collapseBtn.type = "button";
    collapseBtn.textContent = "Collapse all";
    controls.appendChild(expandBtn);
    controls.appendChild(collapseBtn);
    subnav.appendChild(controls);

    var list = document.createElement("ul");
    h2s.forEach(function (h2) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h2.id;
      a.textContent = h2.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
    subnav.appendChild(list);

    activeLink.insertAdjacentElement("afterend", subnav);

    expandBtn.addEventListener("click", function () {
      detailsEls.forEach(function (d) { d.open = true; });
    });
    collapseBtn.addEventListener("click", function () {
      detailsEls.forEach(function (d) { d.open = false; });
    });
  }

  function setupSidebarToggle() {
    var sidebar = document.querySelector("nav.sidebar");
    if (!sidebar) return;

    var hideBtn = document.createElement("button");
    hideBtn.type = "button";
    hideBtn.className = "sidebar-hide-btn";
    hideBtn.textContent = "Hide sidebar";
    sidebar.insertBefore(hideBtn, sidebar.firstChild);

    var showBtn = document.createElement("button");
    showBtn.type = "button";
    showBtn.className = "sidebar-show-btn";
    showBtn.textContent = "Show sidebar";
    document.body.appendChild(showBtn);

    function applyState(hidden) {
      document.body.classList.toggle("sidebar-hidden", hidden);
    }

    applyState(localStorage.getItem("mtops-sidebar-hidden") === "1");

    hideBtn.addEventListener("click", function () {
      localStorage.setItem("mtops-sidebar-hidden", "1");
      applyState(true);
    });
    showBtn.addEventListener("click", function () {
      localStorage.setItem("mtops-sidebar-hidden", "0");
      applyState(false);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var main = document.querySelector("main");
    if (main) setupSections(main);
    setupSidebarToggle();
  });
})();
