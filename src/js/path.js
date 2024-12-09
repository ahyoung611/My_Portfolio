import { gsap } from "gsap/dist/gsap";

import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

export function path() {
    gsap.registerPlugin(MotionPathPlugin)

    // 비스크롤 무한 반복 애니메이션
    gsap.to('.jellyfish1', {
        scale: 1.1,    // 크기 변화
        duration: 6,
        repeat: -1,
        repeatDelay: 1,  // 반복 간 지연 시간 (필요시)
        yoyo: true,    // 반복 시 원래 상태로 돌아가기
        ease: "power1.inOut",
    
        motionPath: {
            path: '.path',       // SVG 경로 선택자
            align: '.path',      // 경로에 정렬
            alignOrigin: [0.5, 0.5] // 중심 정렬
        },
    
    
    });
}
