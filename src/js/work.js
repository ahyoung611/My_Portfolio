import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function work() {
<<<<<<< HEAD
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
=======
    // 작업 제목 엘리먼트 선택
    const workTitle = document.querySelector('.work_title');
    const titleSpan = workTitle.querySelector('span'); // 제목 부분
    const dateEm = workTitle.querySelectorAll('em')[0]; // 첫 번째 <em>: 날짜 부분
    const detailsEm = workTitle.querySelectorAll('em')[1]; // 두 번째 <em>: 세부 내용 부분

    // 모든 이미지 선택
    const images = document.querySelectorAll('.splide__slide img');

    // 설명 업데이트 함수
    function updateTitle(event) {
        const title = event.target.getAttribute('data-title') || 'Untitled';
        const date = event.target.getAttribute('data-date') || '날짜 없음';
        const details = event.target.getAttribute('data-details') || '세부 내용 없음';

        // 제목, 날짜, 세부 내용 업데이트
        titleSpan.textContent = title;
        dateEm.textContent = date;
        detailsEm.textContent = details;
    }

    // 설명 초기화 함수
    function resetTitle() {
        titleSpan.textContent = 'CODINGWORKS';
        dateEm.textContent = '';
        detailsEm.textContent = '코딩 작업을 통해 기술적 구현을 포함한 다양한 작업물입니다.';
    }

    // 이미지에 마우스 이벤트 추가
    images.forEach(img => {
        img.addEventListener('mouseenter', updateTitle); // 마우스 호버 시 설명 변경
        img.addEventListener('mouseleave', resetTitle); // 마우스 나가면 초기화
    });

    // 슬라이더 설정 함수
    function createSliders() {
        // 화면 크기 확인을 위한 미디어 쿼리
        const isMobile = window.matchMedia('(max-width: 767px)');
        const isTablet = window.matchMedia('(min-width: 768px)');
        const isDesktop = window.matchMedia('(min-width: 1300px)');

        // 첫 번째 슬라이더
        const splide1 = new Splide('#splide-1', {
>>>>>>> 4737e518d9e7d128fd73484dc7a7d74caadae92d
            type: 'loop',
            drag: false,
            focus: 'center',
            gap: 50,
<<<<<<< HEAD
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
=======
            height: '100%', // 슬라이더 높이 설정
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: 1.5, // 속도 설정
                pauseOnHover: true,
                rewind: false,
            },
            direction: isDesktop.matches ? 'ttb' : 'ltr', // 데스크탑에서는 세로, 모바일에서는 가로
        });

        splide1.mount({ AutoScroll });

        // 두 번째 슬라이더
        const splide2 = new Splide('#splide-2', {
>>>>>>> 4737e518d9e7d128fd73484dc7a7d74caadae92d
            type: 'loop',
            drag: false,
            focus: 'center',
            gap: 50,
<<<<<<< HEAD
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
=======
            height: '100%', // 슬라이더 높이 설정
            arrows: false,
            pagination: false,
            autoScroll: {
                speed: -1.5, // 속도 역방향 설정
                pauseOnHover: true,
                rewind: false,
            },
            direction: isDesktop.matches ? 'ttb' : 'ltr', // 데스크탑에서는 세로, 모바일에서는 가로
        });

        splide2.mount({ AutoScroll });
    }

    // 초기 슬라이더 설정
    createSliders();

    // 화면 크기 변경 시 슬라이더 방향 업데이트
    window.addEventListener('resize', function() {
        createSliders();
    });
>>>>>>> 4737e518d9e7d128fd73484dc7a7d74caadae92d
}
