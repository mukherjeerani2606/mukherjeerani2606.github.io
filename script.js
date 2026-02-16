/* ================= CONFIG ================= */ 
let lang = "bn";
let poems = [];
let aboutData = {};

/* ================= LOAD POEMS ================= */
fetch("poems.json")
.then(res => res.json())
.then(data => {
  poems = data;
  buildUI();
  applyLang();
});

/* ================= LOAD ABOUT ================= */
fetch("about.json")
.then(res => res.json())
.then(data => {
  aboutData = data;
  updateAbout();
});

/* ================= BUILD UI ================= */
function buildUI(){
  const poemList = document.getElementById("poemList");
  const poemPages = document.getElementById("poemPages");

  poemList.innerHTML = "";
  poemPages.innerHTML = "";

  poems.forEach(p => {

    // Card
    const card = document.createElement("a");
    card.href = "#";
    card.className = "card navBtn";
    card.dataset.target = p.id;
    card.innerHTML = `
      <h2 id="title_${p.id}"></h2>
      <p id="desc_${p.id}"></p>
    `;
    poemList.appendChild(card);

    // Poem Page
    const page = document.createElement("div");
    page.className = "page";
    page.id = p.id;
    page.style.display = "none";
    page.innerHTML = `
      <div class="container read">
        <h1 class="text-animate" id="name_${p.id}"></h1>
        <pre class="poem text-animate" id="text_${p.id}"></pre>
        <a href="#" class="navBtn backBtn">← Back</a>
      </div>
    `;
    poemPages.appendChild(page);
  });

  initNavigation();
}

/* ================= NAVIGATION ================= */
function initNavigation(){
  document.querySelectorAll(".navBtn").forEach(btn=>{
    btn.onclick = e => {
      e.preventDefault();

      document.querySelectorAll(".page").forEach(p=>p.style.display="none");

      if(btn.dataset.target){
        document.getElementById(btn.dataset.target).style.display="block";
      } else {
        document.getElementById("homePage").style.display="block";
      }
    };
  });
}

/* ================= HERO SECTION ================= */
function updateHero(){
  const heroName = document.getElementById("authorName");
  const tagline  = document.getElementById("tagline");
  const pageTitle = document.querySelector("title");

  if(lang === "bn"){
    heroName.textContent = "রাণী মুখার্জী";
    tagline.textContent  = "শব্দে বোনা অনুভূতির ঘর";
    pageTitle.textContent = "রাণীর সাহিত্য ভুবন";
  } else {
    heroName.textContent = "Rani Mukherjee";
    tagline.textContent  = "A world woven with words and emotions";
    pageTitle.textContent = "Rani's Literary World";
  }
}

/* ================= LANGUAGE APPLY ================= */
function applyLang(){
  poems.forEach(p=>{
    document.getElementById("title_"+p.id).textContent = p["title_"+lang];
    document.getElementById("desc_"+p.id).textContent  = p["desc_"+lang];
    document.getElementById("name_"+p.id).textContent  = p["title_"+lang];
    document.getElementById("text_"+p.id).textContent  = p["text_"+lang];
  });

  updateHero();
  updateAbout();
  updateLangButton();
}

/* ================= ABOUT ================= */
function updateAbout(){
  if(aboutData[lang]){
    document.getElementById("aboutText").textContent = aboutData[lang];
  }
}

/* ================= LANGUAGE BUTTON ================= */
function updateLangButton(){
  const btn = document.getElementById("langToggle");
  btn.textContent = (lang === "bn") ? "EN" : "BN";
}

document.getElementById("langToggle").onclick = () => {
  lang = (lang === "bn") ? "en" : "bn";
  applyLang();
};

/* ================= THEME ================= */
const themeBtn = document.getElementById("themeToggle");

// Load saved theme
if(localStorage.getItem("theme")==="light"){
  document.body.classList.add("light");
  themeBtn.textContent="☀️";
} else {
  themeBtn.textContent="🌙";
}

themeBtn.onclick = () => {
  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    themeBtn.textContent="☀️";
    localStorage.setItem("theme","light");
  } else {
    themeBtn.textContent="🌙";
    localStorage.setItem("theme","dark");
  }
};

/* ================= MUSIC ================= */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

// default OFF
musicBtn.textContent = "🎵";

musicBtn.onclick = () => {
  if(music.paused){
    music.play();
    musicBtn.textContent = "🔊";
  } else {
    music.pause();
    musicBtn.textContent = "🎵";
  }
};

/* ================= ABOUT POPUP ================= */
const popup = document.getElementById("aboutPopup");
document.getElementById("aboutBtn").onclick = () => popup.style.display="flex";
document.getElementById("closeAbout").onclick = () => popup.style.display="none";
window.onclick = e => { if(e.target === popup) popup.style.display="none"; };
