
export function cursor(){
    let customCorsors = document.querySelectorAll(".jellyfish");
    let sections =document.querySelectorAll("section");
    sections.forEach((section)=>{
        section.addEventListener("mousemove", e => {
            // gsap.to(".jellyfish", {
            //     x: e.clientX,
            //     y: e.clientY,
                
            //     // transform: 'translate(-50%, -50%)' 
        
            // })
            let x = e.clientX;
            let y = e.clientY;
    
            console.log(x);
            console.log(y);
            customCorsors.forEach((customCorsor)=>{
                customCorsor.style.left = x + "px";
                customCorsor.style.top = y + "px";
            })
    })
        // gsap.to(".jellyfish2", {
        //     x: e.clientX,
        //     y: e.clientY,
        //     transform: 'translate(-50%, -50%)' 
    
        // })
        // gsap.to(".jellyfish3", {
        //     x: e.clientX,
        //     y: e.clientY,
        //     transform: 'translate(-50%, -50%)' 
    
        // })
        // gsap.to(".jellyfish4", {
        //     x: e.clientX,
        //     y: e.clientY,
        //     transform: 'translate(-50%, -50%)'
    
        // })
        // gsap.to(".jellyfish5", {
        //     x: e.clientX,
        //     y: e.clientY,
        //     transform: 'translate(-50%, -50%)'
    
        // })
    })
} 