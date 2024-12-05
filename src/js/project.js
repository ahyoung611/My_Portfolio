export function project() {
    var hswiper = new Swiper(".hSwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
    
        navigation: {
            nextEl: ".next2",
            prevEl: ".prev2",
        },
    });
    
    var vswiper = new Swiper(".vSwiper", {
        direction: "vertical",
    
        navigation: {
            nextEl: ".next2",
            prevEl: ".prev2",
        },
    
    });
    
    const sElems = document.querySelectorAll('#project .tab-menu li a')
    
    sElems.forEach(function (sElem, idx) {
    
        sElem.addEventListener('click', function (e) {
            e.preventDefault()
    
            sElems.forEach(function (item) {
                item.classList.remove('on')
            })
    
            sElem.classList.add('on')
            hswiper.slideTo(idx, 500)
            vswiper.slideTo(idx, 500)
        })
    })
    
    hswiper.on('slideChange', function () {
        let activeIdx = hswiper.activeIndex
    
        sElems.forEach(function (item) {
            item.classList.remove('on')
        })
    
        sElems[activeIdx].classList.add('on')
    })

}
