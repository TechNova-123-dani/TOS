
// script.js - Technova Final Edition
document.addEventListener('DOMContentLoaded', function(){
  // Preloader
  const pre = document.getElementById('preloader');
  setTimeout(()=>{ if(pre){ pre.style.opacity='0'; pre.style.pointerEvents='none'; setTimeout(()=>pre.remove(),600);} }, 900);

  // AOS
  if(typeof AOS !== 'undefined') AOS.init({duration:900,offset:120,once:true});

  // Swiper hero + testimonials
  if(typeof Swiper !== 'undefined'){
    new Swiper('.hero-swiper', {
      loop:true, effect:'fade', speed:900, autoplay:{delay:5000,disableOnInteraction:false},
      pagination:{el:'.swiper-pagination',clickable:true}, navigation:{nextEl:'.swiper-button-next', prevEl:'.swiper-button-prev'}
    });
    new Swiper('.testimonials-slider', {
      loop:true, slidesPerView:1, autoplay:{delay:6000,disableOnInteraction:false},
      pagination:{el:'.testimonials-slider .swiper-pagination', clickable:true}
    });
  }

  // Sticky transparent -> solid header
  const header = document.querySelector('.site-header');
  function checkHeader(){ if(window.scrollY>60){ header.classList.remove('at-top'); header.classList.add('solid'); } else { header.classList.add('at-top'); header.classList.remove('solid'); } }
  checkHeader(); window.addEventListener('scroll', checkHeader);

  // Nav toggle mobile
  const toggle = document.querySelector('.nav-toggle'), navList = document.querySelector('.nav-list');
  if(toggle) toggle.addEventListener('click', ()=> navList.style.display = (navList.style.display==='flex' ? 'none' : 'flex') );

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn=> btn.addEventListener('click', ()=> {
    const a = btn.nextElementSibling; if(!a) return;
    a.style.display = (a.style.display==='block' ? 'none' : 'block');
  }));

  // Contact form simulation
  const cform = document.getElementById('contact-form');
  if(cform) cform.addEventListener('submit', function(e){ e.preventDefault(); alert('Message sent — we will respond within 2 business days.'); cform.reset(); });

  // Scroll to top
  const scrollBtn = document.getElementById('scrollTopBtn'); window.addEventListener('scroll', ()=> { if(window.scrollY>400) scrollBtn.style.display='block'; else scrollBtn.style.display='none'; });
  if(scrollBtn) scrollBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // dynamic year
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});
var testimonialSwiper = new Swiper(".testimonialsSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 800,
  effect: "slide",
});
var marketingSwiper = new Swiper(".marketing-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
var swiper = new Swiper(".technovaSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
