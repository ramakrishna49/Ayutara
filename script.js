
/* 1️⃣ Hide loader ONLY when page is fully loaded */
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  loader.classList.add("hidden");
});

/* 2️⃣ Page transition ONLY for real navigation */
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("pageLoader");

  document.querySelectorAll("a[href]").forEach(link => {

    /* ❌ IGNORE dropdown toggles */
    if (link.classList.contains("dropdown-toggle")) return;

    /* ❌ IGNORE anchors & JS links */
    if (
      link.getAttribute("href") === "#" ||
      link.getAttribute("href").startsWith("#")
    ) return;

    /* ❌ IGNORE external links */
    if (link.hostname !== location.hostname) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      loader.classList.remove("hidden");

      setTimeout(() => {
        window.location.href = link.href;
      }, 300); // small UX delay
    });
  });
});


    document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const icon = toggler.querySelector("i");
  const menu = document.getElementById("navbarNavDropdown");
  const navbar = document.querySelector(".navbar");

  // Toggle icon ☰ ↔ ✕
  menu.addEventListener("shown.bs.collapse", () => {
    icon.classList.remove("bi-list");
    icon.classList.add("bi-x");
  });

  menu.addEventListener("hidden.bs.collapse", () => {
    icon.classList.remove("bi-x");
    icon.classList.add("bi-list");
  });

  // Close menu when clicking a normal nav link (NOT dropdown toggle)
  document.querySelectorAll(
    ".navbar-nav .nav-link:not(.dropdown-toggle)"
  ).forEach(link => {
    link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(menu);
      if (bsCollapse) bsCollapse.hide();
    });
  });

  // Close only when clicking OUTSIDE navbar
  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("show") &&
      !navbar.contains(e.target)
    ) {
      const bsCollapse = bootstrap.Collapse.getInstance(menu);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

  