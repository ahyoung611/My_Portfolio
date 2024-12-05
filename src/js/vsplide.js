import { Splide } from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


export function vsplide(){
      // 첫 번째 슬라이더
const splide1 = new Splide('#splide-1', {
    type: 'loop',
    drag: false,
    focus: 'center',
    direction: 'ttb', // 세로 방향 설정
    gap: 50,
    autoWidth: false,
    height: '100%', // 슬라이더 높이 설정
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: 1, // 속도 설정
        pauseOnHover: true,
        rewind: false,
    },
});

splide1.mount(window.splide.Extensions);

// 두 번째 슬라이더
const splide2 = new Splide('#splide-2', {
    type: 'loop',
    drag: false,
    focus: 'center',
    direction: 'ttb', // 세로 방향 설정
    gap: 50,
    autoWidth: false,
    height: '100%', // 슬라이더 높이 설정
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: -1, // 두 번째 슬라이더는 역방향으로 움직이도록 설정
        pauseOnHover: true,
        rewind: false,
    },
});

splide2.mount(window.splide.Extensions);
}