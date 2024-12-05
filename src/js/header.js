
export function header() {
    // smooth scroll ---------------------------------------------------------------
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    

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
}