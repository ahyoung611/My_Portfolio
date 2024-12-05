import gsap from 'gsap';

export function footer() {
    //footer-desc
    const duration = 1.5
    const count = gsap.utils.toArray('.text').length
    const pause = 2
    const stagger = duration + pause

    const delay = stagger * (count - 1) + pause

    const tl = gsap.timeline()
    tl.from('.text', {
        rotationX: -90,
        y: 50,
        duration: duration,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: delay
        }
    })
    tl.to('.text', {
        rotationX: 90,
        opacity: 0,
        y: -50,
        duration: duration,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: delay
        }
    }, 1)

    //footer- fllow
    // const splide = new Splide('.splide',{
    //     type:'loop',
    //     drag:false,
    //     focus:'center',
    //     gap:30,
    //     autoWidth:true,
    //     arrows:false,
    //     pagination:false,
    //     autoScroll:{
    //         speed:-2,
    //         pauseOnHover:true,
    //         rewind:false
    //     },
    //     breakpoint:{
    //         1200:{perPage:3},
    //         640:{perPage:2}
    //     }
    // })
    // splide.mount(window.splide.Extensions)

}