"use strict";

const teaser = document.querySelector("#teaser-video");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (teaser && !reducedMotion.matches && !navigator.connection?.saveData) {
  teaser.play().catch(() => { /* Native controls remain available if autoplay is blocked. */ });
}
reducedMotion.addEventListener("change", (event) => {
  if (event.matches) teaser?.pause();
});

const researchMenu = document.querySelector(".research-menu");
document.addEventListener("click", (event) => {
  if (researchMenu?.open && !researchMenu.contains(event.target)) researchMenu.open = false;
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && researchMenu?.open) {
    researchMenu.open = false;
    researchMenu.querySelector("summary").focus();
  }
});
