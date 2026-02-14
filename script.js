/* ===== Smooth Page Transition ===== */

// Fade in when page loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Fade out before navigating
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && !href.startsWith("#")) {
      e.preventDefault();
      document.body.classList.remove("loaded");
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});
const btn = document.getElementById("themeToggle");

btn.onclick = () => {
  document.body.classList.toggle("light");
};
