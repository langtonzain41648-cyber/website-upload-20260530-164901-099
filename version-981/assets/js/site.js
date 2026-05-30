(function () {
  var toggle = document.querySelector('.mobile-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('is-open');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.hero-dot'));
  var prev = document.querySelector('.hero-prev');
  var next = document.querySelector('.hero-next');
  var current = 0;
  var timer = null;

  function showSlide(index) {
    if (!slides.length) {
      return;
    }
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle('is-active', i === current);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === current);
    });
  }

  function restartHero() {
    if (timer) {
      clearInterval(timer);
    }
    if (slides.length > 1) {
      timer = setInterval(function () {
        showSlide(current + 1);
      }, 5200);
    }
  }

  if (slides.length) {
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        showSlide(Number(dot.getAttribute('data-target')) || 0);
        restartHero();
      });
    });
    if (prev) {
      prev.addEventListener('click', function () {
        showSlide(current - 1);
        restartHero();
      });
    }
    if (next) {
      next.addEventListener('click', function () {
        showSlide(current + 1);
        restartHero();
      });
    }
    restartHero();
  }

  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  function runFilter(area) {
    var input = area.querySelector('.filter-input');
    var selects = Array.prototype.slice.call(area.querySelectorAll('.filter-select'));
    var cards = Array.prototype.slice.call(area.querySelectorAll('.movie-card'));
    var query = normalize(input && input.value);
    var filters = {};

    selects.forEach(function (select) {
      var key = select.getAttribute('data-filter');
      filters[key] = normalize(select.value);
    });

    cards.forEach(function (card) {
      var text = normalize(card.getAttribute('data-search'));
      var visible = !query || text.indexOf(query) !== -1;
      Object.keys(filters).forEach(function (key) {
        var expected = filters[key];
        var actual = normalize(card.getAttribute('data-' + key));
        if (expected && actual.indexOf(expected) === -1) {
          visible = false;
        }
      });
      card.classList.toggle('is-hidden', !visible);
    });
  }

  Array.prototype.slice.call(document.querySelectorAll('.filter-area')).forEach(function (area) {
    var input = area.querySelector('.filter-input');
    var selects = Array.prototype.slice.call(area.querySelectorAll('.filter-select'));
    if (area.getAttribute('data-auto-query') === '1' && input) {
      var params = new URLSearchParams(window.location.search);
      input.value = params.get('q') || '';
    }
    if (input) {
      input.addEventListener('input', function () {
        runFilter(area);
      });
    }
    selects.forEach(function (select) {
      select.addEventListener('change', function () {
        runFilter(area);
      });
    });
    runFilter(area);
  });
}());
