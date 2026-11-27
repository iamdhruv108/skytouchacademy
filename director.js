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
