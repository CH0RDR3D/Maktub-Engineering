let currentSlide=0;
const slides=document.querySelectorAll('.slide');
const dotsCont=document.getElementById('slideDots');

function initSlides(){
  if(!slides.length || !dotsCont) return;
  slides.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='dot'+(i===0?' active':'');
    d.onclick=()=>goSlide(i);
    dotsCont.appendChild(d);
  });
  setInterval(()=>goSlide((currentSlide+1)%slides.length),3500);
}

function goSlide(n){
  if(!slides.length) return;
  slides[currentSlide].classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
  currentSlide=n;
  slides[currentSlide].classList.add('active');
  document.querySelectorAll('.dot')[currentSlide].classList.add('active');
}

// auto-init
document.addEventListener('DOMContentLoaded',initSlides);

window.goSlide = goSlide;