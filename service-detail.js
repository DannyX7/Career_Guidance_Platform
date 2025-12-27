// Back to Services
function goBack() {
  window.location.href = "services.html";
}

// Reading progress indicator
window.addEventListener("scroll", () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.documentElement.style.setProperty("--read", scrolled + "%");
});
