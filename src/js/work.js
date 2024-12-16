import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function work() {
    const workTitle = document.querySelector('.work_title');
    const titleSpan = workTitle.querySelector('span');
    const detailsEm = workTitle.querySelectorAll('em')[1];
    const dateEm = workTitle.querySelectorAll('em')[0];
    const images = document.querySelectorAll('.splide__slide img');
    const workListItems = document.querySelectorAll('.work_list ul li');

    function updateTitle(event) {
        const title = event.target.getAttribute('data-title') || 'Untitled';
        const details = event.target.getAttribute('data-details') || '세부 내용 없음';
        const date = event.target.getAttribute('data-date') || '날짜 없음';

        titleSpan.textContent = title;
        detailsEm.innerHTML = details;
        dateEm.textContent = date;
    }

    function resetTitle() {
        titleSpan.textContent = 'CODINGWORKS';
        dateEm.textContent = '2024';
        detailsEm.innerHTML = '코딩 작업을 통해 기술적 구현을 포함한 다양한 작업물입니다. <br> 흘러가는 이미지에 마우스를 올려보세요!';
    }

    images.forEach(img => {
        img.addEventListener('mouseenter', updateTitle);
        img.addEventListener('mouseleave', resetTitle);
    });

    workListItems.forEach(wl => { 
        wl.addEventListener('mouseenter', updateTitle);
        wl.addEventListener('mouseleave', resetTitle);
    });
  

    let splide1, splide2;

    // 반응형 ---------------------------
    function createSliders() {
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1299px)').matches;
        const isDesktop = window.matchMedia('(min-width: 1300px)').matches;

        let height, width;

        if (isMobile) {
            height = '250px';
            width = '250px';
        } else if (isTablet) {
            height = '250px';
            width = '250px';
        } else if (isDesktop) {
            height = '300px';
            width = '300px';
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

    // 토글 버튼 ------------------------------
    document.addEventListener('click', function (event) {
        const workList = document.querySelector('.work_list')
        const togglebtnO = event.target.closest('.togglebtnO');
        if (togglebtnO) {
            const togglebtnI = togglebtnO.querySelector('.togglebtnI');
            const left = parseInt(window.getComputedStyle(togglebtnI).left);
            
            if (left === 100) {
                togglebtnO.style.borderColor = 'rgba(255,255,255,.5)';
                togglebtnI.style.background = 'rgba(255,255,255,.5)';
                toggleActionStart(togglebtnI, 'TO_LEFT');
                togglebtnO.style.setProperty('--after-display', 'block')
                togglebtnO.style.setProperty('--before-display', 'none')

                // 애니메이션: 숨기기
                workList.style.opacity = '0';
                workList.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    workList.style.display = 'none';
                }, 300); 


            } else if (left === 0) {
                togglebtnO.style.borderColor = '#30F0E2';
                togglebtnI.style.background = '#30F0E2';
                toggleActionStart(togglebtnI, 'TO_RIGHT');
                togglebtnO.style.setProperty('--before-display', 'block')
                togglebtnO.style.setProperty('--after-display', 'none')

                // 애니메이션: 보이기
                workList.style.display = 'flex';
                setTimeout(() => {
                    workList.style.transform = 'translateX(0)';
                    workList.style.opacity = '1';
                }, 10); // 약간의 딜레이를 줘야 애니메이션이 작동합니다.
            }
        }
    });

    function toggleActionStart(toggleBtn, LR) {
        // 0.01초 단위로 실행
        const intervalID = setInterval(function () {
            // 버튼 이동
            let left = parseInt(window.getComputedStyle(toggleBtn).left);
            // console.log(left);
            left += (LR === 'TO_RIGHT') ? 5 : -5;
            if (left >= 0 && left <=100) {
                toggleBtn.style.left = `${left}px`;
            }
        }, 10);

        setTimeout(function () {
            clearInterval(intervalID);
        }, 201);
    }
}
