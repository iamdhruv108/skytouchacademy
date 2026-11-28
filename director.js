(function(){
var d=document,a=d.getElementById('about');
if(!a)return;
function ph(box,src){
  if(!box||box.querySelector('img'))return;
  box.style.position='relative';box.style.overflow='hidden';
  var i=d.createElement('img');i.src=src;i.alt='';
  i.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
  i.onerror=function(){i.remove()};
  box.appendChild(i);
}
if(!d.getElementById('director')){
  var s=d.createElement('section');s.id='director';s.className='tint';
  s.innerHTML='<div class="wrap"><h2 class="on">Director’s message</h2>'+
  '<div class="msg"><div class="pi" aria-hidden="true">D</div><div>'+
  '<q>Our dream is a school where every child in Jakhlaun learns with joy, values come first, and no dream feels too big. We grow every day with the trust of our parents.</q>'+
  '<b>Mr. Dinesh Vishwakarma</b><br><span style="color:var(--mute)">Director, Sky Touch Academy</span>'+
  '</div></div></div>';
  a.parentNode.insertBefore(s,a);
}
ph(d.querySelector('#director .pi'),'director.jpg');
ph(d.querySelector('#about .pi'),'principal.jpg');
})();
(function(){
var d=document,a=d.getElementById('about');
if(!a)return;
var SOC='DASAVTAR SHIKSHA PRASARNI SAMITI',UDISE='09370208217';

/* softer hero clouds and bubbles so white text stays readable */
if(!d.getElementById('dj-style')){
  var st=d.createElement('style');st.id='dj-style';
  st.textContent='.cloud{opacity:.22!important}.bub{opacity:.5}'+
    ':root:root body *{font-family:Montserrat,Mukta,system-ui,sans-serif}'+
    'body{font-size:16px}'+
    'h1,h2,h3{line-height:1.15}'+
    '.hero h1{font-size:clamp(2.3rem,8vw,4.4rem)}'+
    'h2{font-size:clamp(1.7rem,5.5vw,2.5rem)}';
  d.head.appendChild(st);
}
if(!d.getElementById('dj-font')){
  var fl=d.createElement('link');fl.id='dj-font';fl.rel='stylesheet';
  fl.href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
  d.head.appendChild(fl);
}

function ph(box,src){
  if(!box||box.querySelector('img'))return;
  box.style.position='relative';box.style.overflow='hidden';
  var i=d.createElement('img');i.src=src;i.alt='';
  i.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
  i.onerror=function(){i.remove()};
  box.appendChild(i);
}

/* Director card, placed before the Principal card */
var dir=d.getElementById('director');
if(!dir){
  dir=d.createElement('section');dir.id='director';dir.className='tint';
  dir.innerHTML='<div class="wrap"><h2 class="on">Director’s message</h2>'+
  '<div class="msg"><div class="pi" aria-hidden="true">D</div><div>'+
  '<q>Our dream is a school where every child in Jakhlaun learns with joy, values come first, and no dream feels too big. We grow every day with the trust of our parents.</q>'+
  '<b>Mr. Dinesh Vishwakarma</b><br><span style="color:var(--mute)">Director, Sky Touch Academy</span>'+
  '</div></div></div>';
  a.parentNode.insertBefore(dir,a);
}

/* School details card section, placed before the Director card */
if(!d.getElementById('details')){
  var s=d.createElement('section');s.id='details';
  function c(col,t,v){return '<div class="card" style="--c:'+col+'"><h3>'+t+'</h3><p style="color:var(--ink);font-weight:700;font-size:1.05rem">'+v+'</p></div>'}
  s.innerHTML='<div class="wrap"><h2 class="on">School details</h2><div class="grid">'+
    c('#2f9be0','Managed by',SOC)+
    c('#f28a1e','UDISE code',UDISE)+
    c('#2fb38a','Established','2012')+
    c('#8a6fe0','Classes','Nursery to Class 8')+
  '</div></div>';
  dir.parentNode.insertBefore(s,dir);
}

/* Footer line */
var f=d.querySelector('footer');
if(f&&!d.getElementById('soc-line')){
  var l=d.createElement('div');l.id='soc-line';
  l.style.cssText='margin-top:6px;font-size:.9rem;opacity:.9';
  l.textContent='Run by '+SOC+' · UDISE Code: '+UDISE;
  var b=f.querySelector('.adm-open');
  if(b)f.insertBefore(l,b);else f.appendChild(l);
}

ph(d.querySelector('#director .pi'),'director.jpg');
ph(d.querySelector('#about .pi'),'principal.jpg');
})();
