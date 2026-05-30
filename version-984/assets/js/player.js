import { H as Hls } from './hls-vendor-dru42stk.js';

const shell = document.querySelector('[data-player-shell]');
const video = document.querySelector('[data-video-player]');
const button = document.querySelector('[data-play-button]');
const note = document.querySelector('[data-player-note]');

function setNote(message) {
  if (note) {
    note.textContent = message;
  }
}

async function startPlayer() {
  if (!video || !button) {
    return;
  }

  const source = video.dataset.source;
  if (!source) {
    setNote('播放源暂不可用，请稍后再试。');
    return;
  }

  button.style.display = 'none';
  video.setAttribute('controls', 'controls');

  try {
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;
    } else if (Hls && Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false
      });
      hls.loadSource(source);
      hls.attachMedia(video);
    } else {
      video.src = source;
    }

    await video.play();
    setNote('正在播放高清线路，可通过播放器控制条切换全屏或暂停。');
  } catch (error) {
    console.error(error);
    setNote('浏览器阻止了自动播放，请再次点击播放按钮或使用播放器控制条。');
    button.style.display = 'grid';
  }
}

if (button) {
  button.addEventListener('click', startPlayer);
}

if (shell) {
  shell.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      startPlayer();
    }
  });
}
