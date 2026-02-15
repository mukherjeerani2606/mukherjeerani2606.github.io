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

// About popup
const aboutBtn = document.getElementById("aboutBtn");
const popup = document.getElementById("aboutPopup");
const closeBtn = document.getElementById("closeAbout");

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

const langBtn = document.getElementById("langToggle");
let isEnglish = false;

// Full translations array
const translations = [
  // Hero Section
  { bn: "রাণী মুখার্জী", en: "Rani Mukherjee" },
  { bn: "শব্দে বোনা অনুভূতির ঘর", en: "A world woven with words and emotions" },
  
  // Cards / Home Page
  { bn: "নববর্ষ | কবিতা", en: "New Year | Poem" },
  { bn: "অপ্রিয় সত্য কথা ...", en: "The bitter truth ..." },
  { bn: "স্বার্থ | কবিতা", en: "Selfishness | Poem" },
  { bn: "মানুষের স্বার্থপরতার বাস্তবতা...", en: "The reality of human selfishness..." },

  // Poem 1
  { bn: "নববর্ষ", en: "New Year" },
  { bn: `বছরের প্রথমদিনে প্রণাম আসে যায় গুনে গুনে 
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
    করেছ কী প্রনাম ??`, 
    en: `On the first day of the year, greetings come counting one by one
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

  // Poem 2
  { bn: "স্বার্থ", en: "Selfishness" },
  { bn: `দুনিয়াটা স্বার্থে ভরা 
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
স্বার্থ ছাড়া সবই মরা !`,
en: `The world is full of selfishness
Without selfishness, everything dies!
No matter how close a friend is
Everyone cheats even in love.

When one's own interest ends
No one really knows anyone
The more I think everyone is close
The more everyone deceives.

If I smile, he/she stays
If I cry, who cares??
No one belongs to anyone in this world
They remember only when time is scarce.

So I say...
Do not speak much with me
I will remain with my own mind
The world is full of selfishness
Without selfishness, everything dies!`
  },

  // Back button
  { bn: "← ফিরে যাও", en: "← Go Back" }
];

// Language toggle function
if(langBtn){
  langBtn.addEventListener("click", ()=>{
    isEnglish = !isEnglish;
    langBtn.textContent = isEnglish ? "BN" : "EN";

    // Replace text in all elements
    document.querySelectorAll("h1,h2,p,pre,a").forEach(el=>{
      translations.forEach(tr=>{
        if(isEnglish){
          if(el.textContent.includes(tr.bn)) el.textContent = el.textContent.replace(tr.bn,tr.en);
        } else {
          if(el.textContent.includes(tr.en)) el.textContent = el.textContent.replace(tr.en,tr.bn);
        }
      });
    });
  });
}

