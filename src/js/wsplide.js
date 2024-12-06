
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function wsplide() {

    const wsplide1 = new Splide('#wsplide',{
        type:'loop',
        drag:false,
        focus:'center',
        gap:30,
        autoWidth:true,
        height: '20%', // 슬라이더 높이 설정
        arrows:false,
        pagination:false,
        autoScroll:{
            speed:1.5,
            pauseOnHover:true,
            rewind:false
        },
        clones: 2, // 슬라이드 복제

        breakpoint:{
            1200:{perPage:3},
            640:{perPage:2}
        }
    });

    wsplide1.mount({ AutoScroll });

}