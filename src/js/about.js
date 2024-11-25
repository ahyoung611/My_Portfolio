export function about() {

    var aboutSwiper = new Swiper('.aboutSwiper', {
        direction: 'vertical', // 세로 스크롤
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '#aboutSwiper-box .swiper-button-next',
          prevEl: '#aboutSwiper-box .swiper-button-prev',
        },
      });

}