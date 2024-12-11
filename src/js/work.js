import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function work() {
    const workTitle = document.querySelector('.work_title');
    const titleSpan = workTitle.querySelector('span');
    const dateEm = workTitle.querySelectorAll('em')[0];
    const detailsEm = workTitle.querySelectorAll('em')[1];
    const images = document.querySelectorAll('.splide__slide img');

    function updateTitle(event) {
        const title = event.target.getAttribute('data-title') || 'Untitled';
        const date = event.target.getAttribute('data-date') || '날짜 없음';
        const details = event.target.getAttribute('data-details') || '세부 내용 없음';

        titleSpan.textContent = title;
        dateEm.textContent = date;
        detailsEm.textContent = details;
    }

    function resetTitle() {
        titleSpan.textContent = 'CODINGWORKS';
        dateEm.textContent = '';
        detailsEm.textContent = '코딩 작업을 통해 기술적 구현을 포함한 다양한 작업물입니다.';
    }

    images.forEach(img => {
        img.addEventListener('mouseenter', updateTitle);
        img.addEventListener('mouseleave', resetTitle);
    });

    let splide1, splide2;

    function createSliders() {
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1299px)').matches;
        const isDesktop = window.matchMedia('(min-width: 1300px)').matches;

        let height, width;

        if (isMobile) {
            height = '250px';
            width = '50%';
        } else if (isTablet) {
            height = '250px';
            width = '25%';
        } else if (isDesktop) {
            height = '350px';
            width = 'atuo';
        }

        if (splide1) splide1.destroy();
        if (splide2) splide2.destroy();

        splide1 = new Splide('#splide-1', {
            type: 'loop',
            drag: false,
            focus: 'center',
            gap: 50,
            height: height,
            width: width,
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: 1.5,
                pauseOnHover: true,
                rewind: false,
            },
            direction: isDesktop ? 'ttb' : 'ltr',
        }).mount({ AutoScroll });

        splide2 = new Splide('#splide-2', {
            type: 'loop',
            drag: false,
            focus: 'center',
            gap: 50,
            height: height,
            width: width,
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: -1.5,
                pauseOnHover: true,
                rewind: false,
            },
            direction: isDesktop ? 'ttb' : 'ltr',
        }).mount({ AutoScroll });
    }

    createSliders();

    window.addEventListener('resize', createSliders);
}
