
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function bgColor() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('section').forEach(item => {
        let color = item.getAttribute('data-bg')
        ScrollTrigger.create({
            trigger: item,
            start: "top 30%",  // 섹션이 거의 화면에 다 보였을 때
            end: "bottom 5%", // 섹션이 거의 화면에서 벗어날 때
            markers: true, //스크롤 틔리거 마커 표시

            onEnter: () => gsap.to('body', {
                background: color,
                duration: .5
            }),
            onEnterBack: () => gsap.to('body', {
                background: color,
                duration: .5
            })

        })
    })
}

