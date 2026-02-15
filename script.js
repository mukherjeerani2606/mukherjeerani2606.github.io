/* =========================
   Page Fade In
========================= */
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});


/* =========================
   Page Fade Out (Smooth Transition)
========================= */
document.querySelectorAll(".page-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.href;

    document.body.classList.remove("fade-in");

    setTimeout(() => {
      window.location.href = url;
    }, 300);
  });
});


/* =========================
   Theme Toggle (Persistent)
========================= */
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.innerHTML = "☀️";
  }

  // Toggle theme
  themeBtn.onclick = () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    themeBtn.innerHTML = isLight ? "☀️" : "🌙";

    localStorage.setItem("theme", isLight ? "light" : "dark");
  };
}


/* =========================
   About Popup (Index Only)
========================= */
const aboutBtn = document.getElementById("aboutBtn");
const popup = document.getElementById("aboutPopup");
const closeBtn = document.getElementById("closeAbout");

if (aboutBtn && popup && closeBtn) {

  aboutBtn.onclick = () => {
    popup.style.display = "flex";
  };

  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popup.style.display = "none";
    }
  });
}
