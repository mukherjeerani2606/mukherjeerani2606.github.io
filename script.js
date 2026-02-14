// THEME TOGGLE
const toggle = document.getElementById("themeToggle");

if(toggle){
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){
            toggle.textContent = "☀️ Light mode";
        } else {
            toggle.textContent = "🌙 Dark mode";
        }
    });
}

// ABOUT PANEL
const aboutBtn = document.getElementById("aboutBtn");
const aboutPanel = document.getElementById("aboutPanel");
const closeAbout = document.getElementById("closeAbout");

if(aboutBtn){
    aboutBtn.addEventListener("click", () => {
        aboutPanel.classList.add("active");
    });
}

if(closeAbout){
    closeAbout.addEventListener("click", () => {
        aboutPanel.classList.remove("active");
    });
}
