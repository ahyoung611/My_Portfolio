

export function work(){
    // 작업 제목 엘리먼트
const workTitle = document.querySelector('.work_title');

// 모든 이미지 선택
const images = document.querySelectorAll('.splide__slide img');

// 설명 업데이트 함수
function updateTitle(event) {
  const description = event.target.getAttribute('data-description');
  workTitle.innerHTML = description;
}

// 설명 초기화 함수
function resetTitle() {
  workTitle.innerHTML = 'CODINGWORKS <em>코딩 작업을 통해 기술적 구현을 포함한 다양한 작업물입니다.</em>';
}

// 이벤트 핸들러 추가
images.forEach(img => {
  img.addEventListener('mouseenter', updateTitle); // 마우스 호버 시 설명 변경
  img.addEventListener('mouseleave', resetTitle); // 마우스 나가면 초기화
});
}