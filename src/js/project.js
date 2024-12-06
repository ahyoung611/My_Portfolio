import Swiper from "swiper/bundle";
import "swiper/css/bundle"

export function project() {
    var hswiper = new Swiper(".hSwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000, // 3초마다 슬라이드 전환
            disableOnInteraction: false, // 사용자 상호작용 이후에도 자동 재생 유지
        },
        speed: 800, // 슬라이드 전환 애니메이션 속도 (0.8초)
    });
    
    var vswiper = new Swiper(".vSwiper", {
        direction: "vertical",
        autoplay: {
            delay: 3000, // 3초마다 슬라이드
            disableOnInteraction: false,
        },
        speed: 800, // 슬라이드 전환 애니메이션 속도 (0.8초)
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
