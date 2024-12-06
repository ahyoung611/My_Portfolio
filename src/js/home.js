import { gsap } from "gsap";
import {SplitText} from "gsap/SplitText";

export function home() {
    gsap.registerPlugin(SplitText);

    let splitTextInstance = null; // SplitText 인스턴스를 저장할 변수
    let isAnimating = false;  // 애니메이션 상태를 확인할 변수
    let isSectionInView = false; // 섹션이 뷰포트에 있는지 확인할 변수

    const animateHome = () => {
        if (isAnimating) return;  // 이미 애니메이션이 실행 중이면 중복 실행 방지
        isAnimating = true;  // 애니메이션이 실행 중임을 표시

        const stageText = document.querySelector('.stage h2');

        // SplitText 초기화: 애니메이션을 반복 실행할 때마다 새로 인스턴스를 생성하여 초기화
        if (!splitTextInstance) {
            splitTextInstance = new SplitText(stageText, { type: 'chars words' });
        }

        const { chars, words } = splitTextInstance;

        // 단계적으로 애니메이션을 실행하기 위한 타임라인 생성
        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;  // 애니메이션이 끝났으므로 다시 실행 가능
            }
        });

        tl.to('.stage', { autoAlpha: 1 }) // Stage가 나타남
            .from(chars, {
                color: '#003058',
                opacity: 0,
                y: gsap.utils.wrap([-100, 100]),
                stagger: {
                    each: 0.05,
                    from: 'end',
                },
            });

        tl.to(words, {
            y: (i) => (i === 1 || i === 2 || i === 5 ? -50 : 0),
            stagger: {
                each: 0.05,
                from: 'start',
            },
            ease: 'power1.out',
            duration: 1,
            onStart: () => {
                chars.forEach((char, i) => {
                    if (i === 3 || i === 9 || i === 17) {
                        char.style.color = '#003058';
                        char.style.fontWeight = 'bold';
                    } else {
                        char.style.color = '#fff';
                    }
                });
            },
        });

        // 2. Dot 애니메이션
        const dots = document.querySelectorAll('.dot');
        dots.forEach((d, i, ary) => {
            const opacity = 1 - (i / (ary.length - 1)) * 0.8;
            d.style.opacity = opacity;
        });

        tl.from(dots, {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.3,
        });

        // 3. p 태그 애니메이션
        tl.from('.home_title p', {
            opacity: 0,
            y: 50,
            duration: 0.5,
        });

        // Dot 크기와 투명도 설정 (CSS 초기화)
        document.querySelectorAll('.dot').forEach(function (dot, i, dots) {
            const minSize = 12;
            const maxSize = 8;
            const size = minSize + (i / (dots.length - 1)) * (maxSize - minSize);
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;

            const opacity = 1 - (i / (dots.length - 1)) * 0.9;
            dot.style.opacity = opacity;
        });
    };

    // IntersectionObserver로 섹션이 뷰포트에 보일 때마다 애니메이션 시작 --------------------------------
    const section = document.querySelector('#home');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 섹션이 뷰포트에 들어왔을 때, 애니메이션을 다시 실행하기 전에 SplitText 초기화
                if (!isSectionInView) {
                    isSectionInView = true;  // 섹션이 보였음을 표시
                    if (splitTextInstance) {
                        splitTextInstance.revert();  // 이전 애니메이션 리셋
                        splitTextInstance = null;  // 인스턴스 초기화
                    }
                    animateHome();  // 애니메이션 실행
                }
            } else {
                // 섹션이 뷰포트를 벗어나면 애니메이션 상태를 리셋하지 않음
                isSectionInView = false;  // 섹션이 보이지 않음
            }
        });
    }, {
        threshold: 0.5 // 섹션의 50%가 뷰포트에 들어왔을 때 애니메이션 시작
    });

    observer.observe(section);  // 해당 섹션을 관찰
}
