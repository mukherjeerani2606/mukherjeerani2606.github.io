const themeBtn = document.getElementById("themeToggle");
const aboutBtn = document.getElementById("aboutBtn");
const popup = document.getElementById("aboutPopup");
const closeBtn = document.getElementById("closeAbout");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  if (themeBtn) themeBtn.textContent = "☀️";
}
// Slide down + fade effect on page load for content
window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.container, .read, .hero h1, .hero p, .card');
  fadeElements.forEach((el, index) => {
    el.classList.add('fade-slide');
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 + index * 100); // staggered effect
  });
});

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

// Smooth page transition
// Smooth top-to-bottom page transition
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    let href = this.getAttribute('href');
    document.body.classList.add('fade-out');  // trigger CSS fade + slide
    setTimeout(() => {
      window.location = href;
    }, 500); // duration match CSS transition
  });
});
// For any container you want to animate
window.addEventListener('DOMContentLoaded', () => {
  // Choose the elements to animate (e.g., all paragraphs or poem lines)
  const lines = document.querySelectorAll('.poem, .card h2, .hero h1, .hero p');

  lines.forEach(line => {
    const words = line.textContent.split(' ');
    line.textContent = ''; // empty original line

    // wrap each word in span.stagger
    words.forEach(word => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('stagger');
      line.appendChild(span);
    });

    // add visible class with staggered delay
    const spans = line.querySelectorAll('span.stagger');
    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, idx * 150); // 150ms delay per word
    });
  });
});
