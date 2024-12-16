import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function header() {
    // Smooth scroll 설정 ---------------------------------------------------------------
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 섹션별 위치 및 네비게이션 활성화 처리 -----------------------------------------------
    const links = gsap.utils.toArray('nav ul li a');

    links.forEach(link => {
        const targetId = link.getAttribute('href');
        const targetElem = document.querySelector(targetId);

        if (targetElem) {

            ScrollTrigger.create({
                trigger: targetElem,
                start: 'top center',
                end: 'bottom center',
                onToggle: () => updateActiveLink(link)
            });

<<<<<<< HEAD
            link.addEventListener('click', function (e) {
                e.preventDefault();

                updateActiveLink(link);

                gsap.to(window, {
                    duration: 1,
                    scrollTo: {x:0, y: targetElem },
                    overwrite: 'auto'
                });

                toggleMenu();
            });
        }
=======
            })
            // 메뉴 토글
            const headerNav = document.querySelector('.header_nav');
            const headerNavMobile = document.querySelector('.header_nav_mobile');

            if (headerNav) {
                headerNav.classList.toggle('show'); // show 클래스를 토글
            }

            // .header_nav_mobile의 opacity를 토글
            if (headerNavMobile) {
                headerNavMobile.classList.toggle('active');
            }
        });
>>>>>>> ac610dbbabaec0f2305c5b1b20f026bcf000a3c9
    });

    // Header 보이기/숨기기 애니메이션 ----------------------
    const showHeader = gsap.from('header', {
        yPercent: -200,
        paused: true,
        duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showHeader.play() : showHeader.reverse();
        }
    });

    //링크 활성화 처리 -----------------------------------------------
    function updateActiveLink(activeLink) {
        links.forEach(link => link.classList.remove('on'));
        activeLink.classList.add('on');
    }

<<<<<<< HEAD
    // 메뉴 토글 처리 -----------------------------------------------
    function toggleMenu() {
        const headerNav = document.querySelector('.header_nav');
        const headerNavMobile = document.querySelector('.header_nav_mobile');

        if (headerNav) {
            headerNav.classList.toggle('show');
        }

        if (headerNavMobile) {
            headerNavMobile.classList.toggle('active');
        }
    }
}
=======
    
}
>>>>>>> ac610dbbabaec0f2305c5b1b20f026bcf000a3c9
