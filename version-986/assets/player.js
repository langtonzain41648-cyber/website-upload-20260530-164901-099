(function () {
  window.initMoviePlayer = function (streamUrl) {
    var video = document.getElementById("moviePlayer");
    var button = document.getElementById("playerMask");
    var attached = false;
    var hlsInstance = null;

    function attachStream() {
      if (!video || attached) {
        return;
      }
      attached = true;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl;
      } else if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({ enableWorker: true });
        hlsInstance.loadSource(streamUrl);
        hlsInstance.attachMedia(video);
      } else {
        video.src = streamUrl;
      }
    }

    function startVideo() {
      attachStream();
      if (button) {
        button.classList.add("is-hidden");
      }
      var playing = video.play();
      if (playing && playing.catch) {
        playing.catch(function () {});
      }
    }

    if (!video) {
      return;
    }

    if (button) {
      button.addEventListener("click", startVideo);
    }

    video.addEventListener("click", function () {
      if (video.paused) {
        startVideo();
      }
    });

    video.addEventListener("play", function () {
      if (button) {
        button.classList.add("is-hidden");
      }
    });

    window.addEventListener("pagehide", function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  };
})();
