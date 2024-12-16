
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export function graphic() {

  gsap.registerPlugin(ScrollTrigger);
  const horizontal = document.querySelector('#graphic')
  const articles = gsap.utils.toArray('.graphic__item')

  function setXPercent() {
    let xPercentValue;

    if (window.innerWidth <= 767) {
      xPercentValue = -135 * (articles.length - 1);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      xPercentValue = -125 * (articles.length - 1);
    } else if (window.innerWidth >= 1024) {
      xPercentValue = -100 * (articles.length - 1);
    }

    // GSAP 애니메이션
    gsap.to(articles, {
      xPercent: xPercentValue,
      ease: 'none',
      scrollTrigger: {
        trigger: horizontal,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 1,
      },
    });
  }

  setXPercent();
  
  window.addEventListener('resize', function(){
    setXPercent()
    location.reload();
});
}