// Fade-in effect on home page
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Highlight CTA button on hover
const ctaButtons = document.querySelectorAll(".primary-btn");
ctaButtons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
