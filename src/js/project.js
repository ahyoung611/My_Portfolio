import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function project() {
    const hswiper = new Swiper(".hSwiper", {
        loop: true, // 자연스러운 반복 설정
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 1000, // 동일한 speed 값
    });

    const vswiper = new Swiper(".vSwiper", {
        loop: true, // 자연스러운 반복 설정
        direction: "vertical",
        autoplay: {
            delay: 4000, // 동일한 delay 값
            disableOnInteraction: false,
        },
        speed: 1000, // 동일한 speed 값
    });

    const sElems = document.querySelectorAll('.project-box .tab-menu li a');

    sElems.forEach(function (sElem, idx) {
        sElem.addEventListener('click', function (e) {
            e.preventDefault();

            sElems.forEach(function (item) {
                item.classList.remove('on');
            });

            sElem.classList.add('on');
            hswiper.slideToLoop(idx, 500); // loop 상태에서 인덱스 이동
            vswiper.slideToLoop(idx, 500); // loop 상태에서 인덱스 이동
        });
    });

    hswiper.on('slideChange', function () {
        let activeIdx = hswiper.realIndex; // 실제 슬라이드의 인덱스 가져오기

        sElems.forEach(function (item) {
            item.classList.remove('on');
        });

        sElems[activeIdx].classList.add('on');
    });

    vswiper.on('slideChange', function () {
        let activeIdx = vswiper.realIndex; // 실제 슬라이드의 인덱스 가져오기

        sElems.forEach(function (item) {
            item.classList.remove('on');
        });

        sElems[activeIdx].classList.add('on');
    });
}
