
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export function uxui() {

  gsap.registerPlugin(ScrollTrigger);
  const horizontal = document.querySelector('#uxui')
  const articles = gsap.utils.toArray('.uxui__item')

  gsap.to(articles, {
    xPercent: -100 * (articles.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: horizontal,
      start: 'top top',
      end: '+=3000',
      pin: true,
      scrub: 1,
    },
  })
}