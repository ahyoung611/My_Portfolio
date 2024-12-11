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
      start: "top center",
      end: "bottom center",
      toggleClass: { targets: aboutItem1, className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item02", {
    scrollTrigger: {
      trigger: aboutCont2,
      start: "top center",
      end: "bottom center",
      toggleClass: { targets: aboutItem2, className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item03", {
    scrollTrigger: {
      trigger: aboutCont3,
      start: "top center",
      end: "bottom center",
      toggleClass: { targets: aboutItem3, className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item04", {
    scrollTrigger: {
      trigger: aboutCont4,
      start: "top center",
      end: "bottom center",
      toggleClass: { targets: aboutItem4, className: 'on' },
      scrub: 2,
    }
  });

  const aboutConts = document.querySelectorAll('#about .cont');

  let visibleCount = 0;

  aboutConts.forEach((cont) => {
    ScrollTrigger.create({
      trigger: cont,
      start: "top center",
      end: "bottom center",
      onEnter: () => cont.classList.add('on'), // 화면에 진입 시 'on' 클래스 추가
      onEnterBack: () => cont.classList.add('on'), // 화면 뒤로 재진입 시 'on' 클래스 추가
      onLeave: () => cont.classList.remove('on'), // 화면을 벗어나면 'on' 클래스 제거
      onLeaveBack: () => cont.classList.remove('on') // 위 방향으로 벗어나면 'on' 클래스 제거
    });
  });
}