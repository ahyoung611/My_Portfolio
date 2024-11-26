export function work() {
    var workSwiper = new Swiper(".workSwiper", {
       
        slidesPerView: 1,
        spaceBetween:50,
        centeredSlides: true,
        loop: true, // 루프 비활성화

        breakpoints: {
            1300: {
                slidesPerView: 5,
                spaceBetween: 114,
                centeredSlides: true,
                initialSlide: 2, // 첫 로드 시 가운데 슬라이드 (3번 슬라이드가 중앙)

            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 92,
                centeredSlides: true,
                initialSlide: 2,
            },
        },
        navigation: {
            nextEl: "#wrokSwiper-box .swiper-button-next",
            prevEl: "#wrokSwiper-box .swiper-button-prev",
          },
    });

}
