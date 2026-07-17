// Shared data + behaviors for all Duskrest pages
// [name, price, tag, emoji, image, description, [bullets]]
const PRODUCTS=[
 ["Contour Blackout Sleep Mask",29.95,"Champion","🌘","mask-1.png",
  "Molded memory-foam cups hold total darkness away from your eyes — blink freely, sleep anywhere, even at noon.",
  ["100% blackout, zero eye pressure","Side-sleeper friendly low-profile edges","Adjustable no-snag strap"]],
 ["Weighted Contour Sleep Mask",34.95,"Light","🌑","mask-6.png",
  "The Contour Mask plus gentle, even pressure — like a weighted blanket for your eyes.",
  ["Light pressure therapy calms a racing mind","Total blackout, contoured cups","Cool, breathable fabric"]],
 ["White Noise Machine — 20+ sounds",44.95,"Noise","🌊","white-noise-machine-20-sounds.jpg",
  "Give your ears one steady thing to listen to. Twenty-plus sounds that mask doors, dogs, and neighbors.",
  ["20+ sounds: rain, ocean, fan, pure white noise","Ambient night-light modes","USB-powered, bedside-sized"]],
 ["Cooling Pillowcase",27.95,"Heat","❄️","cooling-pillowcase.jpg",
  "Ice-silk fabric that pulls heat away from your face so the cool side of the pillow is every side.",
  ["Cool-touch ice silk, double-sided","Gentle on skin and hair","Fits standard + queen pillows"]],
 ["Sunrise Alarm Clock",54.95,"Light","🌅","sunrise-alarm-clock.jpg",
  "Wake to light that rises like the sun instead of an alarm that hits like a truck.",
  ["Gradual sunrise wake-up light","Multiple ambient colors + dimming","Gentler mornings, same schedule"]],
 ["Weighted Lavender Eye Pillow",19.95,"Light","💤","weighted-lavender-eye-pillow.jpg",
  "Warm or chill it — gentle weight and lavender calm for the end of hard days.",
  ["Hot & cold compress use","Soft, even weight across the eyes","Perfect wind-down ritual add-on"]],
 ["Premium Foam Earplugs + Case",12.95,"Noise","🔇","premium-foam-earplugs-case.jpg",
  "Soft-foam earplugs that actually stay in, with a case so they don't live loose in a drawer.",
  ["High noise reduction, soft foam","Reusable pairs + travel case","Sleep, travel, focus"]],
 ["Bluetooth Sleep Headband",39.95,"Noise","🎧","bluetooth-sleep-headband.png",
  "Fall asleep to your own audio without earbuds digging into a side-sleeper's ear.",
  ["Flat speakers inside a soft band","Bluetooth, long battery","Doubles as a light-blocking band"]],
 ["Bamboo Cooling Sheet Set",69.95,"Heat","🎋","bamboo-cooling-sheet-set.jpg",
  "Bamboo fiber sheets that breathe all night — smooth, cool, and kind to hot sleepers.",
  ["Naturally cooling bamboo fiber","Silky-smooth, elastic fitted corners","Machine washable"]],
 ["Magnesium Sleep Body Spray",24.95,"Ritual","🌿","magnesium-sleep-body-spray.jpg",
  "Magnesium oil spray for the wind-down routine — spray, breathe, slow down.",
  ["Topical magnesium oil","Part of a calming night ritual","Travel-friendly bottle"]],
 ["Lavender + Chamomile Pillow Spray",19.95,"Ritual","💐","lavender-chamomile-pillow-spra.jpg",
  "A light lavender mist for your pillow that tells your brain the day is over.",
  ["Lavender aromatherapy mist","One spritz before lights out","Pairs with the eye pillow"]],
 ["Side-Sleeper Knee Pillow",26.95,"Comfort","🛏️","side-sleeper-knee-pillow.jpg",
  "Memory foam between the knees keeps hips aligned so you stop waking up twisted.",
  ["Ergonomic memory foam","Relieves hip and lower-back strain","Breathable washable cover"]],
 ["Cervical Contour Memory Foam Pillow",49.95,"Comfort","☁️","cervical-contour-memory-foam-p.jpg",
  "Contoured support that keeps your neck neutral — the fix for waking up with a crick.",
  ["Cervical contour design","Memory foam that holds shape","For back and side sleepers"]],
 ["Travel Blackout Kit",16.95,"Light","🧳","travel-blackout-kit.jpg",
  "Portable blackout for hotel rooms, nurseries, and any window that leaks light.",
  ["Blocks window light anywhere","Packs small for travel","Quick to put up and take down"]],
 ["Red-Light Bedside Lamp",34.95,"Light","🔴",null,
  "Warm red light for late nights — bright enough to see, gentle enough to leave melatonin alone.",
  ["Melatonin-friendly red spectrum","Dimmable bedside glow","For readers and midnight wakers"]],
 ["Nasal Breathing Mouth Tape",14.95,"Ritual","😮‍💨","nasal-breathing-mouth-tape.jpg",
  "Gentle strips that encourage nasal breathing through the night.",
  ["Skin-safe gentle adhesive","Supports quieter nights","30-night supply"]],
 ["Anti-Snore Nose Vents",17.95,"Noise","👃",null,
  "Soft vents that open nasal airflow — for the partner who's tired of elbowing you.",
  ["Opens nasal passages comfortably","Reusable set of sizes","Case included"]],
 ["Cooling Weighted Blanket — 15lb",79.95,"Heat","🫧",null,
  "The calm of a weighted blanket without the heat build-up.",
  ["15lb even glass-bead weight","Cooling fabric side for summer","Calms restless nights"]],
 ["Sleep Tracking Smart Ring",59.95,"Insight","💍",null,
  "See your nights — sleep stages, heart rate, and trends from a ring you forget you're wearing.",
  ["Sleep stage + heart-rate tracking","Days of battery per charge","No subscription required"]],
 ["Nursery Sound + Night Light",39.95,"Noise","🍼","nursery-sound-night-light.jpg",
  "White noise and a soft glow for the smallest sleepers in the house (and their parents).",
  ["Baby-safe sounds + night light","Timer and volume control","Parents sleep too"]]
];
const CHAMPION_GALLERY=["mask-1.png","mask-2.jpg","mask-3.jpg","mask-4.jpg","mask-5.jpg","mask-6.png"];

function cardHTML(p,i){
  const [n,price,t,e,img]=p;
  const media=img?`<img src="${img}" alt="${n}" loading="lazy">`:`<span class="ph-emoji">${e}</span>`;
  const url=i===0?"mask.html":`product.html?p=${i}#p=${i}`;
  return `<a class="card" href="${url}">
     <div class="ph" aria-hidden="true">${media}</div>
     <div class="body">
       <span class="tag">${t}</span><h3>${n}</h3><p class="p">$${price.toFixed(2)}</p>
       <div class="buy"><span class="buy-btn">View product</span></div>
     </div></a>`;
}
function renderGrid(el,items,offset=0){ el.innerHTML=items.map((p,i)=>cardHTML(p,i+offset)).join(""); }

function initGallery(){
  const main=document.getElementById("galleryMain");
  const thumbs=document.getElementById("galleryThumbs");
  if(!main||!thumbs) return;
  thumbs.addEventListener("click",e=>{
    const t=e.target.closest("img[data-full]"); if(!t) return;
    main.src=t.dataset.full; main.alt=t.alt;
    thumbs.querySelectorAll("img").forEach(i=>i.classList.toggle("active",i===t));
  });
}

function initProductPage(){
  const root=document.getElementById("pdp"); if(!root) return;
  const qp=new URLSearchParams(location.search).get("p")||(location.hash.match(/p=(\d+)/)||[])[1]||"1";
  const i=parseInt(qp,10);
  const p=PRODUCTS[i]||PRODUCTS[1];
  const [n,price,tag,e,img,desc,bullets]=p;
  document.title=n+" — Duskrest";
  const media=img?`<img id="galleryMain" src="${img}" alt="${n}">`:`<div class="ph pdp-ph"><span class="ph-emoji">${e}</span></div>`;
  root.innerHTML=`
  <section class="champion dimmable"><div class="wrap champ-in">
    <div class="champ-img">${media}</div>
    <div>
      <p class="eyebrow">${tag} · Duskrest</p>
      <h1>${n}</h1>
      <p class="price">$${price.toFixed(2)}<s class="compare">$${(Math.ceil(price*1.33)-0.05).toFixed(2)}</s></p>
      <p class="pdp-desc">${desc}</p>
      <div class="qty-row"><span style="font-size:14px">Qty</span><div class="qty"><button type="button" onclick="qtyStep(-1,${price})">−</button><span id="qtyVal">1</span><button type="button" onclick="qtyStep(1,${price})">+</button></div></div>
      <ul class="champ-list">
        ${bullets.map(b=>`<li>${b}</li>`).join("")}
        <li>Ships in 1–3 days · tracked US delivery</li>
        <li>30-night better-sleep guarantee</li>
      </ul>
      <a class="btn" data-pay="sku-${i+1}" href="#checkout-note" onclick="return checkoutNote(this)">Buy now — $${price.toFixed(2)}</a>
      <a class="btn-ghost" href="shop.html">← Keep browsing</a>
      <p class="cap-note" id="checkout-note" hidden>Checkout opens this week — leave your email on the <a href="contact.html" style="color:var(--amber)">contact page</a> for 10% off code DUSK10 when it does.</p>
      <div class="trust-bar"><span>30-night guarantee</span><span>Free US shipping over $40</span><span>Human support</span></div>
      <div class="pdp-acc">
        <details open><summary>Description</summary><p>${desc}</p></details>
        <details><summary>Shipping & tracking</summary><p>Orders process in 1–3 days and arrive in the US in 5–11 business days with tracking. Free shipping over $40.</p></details>
        <details><summary>The 30-night guarantee</summary><p>Try it for 30 nights. If your sleep isn't better, email us for a full refund — no forms, no fight.</p></details>
      </div>
    </div>
  </div></section>
  <section class="shop dimmable"><div class="wrap">
    <div class="shop-head"><div><p class="eyebrow">Pairs well with</p><h2>Complete the fix</h2></div></div>
    <div class="grid" id="crossGrid"></div>
  </div></section>`;
  const others=PRODUCTS.map((pp,idx)=>({pp,idx})).filter(x=>x.idx!==i).slice(0,4);
  document.getElementById("crossGrid").innerHTML=others.map(x=>cardHTML(x.pp,x.idx)).join("");
}
function checkoutNote(el){ const n=document.getElementById("checkout-note"); if(n){n.hidden=false;} return false; }

document.addEventListener("DOMContentLoaded",()=>{
  const grid=document.getElementById("productGrid");
  if(grid) renderGrid(grid,PRODUCTS);
  const featured=document.getElementById("featuredGrid");
  if(featured) featured.innerHTML=PRODUCTS.slice(1,5).map((p,k)=>cardHTML(p,k+1)).join("");
  initGallery();
  initProductPage();
  const sw=document.getElementById("lightsSwitch");
  if(sw) sw.addEventListener("click",()=>{
    const on=sw.getAttribute("aria-pressed")==="true";
    sw.setAttribute("aria-pressed",String(!on));
    document.body.classList.toggle("lights-out",!on);
  });
  const cap=document.getElementById("capForm");
  if(cap) cap.addEventListener("submit",e=>{
    e.preventDefault();
    document.getElementById("capNote").textContent="You're in. Use code DUSK10 at checkout — it's waiting for you.";
    e.target.reset();
  });
});
// data-pay anchors are swapped to Stripe Payment Links at launch.
function qtyStep(d,price){
  const v=document.getElementById("qtyVal"); let q=Math.max(1,Math.min(10,parseInt(v.textContent,10)+d));
  v.textContent=q;
  const btn=document.querySelector('#pdp a.btn');
  if(btn) btn.textContent=`Buy now — $${(q*price).toFixed(2)}`;
}
