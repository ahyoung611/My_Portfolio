
export function cursor(){
    document.addEventListener("mousemove", e => {
        gsap.to(".jellyfish", {
            x: e.clientX,
            y: e.clientY,
            
            // transform: 'translate(-50%, -50%)' 
    
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