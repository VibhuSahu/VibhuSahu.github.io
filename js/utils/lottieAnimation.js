/**
 * Reusable Lottie loader.
 *
 * @param {string|HTMLElement} target  - CSS selector or DOM element
 * @param {string} path                - Path/URL to the Lottie .json file
 * @param {Object} [options]
 * @param {boolean} [options.loop=true]
 * @param {boolean} [options.autoplay=true]
 * @param {number}  [options.speed=1]
 * @param {'svg'|'canvas'|'html'} [options.renderer='svg']
 * @returns {Object|null} the lottie animation instance (or null on failure)
 */
function loadLottie(target, path, options = {}) {
  const container =
    typeof target === 'string' ? document.querySelector(target) : target;

  if (!container) {
    console.error('loadLottie: container not found →', target);
    return null;
  }
  if (typeof lottie === 'undefined') {
    console.error('loadLottie: lottie-web library is not loaded.');
    return null;
  }

  const {
    loop = true,
    autoplay = true,
    speed = 1,
    renderer = 'svg',
  } = options;

  const animation = lottie.loadAnimation({
    container,
    renderer,
    loop,
    autoplay,
    path,
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
  });

  animation.setSpeed(speed);
  animation.addEventListener('data_failed', () =>
    console.error('loadLottie: failed to load', path)
  );

  return animation;
}

/* ---------- Usage ---------- */

// // 1) Auto-init every element that has data-lottie-src
// document.querySelectorAll('[data-lottie-src]').forEach((el) => {
//   loadLottie(el, el.dataset.lottieSrc, {
//     loop: el.dataset.lottieLoop !== 'false',
//     autoplay: el.dataset.lottieAutoplay !== 'false',
//     speed: parseFloat(el.dataset.lottieSpeed) || 1,
//   });
// });

// // 2) Manual control: play only on hover
// const hoverAnim = loadLottie('#hover-anim', 'animations/pulse.json', {
//   autoplay: false,
// });

// const hoverEl = document.querySelector('#hover-anim');
// hoverEl.addEventListener('mouseenter', () => hoverAnim.play());
// hoverEl.addEventListener('mouseleave', () => hoverAnim.stop());