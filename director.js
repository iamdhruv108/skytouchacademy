(function(){
var d=document,a=d.getElementById('about');
if(!a)return;
var SOC='DASAVTAR SHIKSHA PRASARNI SAMITI',UDISE='09370208217';

/* remove older injected font/style so the new ones always apply */
['dj-style','dj-font'].forEach(function(id){var e=d.getElementById(id);if(e)e.remove()});

/* fonts: Poppins for text, Baloo 2 (already loaded) for headings and numbers */
if(!d.getElementById('dj-font2')){
  var fl=d.createElement('link');fl.id='dj-font2';fl.rel='stylesheet';
  fl.href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
  d.head.appendChild(fl);
}
if(!d.getElementById('dj-style2')){
  var st=d.createElement('style');st.id='dj-style2';
  st.textContent=
    '.cloud{opacity:.22!important}.bub{opacity:.5}'+
    ':root:root body *{font-family:Poppins,Mukta,system-ui,sans-serif}'+
    ':root:root :is(h1,h2,h3,.btn,.logo,.stat b,.notice b,.steps b,th,.gal div,.pi,.cta a.p,.tag){font-family:"Baloo 2",Poppins,system-ui,sans-serif}'+
    ':root:root .logo small{font-family:Poppins,system-ui,sans-serif}'+
    'body{font-size:16px}'+
    '#details .grid{grid-template-columns:1fr}'+
    '@media(min-width:700px){#details .grid{grid-template-columns:1fr 1fr}}';
  d.head.appendChild(st);
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

/* School details: society and UDISE (established year and classes are already in the top cards) */
function card(col,t,v){return '<div class="card" style="--c:'+col+'"><h3>'+t+'</h3><p style="color:var(--ink);font-weight:700;font-size:1.05rem">'+v+'</p></div>'}
var det=d.getElementById('details');
if(!det){
  det=d.createElement('section');det.id='details';
  dir.parentNode.insertBefore(det,dir);
}
if(det.querySelectorAll('.card').length!==2){
  det.innerHTML='<div class="wrap"><h2 class="on">School details</h2><div class="grid">'+
    card('#2f9be0','Managed by',SOC)+card('#f28a1e','UDISE code',UDISE)+'</div></div>';
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
