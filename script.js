const t = document.getElementById("themeToggle");
const aboutBtn = document.getElementById("aboutBtn");
const popup = document.getElementById("aboutPopup");
const close = document.getElementById("closeAbout");

// Load saved theme
if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
  if(t) t.innerHTML = "☀️";
}

// Theme toggle
if(t){
  t.onclick = () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
      localStorage.setItem("theme","light");
      t.innerHTML = "☀️";
    }else{
      localStorage.setItem("theme","dark");
      t.innerHTML = "🌙";
    }
  };
}

// About popup (only works in index page, safely ignored elsewhere)
if(aboutBtn && popup && close){
  aboutBtn.onclick = ()=> popup.style.display="flex";
  close.onclick = ()=> popup.style.display="none";

  window.onclick = function(e){
    if(e.target === popup){
      popup.style.display="none";
    }
  };
}
