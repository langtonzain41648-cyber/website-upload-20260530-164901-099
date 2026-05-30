document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-toggle");

    if (menuButton) {
        menuButton.addEventListener("click", function () {
            document.body.classList.toggle("menu-open");
        });
    }

    document.querySelectorAll("[data-carousel]").forEach(function (carousel) {
        var slides = Array.prototype.slice.call(carousel.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(carousel.querySelectorAll(".hero-dot"));
        var prev = carousel.querySelector("[data-prev]");
        var next = carousel.querySelector("[data-next]");
        var current = 0;
        var timer = null;

        function show(index) {
            if (!slides.length) {
                return;
            }

            current = (index + slides.length) % slides.length;

            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("active", slideIndex === current);
            });

            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("active", dotIndex === current);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(current + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        if (prev) {
            prev.addEventListener("click", function () {
                show(current - 1);
                start();
            });
        }

        if (next) {
            next.addEventListener("click", function () {
                show(current + 1);
                start();
            });
        }

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                show(Number(dot.getAttribute("data-slide")) || 0);
                start();
            });
        });

        carousel.addEventListener("mouseenter", stop);
        carousel.addEventListener("mouseleave", start);
        show(0);
        start();
    });

    document.querySelectorAll(".filter-scope").forEach(function (scope) {
        var input = scope.querySelector(".filter-input");
        var cards = Array.prototype.slice.call(scope.querySelectorAll(".movie-card"));

        if (!input || !cards.length) {
            return;
        }

        input.addEventListener("input", function () {
            var query = input.value.trim().toLowerCase();

            cards.forEach(function (card) {
                var haystack = [
                    card.getAttribute("data-title") || "",
                    card.getAttribute("data-region") || "",
                    card.getAttribute("data-year") || "",
                    card.getAttribute("data-genre") || "",
                    card.getAttribute("data-tags") || "",
                    card.textContent || ""
                ].join(" ").toLowerCase();

                card.classList.toggle("is-filtered-out", query && haystack.indexOf(query) === -1);
            });
        });
    });

    var searchInput = document.getElementById("site-search-input");
    var searchButton = document.getElementById("site-search-button");
    var searchResults = document.getElementById("search-results");
    var searchStatus = document.getElementById("search-status");

    function escapeHtml(value) {
        return String(value || "").replace(/[&<>"']/g, function (char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#039;"
            }[char];
        });
    }

    function renderSearch(query) {
        if (!searchResults || !window.MOVIE_SEARCH_INDEX) {
            return;
        }

        var keyword = String(query || "").trim().toLowerCase();
        var list = window.MOVIE_SEARCH_INDEX.filter(function (movie) {
            var haystack = [movie.title, movie.region, movie.year, movie.genre, movie.tags, movie.category].join(" ").toLowerCase();
            return !keyword || haystack.indexOf(keyword) !== -1;
        }).slice(0, 120);

        searchResults.innerHTML = list.map(function (movie) {
            return `
<a class="movie-card" href="./${escapeHtml(movie.file)}">
    <div class="movie-poster">
        <img src="${escapeHtml(movie.cover)}" alt="${escapeHtml(movie.title)}" loading="lazy">
        <span class="play-dot">▶</span>
        <span class="score-badge">${escapeHtml(movie.score)}</span>
    </div>
    <div class="movie-info">
        <div class="movie-meta">
            <span>${escapeHtml(movie.year)}</span>
            <span>${escapeHtml(movie.region)}</span>
        </div>
        <h3>${escapeHtml(movie.title)}</h3>
        <p>${escapeHtml(movie.oneLine)}</p>
        <div class="tag-row"><span>${escapeHtml(movie.category)}</span></div>
    </div>
</a>`;
        }).join("");

        if (searchStatus) {
            searchStatus.textContent = keyword ? "已筛选出相关影片，点击卡片进入详情。" : "展示片库中的精选搜索结果。";
        }
    }

    if (searchInput && searchResults) {
        var params = new URLSearchParams(window.location.search);
        var initial = params.get("q") || "";
        searchInput.value = initial;
        renderSearch(initial);

        searchInput.addEventListener("input", function () {
            renderSearch(searchInput.value);
        });
    }

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function () {
            renderSearch(searchInput.value);
        });
    }
});
