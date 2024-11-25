alert()

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function bgColor(){
    gsap.registerPlugin(ScrollTrigger);

 document.querySelectorAll('section').forEach(item=>{
    let color = item.getAttribute('data-bg')
    ScrollTrigger.create({
        trigger:item,
        start:"top 50%",
        end:"bottom 5%",
        markers:true, //스크롤 틔리거 마커 표시

        onEnter:()=>gsap.to('body',{
            backgroundColor:color,
            duration:1.5
        }),
        onEnterBack:()=>gsap.to('body',{
            backgroundColor:color,
            duration:1.5
        })

    })
 })
}

