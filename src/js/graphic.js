
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

export function graphic() {

  gsap.registerPlugin(ScrollTrigger);
  const horizontal = document.querySelector('#graphic')
  const articles = gsap.utils.toArray('.graphic__item')

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