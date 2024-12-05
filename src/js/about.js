import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function about() {
  gsap.registerPlugin(ScrollTrigger);

  const aboutCont1 = document.querySelector('#about .cont01')
  const aboutCont2 = document.querySelector('#about .cont02')
  const aboutCont3 = document.querySelector('#about .cont03')
  const aboutCont4 = document.querySelector('#about .cont04')

  const aboutItem1 = document.querySelector('#about .item01')
  const aboutItem2 = document.querySelector('#about .item02')
  const aboutItem3 = document.querySelector('#about .item03')
  const aboutItem4 = document.querySelector('#about .item04')
  
  gsap.to(".about_wrap .item01", {
    scrollTrigger: {
      trigger: aboutCont1,
      start: "top top",
      toggleClass: { targets:aboutItem1, className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item02", {
    scrollTrigger: {
      trigger: aboutCont2,
      start: "top top",
      toggleClass: { targets: aboutItem2, className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item03", {
    scrollTrigger: {
      trigger: aboutCont3,
      start: "top top",
      toggleClass: { targets: aboutItem3, className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item04", {
    scrollTrigger: {
      trigger: aboutCont4,
      start: "top top",
      toggleClass: { targets:aboutItem4, className: 'on' },
      scrub: 2,
    }
  });

}