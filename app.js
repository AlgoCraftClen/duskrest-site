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
 ["Silver-Wave Blackout Curtains",36.95,"Light","🌒","travel-blackout-kit.jpg",
  "Thermal blackout curtain panels that seal your window in darkness — with a subtle silver wave pattern that looks as good closed as open.",
  ["Blocks light, dampens noise, insulates heat","Grommet top — hangs in minutes","Machine washable panels"]],
 ["Nasal Breathing Mouth Tape",14.95,"Ritual","😮‍💨","nasal-breathing-mouth-tape.jpg",
  "Gentle strips that encourage nasal breathing through the night.",
  ["Skin-safe gentle adhesive","Supports quieter nights","30-night supply"]],
 ["Bamboo Cooling Blanket",34.95,"Heat","🎐","bamboo-cooling-blanket.jpg",
  "Silky bamboo-fiber blanket that stays cool to the touch — for hot sleepers, summer nights, and AC-optional evenings.",
  ["Cool-touch bamboo fiber","Light, breathable, machine washable","Couch naps and summer beds"]],
 ["Nursery Sound + Night Light",39.95,"Noise","🍼","nursery-sound-night-light.jpg",
  "White noise and a soft glow for the smallest sleepers in the house (and their parents).",
  ["Baby-safe sounds + night light","Timer and volume control","Parents sleep too"]]
];
const REVIEWS={}; // {productName:[{stars,name,date,text}]} - REAL verified buyers only, never fabricated
const GALLERIES={"Silver-Wave Blackout Curtains":["https://cf.cjdropshipping.com/quick/product/f5cfe6bb-347f-4f8a-b4f8-881b0818673f.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/52c09a0e-6dd6-4583-9ff7-4227a83f0fe4.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/7f0eda0b-3233-4972-870e-e2263ad41233.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/71c46ef4-e816-4540-9ca5-83cb216abc50.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Contour Blackout Sleep Mask":["https://cf.cjdropshipping.com/20200907/1046410921119.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200921/1191529562563.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200921/3756341206342.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200921/406598423701.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Weighted Contour Sleep Mask":["https://cf.cjdropshipping.com/20200907/1046410921119.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200921/1191529562563.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200921/3756341206342.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200921/406598423701.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"White Noise Machine — 20+ sounds":["https://oss-cf.cjdropshipping.com/product/2025/03/03/05/4e61a2d3-944b-4562-921e-c19b5ff12135.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/operation-center/file_202502280616141895357322117783552.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/07/29/09/7bb46c3b-f851-4dbc-8329-ff0e55ce16c7_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/07/29/09/2a1afc2b-9a02-4917-83ab-74040fb16740_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Cooling Pillowcase":["https://cf.cjdropshipping.com/quick/product/80649a69-d075-4128-9f0b-cb476bb76adf.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/4a48d17f-3c90-45a7-8dbe-adc65a4048a5.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/3757edd7-8e52-4ccf-8a57-f4c9c6189c6d.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/4cae6350-fa5d-4a06-bf7f-d9af5e1d0e48.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Sunrise Alarm Clock":["https://cf.cjdropshipping.com/quick/product/abfebe73-9737-40e9-8283-aebcbaaa430c.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/operation-center/file_202412120635301867095916264300544.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/d1a75e65-a168-46dd-84eb-e11cf82b8fe3.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/37437118-9c4b-4e89-8233-e7e99371d580.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Weighted Lavender Eye Pillow":["https://cf.cjdropshipping.com/1612938746721.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/1612938746717.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/1612938746722.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/1612938746753.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Premium Foam Earplugs + Case":["https://cf.cjdropshipping.com/5e803a2d-2eed-498a-83ac-03395f7baff7.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/2e379228-1ad1-4e72-8bbb-9fc48536768e.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/2b75d60c-9394-4f7f-af2c-f6b2b5c9e90d.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/87a3ff01-1385-4517-8bc7-c064938bb558.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Bluetooth Sleep Headband":["https://cf.cjdropshipping.com/20200708/1428098650339.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200708/5068802216738.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200708/4830502286151.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/20200708/272351540620.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Bamboo Cooling Sheet Set":["https://cf.cjdropshipping.com/quick/product/b263868e-e87f-4c80-ab2e-62c4758f19fc.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/e012287f-860b-42f6-8ac5-3c22274bb5b8.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/a1f7fea7-a32f-4224-b467-94c30a04a337.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/7268869d-f50a-4649-8264-232a4bbec266.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Magnesium Sleep Body Spray":["https://oss-cf.cjdropshipping.com/product/2024/06/19/07/0b025101-fd84-4da9-a344-29b32ce383b9.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2026/05/13/02/6991d198-f29b-407f-a76e-18875f854773.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/17187552/2406190935000323700.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Lavender + Chamomile Pillow Spray":["https://oss-cf.cjdropshipping.com/product/2024/06/19/01/422e5278-6f48-46cc-a95c-ec8f1115700c_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/06/19/01/26ada397-069f-4617-b531-7d88e934825e_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/06/19/01/6e897506-00d1-4629-b720-dbd7afe63d4b_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/06/19/01/a7f5ec21-c7a5-4a92-b6cc-0ed36d043b63_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Side-Sleeper Knee Pillow":["https://cf.cjdropshipping.com/c821b7fc-ae2f-42c0-acdf-b423347b1fdc.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/operation-center/file_202410180638181847165289637355520.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/18d861b1-f83d-43ad-8ca7-fbf8f42e7cf5.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/c9249c15-3b51-4bc3-9d06-a8143f250557.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Cervical Contour Memory Foam Pillow":["https://cf.cjdropshipping.com/86c11c57-02af-48d5-9529-6d58107b978c.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/operation-center/file_202305290651101663075494264053760.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/5c6e69c9-ecba-433b-899b-871e1f1b7332.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/0e406e52-4c64-42ac-a0c6-3efeba193d06.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Nasal Breathing Mouth Tape":["https://cf.cjdropshipping.com/17281728/1842767006835937280.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/17281728/1842767007272144896.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/17281728/1842769468594589696.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/17281728/1842769469102100480.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Bamboo Cooling Blanket":["https://cf.cjdropshipping.com/b4796a19-1fec-4916-ada1-f5eb02363608.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/operation-center/file_202307050205341676411971148455936.png?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/f16f834d-781e-422c-94fe-8d291a5bbed7.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/quick/product/1599b5f9-70e8-48a4-823d-173366c5b82b.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"],"Nursery Sound + Night Light":["https://oss-cf.cjdropshipping.com/product/2025/03/03/05/4e61a2d3-944b-4562-921e-c19b5ff12135.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://cf.cjdropshipping.com/operation-center/file_202502280616141895357322117783552.jpg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/07/29/09/7bb46c3b-f851-4dbc-8329-ff0e55ce16c7_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800","https://oss-cf.cjdropshipping.com/product/2024/07/29/09/2a1afc2b-9a02-4917-83ab-74040fb16740_trans.jpeg?x-oss-process=image/resize,m_fill,m_pad,w_800,h_800"]};
const PAY={0:"https://buy.stripe.com/aFa9ASgs2aAi8BA1Yj4Ja00",
1:"https://buy.stripe.com/5kQcN42BccIq6ts9qL4Ja04",
2:"https://buy.stripe.com/cNiaEW4Jk5fYaJI32n4Ja05",
3:"https://buy.stripe.com/fZu5kC5No0ZI5pogTd4Ja06",
4:"https://buy.stripe.com/7sY5kCcbM23M9FE8mH4Ja07",
5:"https://buy.stripe.com/4gM4gy1x837QeZY32n4Ja08",
6:"https://buy.stripe.com/5kQ6oGcbM4bU6ts7iD4Ja09",
7:"https://buy.stripe.com/fZu9AS4Jk7o67xw5av4Ja0a",
8:"https://buy.stripe.com/aFaaEWa3E37QaJI0Uf4Ja0b",
9:"https://buy.stripe.com/14A14mejUdMuaJI0Uf4Ja0c",
10:"https://buy.stripe.com/fZu9ASb7IgYG7xw7iD4Ja0d"};
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
  const gal=(GALLERIES[n]||[]).slice(0,4);
  const mainSrc=img||gal[0]||null;
  const thumbs=gal.length>1?'<div class="thumbs" id="galleryThumbs">'+gal.map((u,gi)=>'<img src="'+u+'" data-full="'+u+'" alt="'+n+' photo '+(gi+1)+'"'+(gi===0?' class="active"':'')+'>').join('')+'</div>':'';
  const media=mainSrc?('<div class="champ-img"><img id="galleryMain" src="'+mainSrc+'" alt="'+n+'"></div>'+thumbs):'<div class="champ-img"><div class="ph pdp-ph"><span class="ph-emoji">'+e+'</span></div></div>';
  root.innerHTML=`
  <section class="champion dimmable"><div class="wrap champ-in">
    <div>${media}</div>
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
      <a class="btn" ${PAY[i]?`href="${PAY[i]}" target="_blank" rel="noopener"`:`data-pay="sku-${i+1}" href="#checkout-note" onclick="return checkoutNote(this)"`}>Buy now — $${price.toFixed(2)}</a>
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
  renderReviews(n);
  initGallery();
}
function renderReviews(name){
  const el=document.getElementById("reviewsList"); if(!el) return;
  const rs=REVIEWS[name]||[];
  if(!rs.length){ el.innerHTML='<p style="font-size:14px;color:rgba(201,207,219,.7)">No reviews yet - Duskrest only publishes reviews from verified buyers, so the first ones come from real nights of sleep. With the 30-night guarantee, being early costs you nothing.</p>'; return; }
  el.innerHTML=rs.map(function(r){
    var stars="";
    for(var i=0;i<5;i++) stars+= i<r.stars ? "\u2605" : "\u2606";
    return '<div style="padding:12px 0;border-bottom:1px solid rgba(201,207,219,.08)"><span style="color:var(--amber)">'+stars+'</span> <strong style="color:var(--cream);font-size:14px">'+r.name+'</strong> <span style="font-size:12px;color:rgba(201,207,219,.5)">Verified buyer \u00b7 '+r.date+'</span><p style="font-size:14px;margin-top:6px">'+r.text+'</p></div>';
  }).join("");
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
