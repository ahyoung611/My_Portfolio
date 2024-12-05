
export function about() {

  gsap.to(".about_wrap .item01", {
    scrollTrigger: {
      trigger: ".about_wrap .cont01",
      start: "top top",
      toggleClass: { targets: '.about_wrap .item01', className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item02", {
    scrollTrigger: {
      trigger: ".about_wrap .cont02",
      start: "top top",
      toggleClass: { targets: '.about_wrap .item02', className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item03", {
    scrollTrigger: {
      trigger: ".about_wrap .cont03",
      start: "top top",
      toggleClass: { targets: '.about_wrap .item03', className: 'on' },
      scrub: 2,
    }
  });

  gsap.to(".about_wrap .item04", {
    scrollTrigger: {
      trigger: ".about_wrap .cont04",
      start: "top top",
      toggleClass: { targets: '.about_wrap .item04', className: 'on' },
      scrub: 2,
    }
  });

}