export function project() {
    var projectSwiper = new Swiper(".projectSwiper", {
        slidesPerView: 1,
        spaceBetween: 200,

        breakpoints: {
            1700: {
                slidesPerView: 4,
                spaceBetween: 100,

            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 100,
            },

            790: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
        },
        navigation: {
            nextEl: "#projectSwiper-box .swiper-button-next",
            prevEl: "#projectSwiper-box .swiper-button-prev",
          },
    });

}
