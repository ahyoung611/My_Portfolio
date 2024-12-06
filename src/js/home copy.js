import { gsap } from "gsap";

export function home() {
    gsap.registerPlugin(SplitText);

    // 단계적으로 애니메이션을 실행하기 위한 타임라인 생성
    const tl = gsap.timeline();

    // 1. Stage (h2) 애니메이션
    const { chars, words } = new SplitText('.stage h2', { type: 'chars words' });
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
        ease: 'power1.out', // y값이 천천히 올라오도록 ease 추가
        duration: 1, // 애니메이션 지속 시간 추가
        onStart: () => {
            chars.forEach((char, i) => {
                if (i === 3 || i === 9 || i === 17) {
                    char.style.color = '#003058'; // 특정 인덱스 색상 변경
                    char.style.fontWeight = 'bold';
                } else {
                    char.style.color = '#fff'; // 기본 색상
                }
            });
        },
    })

    // 2. Dot 애니메이션
    const dots = document.querySelectorAll('.dot');

    // 초기 불투명도 설정
    dots.forEach((d, i, ary) => {
        const opacity = 1 - (i / (ary.length - 1)) * 0.8; // 점점 낮아지는 불투명도
        d.style.opacity = opacity;
    });

    // 애니메이션 설정
    tl.from(dots, {
        scale: 0,          // 점이 작게 시작
        opacity: 0,        // 애니메이션 시작 시 완전히 투명
        stagger: 0.2,      // 점 간격 순차적으로 등장
        duration: 0.3,     // 각 애니메이션 지속 시간
    });


    // 3. p 태그 애니메이션
    tl.from('.home_title p', {
        opacity: 0,
        y: 50, // 아래에서 위로 슬라이드
        duration: 0.5,
    });

    // Dot 크기와 투명도 설정 (CSS 초기화)
    document.querySelectorAll('.dot').forEach(function (dot, i, dots) {
        const minSize = 12;  // 최소 크기 (첫 번째 점)
        const maxSize = 8;   // 최대 크기 (마지막 점)
        const size = minSize + (i / (dots.length - 1)) * (maxSize - minSize);

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;

        const opacity = 1 - (i / (dots.length - 1)) * 0.9;
        dot.style.opacity = opacity;
    });

    // IntersectionObserver로 섹션이 뷰포트에 보일 때마다 애니메이션 시작
    const section = document.querySelector('#home');  // 애니메이션을 적용할 섹션
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateHome();  // 섹션이 보이면 애니메이션 실행
            }
        });
    }, {
        threshold: 0.8 // 섹션의 50%가 뷰포트에 들어왔을 때 애니메이션 시작
    });

    observer.observe(section);  // 해당 섹션을 관찰
}

