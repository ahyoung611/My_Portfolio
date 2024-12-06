import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


export function footer() {
    gsap.registerPlugin(TextPlugin)

    const text1 = ['도전과 성장', '끊임없는 자기개발', '다양한 경험을 통해 빠르게 배우고', '효율적인 방법으로 문제를 해결하여', '변화에 유연하게 대응하는 인재가 될 자신이 있습니다!', '감사합니다.']

    //arr로 배열 변수 여러개 사용할 수 있게
    function titleFuc(arr) {
        const textLength = arr[0].length;  // 텍스트 길이를 측정
        const duration = textLength / 8;  // 텍스트 길이에 비례한 duration 설정

        // 1. 텍스트가 써지도록 애니메이션
        gsap.to('.big', {
            duration: duration,
            text: arr[0],
            onComplete: function () {
                // 2. 텍스트가 다 써지면 지워지는 애니메이션
                gsap.to('.big', {
                    duration: duration,
                    text: '',
                    onComplete: function () {
                        // 3. 텍스트가 지워지면 다음 텍스트로 이동
                        arr.push(arr.shift());  // 배열의 첫 번째 요소를 제거하고 마지막에 추가
                        gsap.delayedCall(1, titleFuc, [arr]);  // 1초 후에 다시 호출
                    }
                });
            }
        });
    }

    titleFuc(text1);



 //------------------------------------------------   
  

}