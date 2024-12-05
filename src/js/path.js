import { gsap } from "gsap/dist/gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

export function path() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

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
            // autoRotate: true,    // 경로에 따라 회전
            alignOrigin: [0.5, 0.5] // 중심 정렬
        },
    
    
    });
}
