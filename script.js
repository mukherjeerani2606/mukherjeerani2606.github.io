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
    শুভেচ্ছা জানায় সবাই ফোনের ভেতর দিয়ে।

ঘরে আনা হচ্ছে মাংস মিষ্টি 
    যাতে পড়ে লোকের দৃষ্টি
হোয়াটস্অ্যাপ , ভিডিও কল, ফেসবুক 
    নেট দুনিয়ায় শুভেচ্ছার মহাধুম।

হয়তো তুমি, তাকেও জানিয়েছো ফোনে শুভেচ্ছা 
    যার পাশে বসে বলতে পারতে কথা !
যদি তুমিও মেতেছ ফোনের মাধ্যমে 
    তবে প্রশ্ন করে নিজেকে!

বাড়ির কাউকে কী জানিয়েছো শুভেচ্ছা ?? 
    করেছ কী প্রনাম ??`
   },
   poem2:{
    title:"স্বার্থ | কবিতা",
    desc:"মানুষের স্বার্থপরতার বাস্তবতা...",
    name:"স্বার্থ",
    text:`দুনিয়াটা স্বার্থে ভরা 
স্বার্থ ছাড়া সবই মরা !
বন্ধু হোক সে যতই আপন 
ভালোবাসাতে সবাই কূপন

নিজের স্বার্থ ফুরালে বুঝি 
কেউ কাউকে না চিনি 
যতই ভাবি আাপন সবাই 
ততই বেশি ঠকায় সবাই

হাসলে আমি থাকবে সে 
কাঁদলে পরে 'তুমি' কে ??
এ জগতের কেউ কারো নয় 
মনে পড়ে তার , যখন পার হয় না সময় 

তাই তো বলি... 
কও না কথা কথা আমার সনে 
থাকবো আমি আপন মনে 
দুনিয়াটা স্বার্থে ভরা 
স্বার্থ ছাড়া সবই মরা !`
   }
  },

  about:`আমি রাণী মুখার্জী, এক ইঞ্জিনিয়ারিং ছাত্রী, তবে পেশার বাইরের জগতটায় আমি লিখতে ভালোবাসি।  
আমার কাছে পৃথিবী মানেই হাজারো ছোট ছোট অনুভূতির সমাহার।  
আমি মনে করি, যা মুখে বলা যায় না, তা কলমের আঁচড়ে সহজে বুঝিয়ে দেওয়া যায়।  
সমাজ, মানুষের মনের জটিল রসায়ন আর অব্যক্ত আবেগগুলো নিয়ে ভাবতেই আমি সবচেয়ে বেশি ভালোবাসি।  
আমার লেখায় যদি আপনার মনের কোনো সুপ্ত অনুভূতি স্পর্শ পায়, তবেই আমার পরিশ্রম সার্থক।`
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
    text:`On the first day of the year, greetings come counting one by one
Say your regards, and give your blessings!
Uncles and aunts, cousins
Everyone sends wishes through the phone.

Bringing sweets and meat
To catch everyone's attention
WhatsApp, video calls, Facebook
The internet celebrates greetings grandly.

Perhaps you have also sent greetings via phone
Sitting beside someone, unable to speak!
If you also sent them via phone
Then ask yourself!

Did you tell anyone at home your greetings??
Did you pay your respects??`
   },
   poem2:{
    title:"Selfishness | Poem",
    desc:"The reality of human selfishness...",
    name:"Selfishness",
    text:`The world is full of selfishness, 
without selfishness, everything dies!
No matter how close a friend is, 
even love can be deceptive.

When one's own interest runs out, 
people fail to truly know each other. 
The more I consider everyone as close, 
the more they disappoint me.

If I smile, someone stays, 
if I cry, who will notice? 
No one really belongs to anyone in this world; 
they only remember when time is short.

So I say... 
Do not speak much with me; 
I will stay with my own thoughts. 
The world is full of selfishness, 
without selfishness, everything dies!`
   }
  },

  about:`I am Rani Mukherjee, an engineering student, but I love writing beyond my profession.  
To me, the world is a collection of countless small emotions.  
I believe that what cannot be spoken can be expressed clearly with the stroke of a pen.  
I love reflecting on society, the complex chemistry of human minds, and unexpressed emotions.  
If my writing touches some hidden feeling in your heart, my effort is worthwhile.`
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
