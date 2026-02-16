let lang="bn";
let poems=[];

/* Load poems */
fetch("poems.json")
.then(r=>r.json())
.then(data=>{
 poems=data;
 buildUI();
 applyLang();
});

/* Build poem cards + pages */
function buildUI(){
 const poemList=document.getElementById("poemList");
 const poemPages=document.getElementById("poemPages");

 poems.forEach(p=>{
  poemList.innerHTML+=`
   <a href="#" class="card navBtn" data-target="${p.id}">
    <h2 id="title_${p.id}"></h2>
    <p id="desc_${p.id}"></p>
   </a>
  `;

  poemPages.innerHTML+=`
   <div class="page" id="${p.id}" style="display:none;">
    <div class="container read">
     <h1 class="text-animate" id="name_${p.id}"></h1>
     <pre class="poem text-animate" id="text_${p.id}"></pre>
     <a href="#" class="navBtn">← Back</a>
    </div>
   </div>
  `;
 });

 document.querySelectorAll(".navBtn").forEach(btn=>{
  btn.onclick=e=>{
   e.preventDefault();
   document.querySelectorAll(".page").forEach(p=>p.style.display="none");
   if(btn.dataset.target) document.getElementById(btn.dataset.target).style.display="block";
   else document.getElementById("homePage").style.display="block";
  };
 });
}

/* Language */
function applyLang(){
 poems.forEach(p=>{
  document.getElementById("title_"+p.id).textContent=p["title_"+lang];
  document.getElementById("desc_"+p.id).textContent=p["desc_"+lang];
  document.getElementById("name_"+p.id).textContent=p["title_"+lang];
  document.getElementById("text_"+p.id).innerText=p["text_"+lang];
 });
}

/* Language toggle */
document.getElementById("langToggle").onclick=()=>{
 lang=lang==="bn"?"en":"bn";
 applyLang();
};

/* Theme */
const themeBtn=document.getElementById("themeToggle");
themeBtn.onclick=()=>document.body.classList.toggle("light");

/* Music */
const music=document.getElementById("bgMusic");
document.getElementById("musicToggle").onclick=()=>{
 music.paused?music.play():music.pause();
};

/* About popup */
const popup=document.getElementById("aboutPopup");
document.getElementById("aboutBtn").onclick=()=>popup.style.display="flex";
document.getElementById("closeAbout").onclick=()=>popup.style.display="none";
window.onclick=e=>{if(e.target===popup)popup.style.display="none";}
