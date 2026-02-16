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
function buildUI() {
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

        const cardTitle = document.createElement("h2");
        cardTitle.id = "title_" + p.id;

        const cardDesc = document.createElement("p");
        cardDesc.id = "desc_" + p.id;

        card.appendChild(cardTitle);
        card.appendChild(cardDesc);
        poemList.appendChild(card);

        // Poem Page
        const page = document.createElement("div");
        page.className = "page";
        page.id = p.id;
        page.style.display = "none";

        const container = document.createElement("div");
        container.className = "container read";

        const poemName = document.createElement("h1");
        poemName.className = "text-animate";
        poemName.id = "name_" + p.id;

        const poemText = document.createElement("pre");
        poemText.className = "poem text-animate";
        poemText.id = "text_" + p.id;

        const backBtn = document.createElement("a");
        backBtn.href = "#";
        backBtn.className = "navBtn backBtn";
        backBtn.textContent = "← Back";

        container.appendChild(poemName);
        container.appendChild(poemText);
        container.appendChild(backBtn);
        page.appendChild(container);
        poemPages.appendChild(page);
    });

    applyLang(); // <-- populate card titles & descriptions immediately
    initNavigation(); // <-- attach nav events
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
function applyLang() {
    // Hero
    document.title = (lang === "bn") ? "রাণীর সাহিত্য ভুবন" : "Rani Mukherjee's Literary World";
    document.getElementById("authorName").textContent = (lang === "bn") ? "রাণী মুখার্জী" : "Rani Mukherjee";
    document.getElementById("tagline").textContent = (lang === "bn") ? "শব্দে বোনা অনুভূতির ঘর" : "A world woven with words and emotions";

    // Poems
    poems.forEach(p => {
        const titleEl = document.getElementById("title_" + p.id);
        const descEl  = document.getElementById("desc_" + p.id);
        const nameEl  = document.getElementById("name_" + p.id);
        const textEl  = document.getElementById("text_" + p.id);

        if (titleEl) titleEl.textContent = p["title_" + lang];
        if (descEl)  descEl.textContent  = p["desc_" + lang];
        if (nameEl)  nameEl.textContent  = p["pagetitle_" + lang];
        if (textEl)  textEl.textContent  = p["text_" + lang];
    });

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
