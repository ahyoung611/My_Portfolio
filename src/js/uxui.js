export function uxui() {
  const articles = gsap.utils.toArray('.uxui__item')
  gsap.to(articles,{
      xPercent:-100*(articles.length-1),
      ease:"none",
      scrollTrigger:{
          trigger:'#uxui',
          start:'top top',
          end:'+=3000',
          pin:true,
          scrub:1,

      }
  })
}