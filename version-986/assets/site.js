(function () {
  function ready(callback) {
    if (document.readyState !== "loading") {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }

  ready(function () {
    var menuButton = document.querySelector("[data-menu-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");
    if (menuButton && mobileNav) {
      menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("is-open");
      });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    var active = 0;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("is-active", slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("is-active", dotIndex === active);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        var index = Number(dot.getAttribute("data-hero-dot") || "0");
        showSlide(index);
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showSlide(active + 1);
      }, 5200);
    }

    var params = new URLSearchParams(window.location.search);
    var initialQuery = (params.get("q") || "").trim().toLowerCase();
    var inputs = Array.prototype.slice.call(document.querySelectorAll("[data-filter-input]"));
    var chipValue = "";

    function applyFilter() {
      var query = "";
      inputs.forEach(function (input) {
        if (input.value.trim()) {
          query = input.value.trim().toLowerCase();
        }
      });
      var terms = [];
      if (query) {
        terms.push(query);
      }
      if (chipValue) {
        terms.push(chipValue);
      }
      var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
      cards.forEach(function (card) {
        var text = card.getAttribute("data-search") || "";
        var visible = terms.every(function (term) {
          return text.indexOf(term) !== -1;
        });
        card.classList.toggle("is-filter-hidden", !visible);
      });
    }

    inputs.forEach(function (input) {
      if (initialQuery && !input.value) {
        input.value = initialQuery;
      }
      input.addEventListener("input", applyFilter);
      var form = input.closest("form");
      if (form) {
        form.addEventListener("submit", function (event) {
          if (form.hasAttribute("data-filter-scope")) {
            event.preventDefault();
            applyFilter();
          }
        });
      }
    });

    Array.prototype.slice.call(document.querySelectorAll("[data-filter-chip]")).forEach(function (chip) {
      chip.addEventListener("click", function () {
        var selected = chip.classList.contains("is-active");
        Array.prototype.slice.call(document.querySelectorAll("[data-filter-chip]")).forEach(function (item) {
          item.classList.remove("is-active");
        });
        if (selected) {
          chipValue = "";
        } else {
          chip.classList.add("is-active");
          chipValue = chip.getAttribute("data-filter-chip") || "";
        }
        applyFilter();
      });
    });

    if (initialQuery) {
      applyFilter();
    }
  });
})();
