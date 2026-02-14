const btn = document.getElementById("modeToggle");

btn.onclick = () => {
    document.body.classList.toggle("light-mode");
    btn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
};
