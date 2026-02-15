/* ================= THEME ================= */
const themeBtn = document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){
 document.body.classList.add("light");
 themeBtn.textContent="☀️";
}
themeBtn.onclick=()=>{
 document.body.classList.toggle("light");
 localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
 themeBtn.textContent=document.body.classList.contains("light")?"☀️":"🌙";
};

/* ================= MUSIC ================= */
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicToggle");
music.volume=0.5;
if(localStorage.getItem("musicPlaying")==="true"){
 music.play();
 musicBtn.textContent="🔊";
}
musicBtn.onclick=()=>{
 if(music.paused){
  music.play(); musicBtn.textContent="🔊";
  localStorage.setItem("musicPlaying","true");
 }else{
  music.pause(); musicBtn.textContent="🎵";
  localStorage.setItem("musicPlaying","false");
 }
};

/* ================= NAVIGATION ================= */
function triggerAnim(page){
 page.querySelectorAll(".text-animate").forEach(el=>{
  el.classList.remove("text-animate");
  void el.offsetWidth;
  el.classList.add("text-animate");
 });
}
document.querySelectorAll(".navBtn").forEach(btn=>{
 btn.onclick=e=>{
  e.preventDefault();
  const target=btn.dataset.target;
  document.querySelectorAll(".page").forEach(p=>p.style.display="none");
  const page=document.getElementById(target);
  page.style.display="block";
  triggerAnim(page);
 };
});

/* ================= ABOUT POPUP ================= */
const aboutBtn=document.getElementById("aboutBtn");
const popup=document.getElementById("aboutPopup");
document.getElementById("closeAbout").onclick=()=>popup.style.display="none";
aboutBtn.onclick=()=>popup.style.display="flex";
window.onclick=e=>{ if(e.target===popup) popup.style.display="none"; };

/* ================= LANGUAGE DATA ================= */
const i18n={
 bn:{
  name:"রাণী মুখার্জী",
  tagline:"শব্দে বোনা অনুভূতির ঘর",
  back:"← ফিরে যাও",

  poems:{
   poem1:{
    title:"নববর্ষ | কবিতা",
    desc:"অপ্রিয় সত্য কথা ...",
    name:"নববর্ষ",
    text:`বছরের প্রথমদিনে প্রণাম আসে যায় গুনে গুনে 
বলে প্রনাম নিও, ও বলে আশীষ দিও!
জেঠু-জেঠি, মামা-মামি, পিসি-পিসে 
শুভেচ্ছা জানায় সবাই ফোনের ভেতর দিয়ে।`
   },
   poem2:{
    title:"স্বার্থ | কবিতা",
    desc:"মানুষের স্বার্থপরতার বাস্তবতা...",
    name:"স্বার্থ",
    text:`দুনিয়াটা স্বার্থে ভরা 
স্বার্থ ছাড়া সবই মরা !
বন্ধু হোক সে যতই আপন 
ভালোবাসাতে সবাই কূপন`
   }
  },

  about:`আমি রাণী মুখার্জী, এক ইঞ্জিনিয়ারিং ছাত্রী। লেখাই আমার অনুভূতির প্রকাশ।`
 },

 en:{
  name:"Rani Mukherjee",
  tagline:"A world woven with words and emotions",
  back:"← Go Back",

  poems:{
   poem1:{
    title:"New Year | Poem",
    desc:"The bitter truth ...",
    name:"New Year",
    text:`On the first day of the year, greetings come one by one...`
   },
   poem2:{
    title:"Selfishness | Poem",
    desc:"The reality of human selfishness...",
    name:"Selfishness",
    text:`The world is full of selfishness...`
   }
  },

  about:`I am Rani Mukherjee, an engineering student who loves writing.`
 }
};

/* ================= LANGUAGE ENGINE ================= */
let lang="bn";
const langBtn=document.getElementById("langToggle");

function getNested(obj,path){
 return path.split(".").reduce((o,p)=>o&&o[p],obj);
}

function applyLang(){
 document.querySelectorAll("[data-i18n]").forEach(el=>{
  const key=el.dataset.i18n;
  const val=getNested(i18n[lang],key);
  if(val) el.textContent=val;
 });
 document.getElementById("aboutText").textContent=i18n[lang].about;
}

langBtn.onclick=()=>{
 lang=lang==="bn"?"en":"bn";
 langBtn.textContent=lang==="bn"?"EN":"BN";
 applyLang();
};

applyLang();
