export function work() {

    const articles = gsap.utils.toArray('.work__item')
    gsap.to(articles,{
        xPercent:-120*(articles.length-1),
        ease:"none",
        scrollTrigger:{
            trigger:'#work',
            start:'top top',
            end:'+=3000',
            pin:true,
            scrub:1,

        }
    })


}
