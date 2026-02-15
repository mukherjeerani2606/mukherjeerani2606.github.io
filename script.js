const themeBtn = document.getElementById("themeToggle");
const aboutBtn = document.getElementById("aboutBtn");
const popup = document.getElementById("aboutPopup");
const closeBtn = document.getElementById("closeAbout");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  if (themeBtn) themeBtn.textContent = "☀️";
}

// Theme toggle
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "🌙";
    }
  });
}

// About popup
if (aboutBtn && popup && closeBtn) {
  aboutBtn.addEventListener("click", () => popup.style.display = "flex");
  closeBtn.addEventListener("click", () => popup.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
}

// ====================
// Music persistence
// ====================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

// Check localStorage if music was playing
if (music && musicBtn) {
  if (localStorage.getItem("musicPlaying") === "true") {
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🎵";
  }

  music.volume = 0.5;

  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "🔊";
      localStorage.setItem("musicPlaying", "true");
    } else {
      music.pause();
      musicBtn.textContent = "🎵";
      localStorage.setItem("musicPlaying", "false");
    }
  });
}
