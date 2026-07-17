// Shared data + behaviors for all Duskrest pages
const PRODUCTS=[
 ["Contour Blackout Sleep Mask",29.95,"Champion","🌘"],
 ["Weighted Contour Sleep Mask",34.95,"Light","🌑"],
 ["White Noise Machine — 20+ sounds",44.95,"Noise","🌊"],
 ["Cooling Pillowcase",27.95,"Heat","❄️"],
 ["Sunrise Alarm Clock",54.95,"Light","🌅"],
 ["Weighted Lavender Eye Pillow",19.95,"Light","💤"],
 ["Premium Foam Earplugs + Case",12.95,"Noise","🔇"],
 ["Bluetooth Sleep Headband",39.95,"Noise","🎧"],
 ["Bamboo Cooling Sheet Set",69.95,"Heat","🎋"],
 ["Magnesium Sleep Body Spray",24.95,"Ritual","🌿"],
 ["Lavender + Chamomile Pillow Spray",19.95,"Ritual","💐"],
 ["Side-Sleeper Knee Pillow",26.95,"Comfort","🛏️"],
 ["Cervical Contour Memory Foam Pillow",49.95,"Comfort","☁️"],
 ["Travel Blackout Kit",16.95,"Light","🧳"],
 ["Red-Light Bedside Lamp",34.95,"Light","🔴"],
 ["Nasal Breathing Mouth Tape",14.95,"Ritual","😮‍💨"],
 ["Anti-Snore Nose Vents",17.95,"Noise","👃"],
 ["Cooling Weighted Blanket — 15lb",79.95,"Heat","🫧"],
 ["Sleep Tracking Smart Ring",59.95,"Insight","💍"],
 ["Nursery Sound + Night Light",39.95,"Noise","🍼"]
];

const IMAGES={ "Contour Blackout Sleep Mask":"mask-1.png" };
function renderGrid(el,items){
  el.innerHTML=items.map(([n,p,t,e],i)=>`
   <div class="card">
     <div class="ph" aria-hidden="true">${IMAGES[n]?`<img src="${IMAGES[n]}" alt="${n}" style="width:100%;height:100%;object-fit:cover">`:e}</div>
     <div class="body">
       <span class="tag">${t}</span><h3>${n}</h3><p class="p">$${p.toFixed(2)}</p>
       <div class="buy"><a href="contact.html" data-pay="sku-${i+1}">Add to cart</a></div>
     </div>
   </div>`).join("");
}

document.addEventListener("DOMContentLoaded",()=>{
  const grid=document.getElementById("productGrid");
  if(grid) renderGrid(grid,PRODUCTS);

  const featured=document.getElementById("featuredGrid");
  if(featured) renderGrid(featured,PRODUCTS.slice(1,5));

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
