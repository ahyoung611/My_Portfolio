import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


export function wsplide() {
  new Splide('#splide1', {
    type: "loop",
    autoWidth: true,
    focus: 'center',
    gap: 30,
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 2,

    },
  }).mount({ AutoScroll });

  // new Splide('#splide2', {
  //   type: "loop",
  //   direction: 'rtl',
  //   autoWidth: true,
  //   focus: 'center',
  //   gap: 30,
  //   pagination: false,
  //   arrows: false,
  //   autoScroll: {
  //     speed: 1,

  //   },
  // }).mount({ AutoScroll });
}