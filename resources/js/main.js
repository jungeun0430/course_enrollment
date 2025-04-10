/* 함수 주석
* 1. 사이드바
* 2. 상단 글씨크기 변경
* 3. 모달 관련 함수
* 4. 탭 관련 함수
*  */

/* 1. 사이드바 */
// 상태 초기화 함수
function removeActiveClasses() {
  $dimOverlay.removeClass('active');
  $sidebar.removeClass('active');
  $('body').removeClass('no-scroll'); // 스크롤 가능하게
}

/* 2. 상단 글씨크기 변경 (작성한 함수는 없음) */

/* 3. 모달 관련 함수 */
// 모달 크기 조정 및 회전 처리
function adjustModalSize(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');

  if (modalContent) {
    const viewportHeight = window.innerHeight; // 화면 높이
    const viewportWidth = window.innerWidth;   // 화면 너비

    if (viewportWidth <= 768) {
      // 모바일 화면: 가로/세로 교차 및 회전 적용
      if(modalId === 'modal-onlineUserCard') {
        /* 1. 모바일 회원카드 */
        modalContent.style.width = `${viewportHeight - 32}px`; // 여백 포함
        modalContent.style.height = `${viewportWidth - 32}px`; // 여백 포함
        modalContent.style.transform = 'translate(-50%, -50%) rotate(-90deg)'; // 모바일은 회전 적용
        modalContent.style.transformOrigin = 'center'; // 회전 중심
        modalContent.style.borderRadius = '8px'; // 둥근 모서리 제거
        modalContent.style.padding = '60px 0 0 0'; // 모바일에서 추가 여백
      }
    } else {
      // PC 화면: 스타일 초기화 및 기존 설정
      if(modalId === 'modal-onlineUserCard') {
        /* 1. 모바일 회원카드 */
        modalContent.style.width = '90%'; // 기본 너비
        modalContent.style.maxWidth = '800px'; // 최대 너비
        modalContent.style.height = 'auto'; // 높이 자동
        modalContent.style.transform = 'translate(-50%, -50%)'; // 기본 위치
        modalContent.style.borderRadius = '8px'; // 둥근 모서리 추가
        modalContent.style.padding = '64px 0 0 0'; // 기존 여백 유지
      }
    }
  }
}
// 모달 띄우기 함수
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    adjustModalSize(modalId); // 크기 조정 로직 호출
    modal.style.display = 'block'; // 모달 표시
    document.body.classList.add('no-scroll'); // 스크롤 방지
    modal.setAttribute('aria-hidden', 'false'); // ARIA 활성화
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Tab 감지(모달 내부에서만 초점 이동)
    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        // Shift+Tab => 첫 번째 요소에서 마지막으로 이동
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        }
        // Tab => 마지막 요소에서 첫 번째로 이동
        else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }

      // ESC 키로 모달 닫기
      if (e.key === 'Escape') {
        hideModal(modalId);
      }
    });

    // 모달 열릴 때 첫 번째 요소로 초점 이동
    firstFocusableElement.focus();
  }
}
let previousFocus;
// 모달 숨기기 함수
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none'; // 모달 숨김
    modal.setAttribute('aria-hidden', 'true'); // ARIA 비활성화
    document.body.classList.remove('no-scroll'); // 스크롤 허용

    // 모달 닫힐 때 이전 초점으로 복구
    previousFocus?.focus();
  }
}

/* 4. 탭 관련 함수 */
class TabManager {
  constructor() {
    this.init();
    this.isMobile = window.innerWidth <= 767;

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 767;
      this.updateHeight();
    });
  }

  init() {
    const tabWraps = document.querySelectorAll('.tab-wrap');

    tabWraps.forEach(wrap => {
      const firstDepth = wrap.querySelector('.first-depth');
      const tabs = wrap.querySelectorAll('.first-depth > li .tab');
      const tabBoxes = wrap.querySelectorAll('.tab-box');

      // 초기에 모든 tab-box 숨기기
      tabBoxes.forEach(box => box.style.display = 'none');

      // 활성 탭의 tab-box 보이기
      const activeTabBox = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTabBox) {
        activeTabBox.style.display = 'block';
      }

      tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
          if (this.isMobile) {
            // 모바일에서는 클릭 시 목록 토글
            if (firstDepth.classList.contains('opened')) {
              this.activateTab(tab);
              firstDepth.classList.remove('opened');
            } else {
              firstDepth.classList.add('opened');
            }
          } else {
            // PC에서는 기존 동작 유지
            this.activateTab(tab);
          }
        });

        tab.addEventListener('focus', () => {
          if (!this.isMobile) {
            this.activateTab(tab);
          }
        });
      });

      // 모바일에서 외부 클릭 시 목록 닫기
      document.addEventListener('click', (e) => {
        if (this.isMobile && !wrap.contains(e.target)) {
          firstDepth.classList.remove('opened');
        }
      });
    });

    this.updateHeight();
  }

  activateTab(selectedTab) {
    const wrap = selectedTab.closest('.tab-wrap');
    const firstDepth = wrap.querySelector('.first-depth');
    const allTabs = wrap.querySelectorAll('.first-depth > li');

    // 모든 탭 비활성화 및 tab-box 숨기기
    allTabs.forEach(tab => {
      tab.classList.remove('active');
      const tabBox = tab.querySelector('.tab-box');
      if (tabBox) {
        tabBox.style.display = 'none';
      }
    });

    // 선택된 탭 활성화 및 tab-box 보이기
    const activeTabItem = selectedTab.closest('li');
    activeTabItem.classList.add('active');
    const activeTabBox = activeTabItem.querySelector('.tab-box');
    if (activeTabBox) {
      activeTabBox.style.display = 'block';
    }

    // 모바일에서 선택된 탭을 최상단으로 이동
    if (this.isMobile) {
      const parent = activeTabItem.parentNode;
      parent.insertBefore(activeTabItem, parent.firstChild);
    }

    setTimeout(() => this.updateHeight(), 0);
  }


  updateHeight() {
    document.querySelectorAll('.tab-wrap').forEach(wrap => {
      const activeTab = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTab) {
        const tabBoxHeight = activeTab.offsetHeight;
        const topSpacing = this.isMobile ? 84 : 104;
        wrap.style.height = `${tabBoxHeight + topSpacing}px`;
      }
    });
  }
}

/*class TabManager {
  constructor() {
    this.init();
    window.addEventListener('resize', () => this.updateHeight());
  }

  init() {
    const tabWraps = document.querySelectorAll('.tab-wrap');

    tabWraps.forEach(wrap => {
      const tabs = wrap.querySelectorAll('.first-depth > li .tab');
      const tabBoxes = wrap.querySelectorAll('.tab-box');

      // 초기에 모든 tab-box 숨기기
      tabBoxes.forEach(box => box.style.display = 'none');

      // 활성 탭의 tab-box 보이기
      const activeTabBox = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTabBox) {
        activeTabBox.style.display = 'block';
      }

      tabs.forEach(tab => {
        tab.addEventListener('focus', () => this.activateTab(tab));
        tab.addEventListener('click', () => this.activateTab(tab));
      });
    });

    this.updateHeight();
  }

  activateTab(selectedTab) {
    const wrap = selectedTab.closest('.tab-wrap');
    const allTabs = wrap.querySelectorAll('.first-depth > li');

    // 모든 탭 비활성화 및 tab-box 숨기기
    allTabs.forEach(tab => {
      tab.classList.remove('active');
      tab.querySelector('.tab-box').style.display = 'none';
    });

    // 선택된 탭 활성화 및 tab-box 보이기
    const activeTabItem = selectedTab.closest('li');
    activeTabItem.classList.add('active');
    activeTabItem.querySelector('.tab-box').style.display = 'block';

    // setTimeout으로 높이 계산 지연
    setTimeout(() => this.updateHeight(), 0);
  }

  updateHeight() {
    document.querySelectorAll('.tab-wrap').forEach(wrap => {
      const activeTab = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTab) {
        const tabBoxHeight = activeTab.offsetHeight;
        wrap.style.height = `${tabBoxHeight + 64 + 40}px`;
      }
    });
  }
}*/
$(document).ready(function(){
  /* 1. 사이드바 */
  const $hamburgerBtn = $('.ico-hamburger'); // 햄버거 버튼
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴
  const $closeBtn = $('.close-btn'); // 닫기 버튼
  const breakpoint = 1200; // PC와 모바일을 구분할 기준 너비
  // 햄버거 버튼 클릭 이벤트
  $hamburgerBtn.on('click', function () {
    if ($(window).width() < breakpoint) {
      // 모바일 화면일 때만 active 클래스 추가
      $dimOverlay.addClass('active');
      $sidebar.addClass('active');
      $('body').addClass('no-scroll'); // 뒷배경 스크롤 방지
    }
  });
  // 사이드바 닫기 버튼 클릭 이벤트
  $closeBtn.on('click', function () {
    removeActiveClasses();
  });
  // Dim 영역 클릭 시 사이드바 닫기
  $dimOverlay.on('click', function () {
    removeActiveClasses();
  });
  // 윈도우 리사이즈 이벤트
  $(window).on('resize', function () {
    if ($(window).width() >= breakpoint) {
      // PC 모드로 전환되면 초기화
      removeActiveClasses();
    }
  });


  /* 2. 상단 글자크기 변경 */
  const $buttons = $('.txt-size-btn'); // 모든 버튼 선택
  const $body = $('body'); // body 요소 선택
  const sizes = ['small', 'normal', 'lg']; // 크기 순서 배열
  let currentIndex = 1; // 초기 인덱스 값 (기본값 normal)
  // **'깜빡임 방지' 단계 추가**: body 스타일을 비활성화 상태로 유지
  $body.css('visibility', 'hidden'); // 설정이 완료될 때까지 표시하지 않음
  // localStorage에서 저장된 글자 크기 가져오기
  const savedSize = localStorage.getItem('textSize');
  if (savedSize) {
    // 저장된 값이 있는 경우 해당 글자 크기 인덱스로 설정
    currentIndex = sizes.indexOf(savedSize);
    if (currentIndex === -1) currentIndex = 1; // 잘못된 값이면 기본값 적용
  }
  // 초기화: 글자 크기와 버튼 상태 설정
  $body.attr('data-text-size', sizes[currentIndex]); // body에 크기 반영
  $buttons.removeClass('active'); // 모든 버튼의 active 제거
  $buttons.eq(currentIndex).addClass('active'); // 현재 크기에 맞는 버튼에 active 추가
  // 설정이 끝난 후 body 표시
  $body.css('visibility', 'visible');
  // 버튼 클릭 이벤트
  $buttons.on('click', function () {
    $buttons.removeClass('active'); // 모든 active 제거
    currentIndex = (currentIndex + 1) % sizes.length; // 다음 인덱스 계산

    // 새 active 버튼에 클래스 추가
    const $activeButton = $buttons.eq(currentIndex);
    $activeButton.addClass('active');

    // body에 data-text-size 속성 변경
    const newSize = sizes[currentIndex];
    $body.attr('data-text-size', newSize);

    // localStorage에 현재 글자 크기 저장
    localStorage.setItem('textSize', newSize);
  });

  /* 3. 모달 관련 함수 */
  // 창 크기 변경 시 모달 크기 재조정
  window.addEventListener('resize', () => {
    const openModal = document.querySelector('.modal[style*="block"]'); // 현재 열린 모달 찾기
    if (openModal) {
      adjustModalSize(openModal.id); // 크기 재조정 호출
    }
  });
  // 외부 클릭시 팝업 닫힘
  let openModalName = '' // 열린 팝업이름 저장
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal'); // 모든 모달 탐색

    for (let modal of modals) {
      // 클릭된 요소가 현재 모달 요소인 경우
      if (event.target === modal) {
        // 해당 모달 숨기기
        modal.style.display = 'none';

        // 열린 팝업 이름과 연결된 추가 로직 처리
        hideModal(openModalName);
      }
    }
  };


})
