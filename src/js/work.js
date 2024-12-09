export function work() {
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

  // 이벤트 핸들러 추가
  images.forEach(img => {
      img.addEventListener('mouseenter', updateTitle); // 마우스 호버 시 설명 변경
      img.addEventListener('mouseleave', resetTitle); // 마우스 나가면 초기화
  });
}
