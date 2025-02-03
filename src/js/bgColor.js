
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function bgColor() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('section').forEach(item => {
        const color = item.getAttribute('data-bg')
        ScrollTrigger.create({
            trigger: item,
            start: "top 30%",
            end: "bottom 40%",
            // markers: true, //스크롤 틔리거 마커 표시
            scrub: true,

            onEnter: () => gsap.to('body', {
                background: color,
                duration: .5,
            }),
            onEnterBack: () => gsap.to('body', {
                background: color,
                duration: .5,
            })

        })
    })
}

