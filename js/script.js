import { loadLottie } from "./utils/lottieAnimation.js";

const radius = 65;
const circumference = 2 * Math.PI * radius;

// Create one progress circle
function createProgress(el, percent, total) {
  el.innerHTML = `
    <svg width="150" height="150">
      <circle class="bg" cx="75" cy="75" r="${radius}" />
      <circle class="fill" cx="75" cy="75" r="${radius}" />
    </svg>
    <div class="text">${percent} / ${total}</div>
  `;

  const circle = el.querySelector(".fill");

  circle.style.strokeDasharray = circumference;

  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

document.querySelectorAll(".progress").forEach(el => {
  const percent = el.getAttribute("data-percent");
  const total = el.getAttribute("data-total");
  createProgress(el, percent, total);
});


