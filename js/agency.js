(function () {
  "use strict";

  var nav = document.getElementById("mainNav");
  var menu = document.getElementById("navbarResponsive");
  var SHRINK_AFTER_PX = 100;

  // Close the responsive menu when one of its links is clicked
  menu.addEventListener("click", function (event) {
    if (event.target.closest(".nav-link") && menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });

  // Shrink the navbar once the page is scrolled
  function shrinkNav() {
    nav.classList.toggle("navbar-shrink", window.scrollY > SHRINK_AFTER_PX);
  }
  window.addEventListener("scroll", shrinkNav, { passive: true });
  shrinkNav();

  // Activate tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (el) {
    new bootstrap.Tooltip(el);
  });
})();
