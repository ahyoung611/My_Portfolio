import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

export function header() {
    // smooth scroll ---------------------------------------------------------------
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    //각각의 section의 위치정보------------------------------------------------------------------------------
    let links = gsap.utils.toArray('nav ul li a')
    links.forEach(link => {
        let elem = document.querySelector(link.getAttribute('href'))

        ScrollTrigger.create({
            trigger: elem,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self => linkActive(link))
        })

        //---------------------------------------------------------------------------------------------------
        link.addEventListener('click', function (e) {
            e.preventDefault()
            linkActive(link)
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: elem,
                    offsetY: 50
                },
                overwite: 'auto'

            })
        })
    });


    //NAV 활성화 비활성화---------------------------------------------------------------------------------------------------
    const showHeader = gsap.from('header', {
        yPercent: -200,
        paused: true,
        duration: .2
    }).progress(1)

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showHeader.play() : showHeader.reverse()
        }
    })

    //버튼 활성화 비활성화------------------------------------------------------------------------------
    function linkActive(link) {
        links.forEach(el => el.classList.remove('on'))
        link.classList.add('on')
    }
}