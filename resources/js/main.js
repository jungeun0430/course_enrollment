/* 함수 주석
* 1. [공통]사이드바 (function, 실행문)
* 2. [공통]상단 글씨크기 변경 (function, 실행문)
* 3. [공통]모달 관련 함수 (function, 실행문)
* 4. [장바구니]탭 관련 함수 (function)
* 5. [수강신청내역]수강신청 탭 관련 함수 (function)
* 6. [공통]라디오 버튼 핸들러 (실행문)
* 7. [결제내역]데이트피커 (실행문)
* 8. [결제내역]테이블 rowspan 존재시 hover색상 지정 (실행문)
* 9. [공통] 테이블 체크박스 존재시 클릭하면 전체 선택 (function, 실행문)
* 10. [공통] 셀렉트박스 (function)
* 11. [결제내역] 주민등록번호 : 가상키패드 (function, 실행문)
* 12. [결제내역] 주민등록번호 : 앞자리 유효성 검사 (function)
*  */
/*-----------------------------------------------------------------------------------------------------*/
/* ---- [ function 모음 : 1,2,3,4,5,9,10,11,12]-------------------------------------------------------- */

/* 1. [공통]사이드바 */
// 사이드바 열기
function openSideBar() {
  /* 1. 사이드바 */
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴
  const breakpoint = 1200; // PC와 모바일을 구분할 기준 너비

  if ($(window).width() < breakpoint) {
    $dimOverlay.addClass('active');
    $sidebar.addClass('active');
    $('body').addClass('no-scroll');

    // iOS VoiceOver 대응을 위한 추가 코드
    $sidebar.attr({
      'role': 'dialog',
      'aria-modal': 'true'
    });

    // 사이드바 외부 요소 비활성화 (inert 속성 사용)
    if ('inert' in HTMLElement.prototype) {
      // 사이드바와 햄버거 버튼을 제외한 모든 요소에 inert 속성 추가
      $('body > *').not($sidebar).not($sidebar.parents()).not($dimOverlay).attr('inert', '');
    } else {
      // inert 폴리필 적용
      applyInertPolyfill();
    }

    trapFocus($sidebar[0]);
  }
}
// 사이드바 닫기
function closeSideBar() {
  removeActiveClasses();
}
// -------- 사이드바 열고 닫기 관련 함수 모음 -----------
// 포커스 트랩 함수
function trapFocus(container) {
  const focusableElements = Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(el => {
    // 보이는 요소만 걸러냄 (display: none 등)
    return el.offsetParent !== null;
  });

  if (focusableElements.length === 0) return;

  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  firstEl.focus();

  function handleKeydown(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    } else if (e.key === 'Escape') {
      closeSidebar();
    }
  }

  document.addEventListener('keydown', handleKeydown);
}

// 사이드바 닫기 공통 함수
function closeSidebar() {
  /* 1. 사이드바 */
  const $hamburgerBtn = $('.ico-hamburger'); // 햄버거 버튼
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴

  $dimOverlay.removeClass('active');
  $sidebar.removeClass('active');
  $('body').removeClass('no-scroll');

  // 접근성 속성 및 inert 제거
  $sidebar.removeAttr('role aria-modal');

  if ('inert' in HTMLElement.prototype) {
    $('body > *').removeAttr('inert');
  } else {
    removeInertPolyfill();
  }

  $hamburgerBtn.focus();
  document.removeEventListener('keydown', handleKeydown);
}

// 상태 초기화 함수
function removeActiveClasses() {
  /* 1. 사이드바 */
  const $hamburgerBtn = $('.ico-hamburger'); // 햄버거 버튼
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴

  $dimOverlay.removeClass('active');
  $sidebar.removeClass('active');

  // 접근성 속성 및 inert 제거
  $sidebar.removeAttr('role aria-modal');

  if ('inert' in HTMLElement.prototype) {
    $('body > *').removeAttr('inert');
  } else {
    removeInertPolyfill();
  }

  if (!document.querySelector('.modal[style*="display: block"]')) {
    $('body').removeClass('no-scroll'); // 열린 모달이 없을 때만 스크롤 활성화
  }

  $hamburgerBtn.focus();
}

// inert 폴리필 함수
function applyInertPolyfill() {
  /* 1. 사이드바 */
  const $dimOverlay = $('#dim-overlay'); // Dim 처리 요소
  const $sidebar = $('.sidebar'); // 사이드바 메뉴

  // 사이드바와 햄버거 버튼을 제외한 모든 요소
  const elements = $('body > *').not($sidebar).not($sidebar.parents()).not($dimOverlay);

  elements.each(function() {
    $(this).attr('aria-hidden', 'true');

    // 요소 내의 모든 포커스 가능한 요소 비활성화
    $(this).find('a, button, input, select, textarea, [tabindex]').each(function() {
      if (!$(this).data('original-tabindex')) {
        $(this).data('original-tabindex', $(this).attr('tabindex') || null);
      }
      $(this).attr('tabindex', '-1');
    });
  });
}

// inert 폴리필 제거 함수
function removeInertPolyfill() {
  $('[aria-hidden="true"]').removeAttr('aria-hidden');

  // 원래 tabindex 복원
  $('[data-original-tabindex]').each(function() {
    const originalValue = $(this).data('original-tabindex');
    if (originalValue === null) {
      $(this).removeAttr('tabindex');
    } else {
      $(this).attr('tabindex', originalValue);
    }
    $(this).removeData('original-tabindex');
  });
}

/* 2. [공통]상단 글씨크기 변경 */
function changeTextSize(size) {
  const $buttons = $('.txt-size-btn');
  const $body = $('body');
  const sizes = ['small', 'normal', 'lg'];
  const index = sizes.indexOf(size);

  if (index === -1) return; // 잘못된 값 방지

  $body.attr('data-text-size', size);
  $buttons.removeClass('active');
  $buttons.eq(index).addClass('active');
  localStorage.setItem('textSize', size);
}


/* 3. [공통]모달 관련 함수 */
// 모달 크기 조정 및 회전 처리
function adjustModalSize(modalId, options={}) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');
  const modalBody = modalContent.querySelector('.modal-body');
  const modalType = modal?.dataset.modalType; // ← 여기 추가


  if (modalContent) {
    // 실제 사용 가능한 뷰포트 높이 계산 (모바일 브라우저 UI 고려)
    const viewportHeight = window.innerHeight; // 화면 높이
    const viewportWidth = window.innerWidth;   // 화면 너비

    // 사파리 등 모바일 브라우저에서의 실제 높이 계산을 위한 함수
    const getActualViewportHeight = () => {
      // 임시 div로 100vh 측정
      let test = document.createElement('div');
      test.style.position = 'fixed';
      test.style.height = '100vh';
      test.style.width = '0';
      test.style.top = '0';
      document.documentElement.appendChild(test);

      const vh = test.offsetHeight;
      document.documentElement.removeChild(test);

      return vh;
    };

    // 실제 뷰포트 높이 (모바일 UI 고려)
    const actualVH = getActualViewportHeight();

    // 안전 영역 계산 (접근 가능한 스크린 영역)
    const safeAreaHeight = Math.min(viewportHeight, actualVH);

    if (viewportWidth <= 768) {
      // 모바일 화면: 가로/세로 교차 및 회전 적용
      /* 모달 ID 기준 */
      if(modalId === 'modal-onlineUserCard') {
        /* 1. 온라인 회원카드 */
        // 모바일 UI 요소를 고려한 크기 계산
        modalContent.style.width = `${safeAreaHeight - 32}px`; // 여백 포함
        modalContent.style.height = `${viewportWidth - 32}px`; // 여백 포함
        modalContent.style.transform = 'translate(-50%, -50%) rotate(-90deg)'; // 모바일은 회전 적용
        modalContent.style.transformOrigin = 'center'; // 회전 중심
        modalContent.style.borderRadius = '8px'; // 둥근 모서리 제거
        modalContent.style.padding = '60px 0 0 0'; // 모바일에서 추가 여백
      } else if (modalId === 'modal-centerJoin') {
        // 안전 영역 고려한 높이 계산
        const vhHeight = safeAreaHeight * 1; // 99%로 약간 줄여서 여백 확보
        const vhWidth = viewportWidth * 1; // 약간의 여백 추가

        modalContent.style.width = `${vhWidth}px`;
        modalContent.style.height = `${vhHeight}px`;

        // 내용이 넘칠 경우를 대비한 스크롤 설정
        if (modalBody) {
          // 헤더/패딩 등 고려한 계산
          const headerHeight = 96; // 헤더 높이 (필요에 따라 조정)
          modalBody.style.height = `${vhHeight - headerHeight}px`;
          modalBody.style.overflow = 'auto';
          modalBody.style.webkitOverflowScrolling = 'touch'; // iOS 스크롤 개선
        }
      }
      /* 모달 타입 기준 */
      if (modalType === 'fixed-btn-ver') {
        // 안전 영역 고려한 높이 계산
        const vhHeight = safeAreaHeight * 1; // 99%로 약간 줄여서 여백 확보
        const vhWidth = viewportWidth * 1; // 약간의 여백 추가

        modalContent.style.width = `${vhWidth}px`;
        modalContent.style.height = `${vhHeight}px`;

        // 내용이 넘칠 경우를 대비한 스크롤 설정
        if (modalBody) {
          // 헤더/패딩 등 고려한 계산
          const headerHeight = 48; // 헤더 높이 (필요에 따라 조정)
          modalBody.style.height = `${vhHeight - headerHeight}px`;
          modalBody.style.paddingBottom = `64px`;
          modalBody.style.overflow = 'auto';
          modalBody.style.webkitOverflowScrolling = 'touch'; // iOS 스크롤 개선
        }
      } else if (modalType !== 'confirm-ver' && modalType !== 'absolute-ver') {
        // 안전 영역 고려한 높이 계산
        const vhHeight = safeAreaHeight * 1; // 99%로 약간 줄여서 여백 확보
        const vhWidth = viewportWidth * 1; // 약간의 여백 추가

        modalContent.style.width = `${vhWidth}px`;
        modalContent.style.height = `${vhHeight}px`;

        // 내용이 넘칠 경우를 대비한 스크롤 설정
        if (modalBody) {
          // 헤더/패딩 등 고려한 계산
          const headerHeight = 48; // 헤더 높이 (필요에 따라 조정)
          modalBody.style.height = `${vhHeight - headerHeight}px`;
          modalBody.style.overflow = 'auto';
          modalBody.style.webkitOverflowScrolling = 'touch'; // iOS 스크롤 개선
        }
      }

      // 디버깅용 - 실제 계산된 높이 확인 (개발 중 참고용, 나중에 제거)
      console.log(`Actual VH: ${actualVH}, Window Height: ${viewportHeight}, SafeArea: ${safeAreaHeight}`);
    } else {
      // PC 화면: 스타일 초기화 및 기존 설정
      if(modalId === 'modal-onlineUserCard') {
        /* 1. 온라인 회원카드 */
        modalContent.style.width = '90%'; // 기본 너비
        modalContent.style.maxWidth = '800px'; // 최대 너비
        modalContent.style.height = 'auto'; // 높이 자동
        modalContent.style.transform = 'translate(-50%, -50%)'; // 기본 위치
        modalContent.style.borderRadius = '8px'; // 둥근 모서리 추가
        modalContent.style.padding = '64px 0 0 0'; // 기존 여백 유지
      } else if (modalId === 'modal-centerJoin' || modalId === 'modal-curriculum') {
        // PC 스타일 초기화
        modalContent.style.width = '90%';
        modalContent.style.maxWidth = '800px';
        modalContent.style.height = 'auto';

        if (modalBody) {
          modalBody.style.height = 'auto';
          modalBody.style.maxHeight = '80vh'; // PC에서는 최대 높이만 제한
          modalBody.style.overflow = 'auto';
        }
      }
    }
  }
}
// -------- 모달 띄우기 함수 ------------
// 현재 열린 모달들을 스택으로 관리
let modalStack = []; // 모달 스택
function showModal(modalId,options={}) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const overlay = document.getElementById('overlay');
  const currentOpenModal = modalStack.length > 0 ? document.getElementById(modalStack[modalStack.length - 1]) : null;

  // 기존 모달 비활성화
  if (currentOpenModal) {
    currentOpenModal.setAttribute('aria-hidden', 'true'); // 비활성화
    currentOpenModal.style.zIndex = '10001';
  }

  // 새 모달 활성화
  modal.style.display = 'block';
  modal.style.zIndex = '10002';
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  modalStack.push(modalId); // 스택에 모달 ID 추가

  // ✅ 위치 조정 로직
  if (window.innerWidth > 1200 && options.absolute && options.triggerElement) {
    const rect = options.triggerElement.getBoundingClientRect();
    console.log(rect)
    modal.style.position = 'absolute';
    modal.style.left = `${rect.left}px`;
    modal.style.top = `${rect.bottom + window.scrollY}px`;
  } else {
    // 1200 이상일 때는 위치를 reset하거나 다른 스타일 적용
    modal.style.position = ''; // 자바스크립트로 지정한 위치를 리셋
    modal.style.left = '';
    modal.style.top = '';
  }

  // 오버레이 활성화
  if (modal.classList.contains('no-dim')) {
    if(modal.id === 'modal-virtualKeyboard') {
      overlay?.classList.add('transparent');
    }
    overlay?.classList.add('active');
  }

  // 모달 내 tab-wrap이 있는지 체크하고 높이 업데이트 호출
  const tabWraps = modal.querySelectorAll('.tab-wrap');
  if (tabWraps.length > 0) {
    console.log(`${modalId} 모달에 tab-wrap이 있습니다. 높이 업데이트 실행.`);
    const tabManager = new TabManager();
    setTimeout(() => {
      tabManager.updateHeight(modalId); // 특정 모달 내 tab-wrap 높이 업데이트
    }, 0);
  } else {
    console.log(`${modalId} 모달에 tab-wrap이 없습니다.`);
  }

  // 포커스 트랩 설정
  handleFocusTrap(modal);

  if (window.innerWidth <= 1200) {
    adjustModalSize(modalId);
  }
}
// 모달 안 focus 가능한 영역 확인 코드 : 최상단 모달에서만 tab키를 눌러도 반응해야하는게 목적
const handleFocusTrap = (modal) => {
  const getFocusableElements = () => {
    return Array.from(
      modal.querySelectorAll(`
        button:not([disabled]),
        [href]:not([aria-hidden="true"]),
        input:not([disabled]):not([type="hidden"]),
        select:not([disabled]),
        textarea:not([disabled]),
        [tabindex]:not([tabindex="-1"]),
        .custom-select .select-list[aria-hidden="false"] li button,
        .custom-select .select-list[aria-hidden="false"] li a
      `)
    ).filter((el) => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        style.opacity !== '0'
      );
    });
  };

  // 모달별 isEnforcingFocus 상태를 추가
  if (!modal._isEnforcingFocus) {
    modal._isEnforcingFocus = false;
  }

  const enforceFocus = (e) => {
    const isTopModal = modalStack[modalStack.length - 1] === modal.id;
    const activeElement = document.activeElement;

    if (!isTopModal || modal._isEnforcingFocus) return;

    if (!modal.contains(e.target)) {
      e.preventDefault();
      modal._isEnforcingFocus = true;

      if (activeElement && activeElement.closest('.custom-select')) {
        activeElement.focus(); // select 열려있는 경우 그대로 유지
      } else {
        const firstFocusable = getFocusableElements()[0];
        firstFocusable?.focus(); // 최신 요소 기준으로
      }

      setTimeout(() => {
        modal._isEnforcingFocus = false;
      }, 0);
    }
  };

  const keydownHandler = (e) => {
    if (e.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const currentIndex = focusableElements.indexOf(document.activeElement);
    if (currentIndex === -1) {
      requestAnimationFrame(() => {
        focusableElements[0]?.focus();
      });
      return;
    }

    e.preventDefault();

    let nextIndex;
    if (e.shiftKey) {
      nextIndex = currentIndex - 1 < 0 ? focusableElements.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex + 1 >= focusableElements.length ? 0 : currentIndex + 1;
    }

    requestAnimationFrame(() => {
      focusableElements[nextIndex]?.focus();
    });
  };

  // 기존 이벤트 제거
  if (modal._enforceFocusHandler) {
    document.removeEventListener('focus', modal._enforceFocusHandler, true);
    document.removeEventListener('keydown', modal._keydownHandler, true);
  }

  // 새 이벤트 등록
  document.addEventListener('focus', enforceFocus, true);
  document.addEventListener('keydown', keydownHandler, true);

  // 핸들러 참조 저장
  modal._enforceFocusHandler = enforceFocus;
  modal._keydownHandler = keydownHandler;

  // 모달 열릴 때 첫 포커스
  setTimeout(() => {
    const firstFocusable = getFocusableElements()[0];
    firstFocusable?.focus();
  }, 0);
};
// 모달 숨기기 함수
function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // resetModalFields(modal);

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  // 스택에서 제거
  modalStack = modalStack.filter((id) => id !== modalId);

  // 포커스 트랩 제거
  if (modal._enforceFocusHandler) {
    document.removeEventListener('focus', modal._enforceFocusHandler, true);
    document.removeEventListener('keydown', modal._keydownHandler, true);
    delete modal._enforceFocusHandler;
    delete modal._keydownHandler;
  }

  // 오버레이 제거 (선택적)
  const overlay = document.getElementById('overlay');
  if (overlay.classList.contains('transparent')) {
    overlay.classList.remove('transparent');
  }
  overlay.classList.remove('active');

  // 아래 모달 다시 포커싱 가능하도록 처리
  const prevModalId = modalStack[modalStack.length - 1];
  if (prevModalId) {
    const prevModal = document.getElementById(prevModalId);
    if (prevModal) {
      prevModal.setAttribute('aria-hidden', 'false');
      handleFocusTrap(prevModal); // ← 💡여기서 포커스트랩 재설정!
      requestAnimationFrame(() => {
        const firstFocusable = prevModal.querySelector(
          'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus(); // optional
      });
    }
  }

  // 모달이 하나도 남지 않았다면 no-scroll 클래스 제거
  if (modalStack.length === 0) {
    document.body.classList.remove('no-scroll');
  }
}
// 모달 안 인풋 관련 값 리셋 함수
function resetModalFields(modal) {
  if (!modal) return;

  // 모든 input, select, textarea 초기화
  const inputs = modal.querySelectorAll('input, select, textarea');

  inputs.forEach((el) => {
    if (el.tagName === 'INPUT') {
      const type = el.type;
      if (type === 'checkbox' || type === 'radio') {
        el.checked = false;
      } else if (type !== 'button' && type !== 'submit' && type !== 'reset') {
        el.value = '';
      }
    } else if (el.tagName === 'SELECT') {
      el.selectedIndex = 0;
    } else if (el.tagName === 'TEXTAREA') {
      el.value = '';
    }
  });

  // 필요 시 추가적으로 리셋할 항목들
  const customSelects = modal.querySelectorAll('.custom-select .selected');
  customSelects.forEach(el => {
    el.textContent = ''; // 선택된 값 비우기
  });

  // 클래스나 스타일 초기화 등도 여기에 포함 가능
}

/* 4. 탭 관련 함수 */
class TabManager {
  constructor() {
    this.isMobile = window.innerWidth <= 767;
    this.tabSets = new Map(); // Map을 명시적으로 초기화
    this.init();

    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 767;

      document.querySelectorAll('.tab-wrap').forEach(wrap => {
        const tabType = wrap.getAttribute('data-tab');
        const firstDepth = wrap.querySelector('.first-depth');

        if (!firstDepth) return;

        if (tabType === 'fraternal') {
          if (!wasMobile && this.isMobile) {
            this.moveActiveTabToTop(wrap);
          } else if (wasMobile && !this.isMobile) {
            this.restoreOriginalOrder(wrap);
          }
        }
      });

      this.updateHeight();
    });
  }

  // 각 탭 세트의 ID 생성
  getTabSetId(wrap) {
    // 이미 ID가 있으면 사용, 없으면 data-tab 속성과 랜덤 값을 합쳐 고유 ID 생성
    if (!wrap.dataset.tabSetId) {
      const tabType = wrap.getAttribute('data-tab') || 'unknown';
      wrap.dataset.tabSetId = `${tabType}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
    }
    return wrap.dataset.tabSetId;
  }

  // 탭 세트별로 초기 순서 저장
  saveOriginalOrder(wrap, firstDepth) {
    if (!firstDepth) return;

    // this.tabSets가 정의되어 있는지 확인
    if (!this.tabSets) {
      this.tabSets = new Map();
    }

    const id = this.getTabSetId(wrap);

    if (!this.tabSets.has(id)) {
      console.log(`${id} 탭 세트의 초기 순서 저장`);
      this.tabSets.set(id, {
        originalOrder: Array.from(firstDepth.children).map(li => li.cloneNode(true))
      });
    }
  }

  // 탭 세트별로 원래 순서 복원
  restoreOriginalOrder(wrap) {
    // this.tabSets가 정의되어 있는지 확인
    if (!this.tabSets) {
      console.warn('tabSets가 초기화되지 않았습니다.');
      return;
    }

    const id = this.getTabSetId(wrap);
    const tabSetData = this.tabSets.get(id);

    if (!tabSetData || !tabSetData.originalOrder) {
      console.warn(`저장된 탭 세트 데이터가 없습니다. ID: ${id}`);
      return;
    }

    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    if (wrap.getAttribute('data-tab') === 'fraternal') {
      console.log(`${id} 탭 세트의 초기 순서 복원 중...`);

      // 현재 활성화된 탭 찾기
      const currentActiveTab = wrap.querySelector('.first-depth > li.active .tab');
      const currentActiveTabId = currentActiveTab ? currentActiveTab.textContent.trim() : null;

      firstDepth.innerHTML = '';

      // 원래 순서로 복원하지만 active 클래스는 모두 제거
      tabSetData.originalOrder.forEach(li => {
        const newLi = li.cloneNode(true);
        newLi.classList.remove('active'); // 모든 active 클래스 제거
        firstDepth.appendChild(newLi);
      });

      // 현재 활성화된 탭 텍스트와 일치하는 탭을 찾아 active로 설정
      if (currentActiveTabId) {
        const tabs = wrap.querySelectorAll('.first-depth > li .tab');
        for (const tab of tabs) {
          if (tab.textContent.trim() === currentActiveTabId) {
            const tabItem = tab.closest('li');
            tabItem.classList.add('active');

            // 해당 tab-box 표시
            const tabBox = tabItem.querySelector('.tab-box');
            if (tabBox) {
              tabBox.style.display = 'block';
            }
            break;
          }
        }
      }

      this.reattachEventListeners();
      this.updateHeight();
    }
  }

  moveActiveTabToTop(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const activeTab = wrap.querySelector('.first-depth > li.active');
    if (activeTab && this.isMobile && wrap.getAttribute('data-tab') === 'fraternal') {
      firstDepth.insertBefore(activeTab, firstDepth.firstChild);
    }
  }

  attachEventListeners(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const tabs = wrap.querySelectorAll('.first-depth > li .tab');
    const tabType = wrap.getAttribute('data-tab');

    // 모바일 환경에서 탭 키 네비게이션을 위한 tabindex 설정
    if (tabType === 'fraternal') {
      this.updateTabindexes(wrap);

      // opened 클래스가 변경될 때마다 tabindex 업데이트
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' &&
            mutation.attributeName === 'class' &&
            firstDepth === mutation.target) {
            this.updateTabindexes(wrap);
          }
        });
      });

      observer.observe(firstDepth, { attributes: true });
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (tabType === 'fraternal' && this.isMobile) {
          if (firstDepth.classList.contains('opened')) {
            this.activateTab(tab);
            firstDepth.classList.remove('opened');

            // 클릭한 탭에 포커스 유지 (이 부분만 추가)
            setTimeout(() => {
              tab.focus();
            }, 0);
          } else {
            firstDepth.classList.add('opened');
          }
        } else {
          this.activateTab(tab, tabType);
        }
      });

      tab.addEventListener('focus', () => {
        if (tabType !== 'fraternal' || !this.isMobile) {
          this.activateTab(tab, tabType);
        }
      });
    });
  }

// 탭의 tabindex를 업데이트하는 새로운 메서드
  updateTabindexes(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const isOpened = firstDepth.classList.contains('opened');
    const tabType = wrap.getAttribute('data-tab');

    if (tabType === 'fraternal' && this.isMobile) {
      const tabs = wrap.querySelectorAll('.first-depth > li .tab');

      if (isOpened) {
        // 열린 상태에서는 모든 탭에 탭 포커스 활성화
        tabs.forEach(tab => {
          tab.setAttribute('tabindex', '0');
        });
      } else {
        // 닫힌 상태에서는 활성화된 탭만 탭 포커스 활성화
        tabs.forEach(tab => {
          const isActive = tab.closest('li').classList.contains('active');
          tab.setAttribute('tabindex', isActive ? '0' : '-1');
        });
      }
    }
  }

// init 함수의 끝부분에 다음 코드 추가
  reattachEventListeners() {
    document.querySelectorAll('.tab-wrap').forEach(wrap => {
      this.attachEventListeners(wrap);
    });
  }

  init() {
    // Map 초기화 확인
    if (!this.tabSets) {
      this.tabSets = new Map();
    }

    const tabWraps = document.querySelectorAll('.tab-wrap');

    tabWraps.forEach((wrap, index) => {
      const tabType = wrap.getAttribute('data-tab');

      const firstDepth = wrap.querySelector('.first-depth');
      if (!firstDepth) {
        console.warn(`탭 랩 #${index}에 .first-depth 요소가 없습니다!`);
        return;
      }

      // 초기 순서 저장 - 수정된 메서드 호출
      this.saveOriginalOrder(wrap, firstDepth);

      const tabs = wrap.querySelectorAll('.first-depth > li .tab');
      if (tabs.length <= 1) {
        // 탭 버튼이 하나라면 숨기기
        firstDepth.classList.add('only');
      } else {
        firstDepth.classList.remove('only');
      }

      const tabBoxes = wrap.querySelectorAll('.tab-box');
      console.log(`탭 ${tabs.length}개, 탭 박스 ${tabBoxes.length}개 발견`);

      // 초기에 모든 tab-box 숨기기
      tabBoxes.forEach(box => box.style.display = 'none');

      // 활성 탭의 tab-box 보이기
      const activeTabBox = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTabBox) {
        activeTabBox.style.display = 'block';

        // fraternal 타입 모바일일 경우만 초기에 활성 탭을 최상단으로 이동
        if (tabType === 'fraternal' && this.isMobile) {
          const activeTab = activeTabBox.closest('li');
          firstDepth.insertBefore(activeTab, firstDepth.firstChild);
        }
      } else {
        console.log(`활성 탭 박스를 찾을 수 없음`);
      }

      // 각 탭 랩에 이벤트 리스너 부착
      this.attachEventListeners(wrap);

      // 모바일에서 외부 클릭 시 목록 닫기 (fraternal 타입만)
      if (tabType === 'fraternal') {
        document.addEventListener('click', (e) => {
          if (this.isMobile && !wrap.contains(e.target)) {
            firstDepth.classList.remove('opened');
          }
        });
      }
    });
    this.updateHeight();
  }

  activateTab(selectedTab, tabType) {
    const wrap = selectedTab.closest('.tab-wrap');
    if (!wrap) return;

    const firstDepth = wrap.querySelector('.first-depth');
    if (!firstDepth) return;

    const allTabs = wrap.querySelectorAll('.first-depth > li');
    tabType = tabType || wrap.getAttribute('data-tab');

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

    // fraternal 타입의 모바일에서만 선택된 탭을 최상단으로 이동
    if (tabType === 'fraternal' && this.isMobile) {
      const parent = activeTabItem.parentNode;
      parent.insertBefore(activeTabItem, parent.firstChild);
    }

    setTimeout(() => this.updateHeight(), 0);
  }

  updateHeight(modalId = null) {
    // 대상 선택: modalId가 있으면 특정 모달 내부의 tab-wrap만 선택
    const tabWrapSelector = modalId
      ? `#${modalId} .tab-wrap` // 특정 모달 안의 .tab-wrap
      : '.tab-wrap';            // 모든 .tab-wrap

    console.log(tabWrapSelector)
    // 선택된 tab-wrap 요소
    const tabWraps = document.querySelectorAll(tabWrapSelector);

    // tab-wrap이 존재하지 않으면 아무 작업도 하지 않음
    if (!tabWraps.length) {
      console.log('tab-wrap 요소가 없습니다.');
      return;
    }

    // 각 tab-wrap의 높이 계산 및 업데이트
    tabWraps.forEach(wrap => {
      const activeTab = wrap.querySelector('.first-depth > li.active .tab-box'); // 활성화된 탭 찾기
      if (activeTab) {
        const tabBoxHeight = activeTab.offsetHeight; // 활성 탭의 높이
        // modal 내부인지 확인하는 조건
        const isInModal = modalId && wrap.closest(`#${modalId}`);
        const listLength = wrap.querySelectorAll('.first-depth > li').length;

        /* tab의 수가 1이하인 경우 상단에 버튼을 가리기위해 0 높이 더함 /
        *  나머지의 경우 pc / mobile 에 따라 차등을 두어 값 적용
        *  */
        const topSpacing =
          listLength <= 1
            ? 0
            : isInModal
              ? 84
              : this.isMobile
                ? 84
                : 104;
        console.log(topSpacing)

        wrap.style.height = `${tabBoxHeight + topSpacing}px`; // 계산된 높이 설정
      }
    });
  }
}
/* 5. 수강신청 관련 탭 함수 - 인덱스를 매개변수로 받도록 수정 */
// openTab 함수 수정
function openTab(tabIndex) {
  const tab = document.querySelector('.f-modal');
  // 모달 열기 전에 data-focus-trap 속성 초기화
  tab.removeAttribute('data-focus-trap');

  tab.classList.add('active');
  document.body.classList.add('no-scroll');

  // 모든 탭 선택
  const allTabs = tab.querySelectorAll('.check-scroll > ul > li');
  if (allTabs.length > 0) {
    // 인덱스 유효성 검사
    if (tabIndex === undefined || tabIndex < 0 || tabIndex >= allTabs.length) {
      tabIndex = 0; // 잘못된 인덱스인 경우 첫 번째 탭 사용
    }

    // 모든 탭에서 active 제거
    allTabs.forEach((tabItem) => {
      tabItem.classList.remove('active');

      // 각 탭의 버튼에서도 active 클래스 제거
      const btn = tabItem.querySelector('.check-tab-btn');
      if (btn) {
        btn.classList.remove('active');
      }

      // 콘텐츠 높이 초기화
      const content = tabItem.querySelector('.sub-tab-content');
      if (content) {
        content.style.height = '';
      }
    });

    // 선택한 탭만 활성화
    allTabs[tabIndex].classList.add('active');

    // 선택한 탭의 버튼도 활성화
    const selectedBtn = allTabs[tabIndex].querySelector('.check-tab-btn');
    if (selectedBtn) {
      selectedBtn.classList.add('active');
    }

    // 선택한 탭의 내용을 표시 (모바일인 경우)
    const selectedContent = allTabs[tabIndex].querySelector('.sub-tab-content');
    if (selectedContent && window.innerWidth <= 768) {
      selectedContent.style.height = 'calc(80vh - 96px)';
      allTabs[tabIndex].style.height = 'auto';
    }
  }

  // 모바일일 경우 포커스 트랩 설정
  if (window.innerWidth <= 768) {
    // 간단한 포커스 트랩 직접 구현
    setupFocusTrap(tab);
  }
}
function setupFocusTrap(modal) {
  if (!modal) return;

  console.log('포커스 트랩 설정 중...');

  // 이전 이벤트 리스너 제거 (중복 방지)
  document.removeEventListener('keydown', handleTabKey);
  document.addEventListener('keydown', handleTabKey);

  // 포커스 가능한 기본 요소들 수집
  let focusableElements = Array.from(modal.querySelectorAll(
    'button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"]), .check-tab-btn'
  ));
  focusableElements = focusableElements.filter(el => {
    const style = window.getComputedStyle(el);
    if (
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0' ||
      el.hasAttribute('hidden')
    ) {
      return false;
    }
    return true;
  });


  // label[for] 요소도 포커스 가능하게 추가
  const customInputLabels = Array.from(modal.querySelectorAll('label[for]'));
  customInputLabels.forEach(label => {
    if (!label.hasAttribute('tabindex')) {
      label.setAttribute('tabindex', '0');
    }
  });

  // 병합
  focusableElements = [...focusableElements, ...customInputLabels];

  focusableElements = focusableElements.filter(el => {
    // 추가 디버깅 로그
    console.log(`필터링 중: ${el.tagName}`, {
      visible: window.getComputedStyle(el).visibility,
      display: window.getComputedStyle(el).display,
      opacity: window.getComputedStyle(el).opacity,
      hidden: el.hasAttribute('hidden'),
    });

    if (
      el.disabled || // 비활성화된 요소 제외
      window.getComputedStyle(el).display === 'none' || // 안 보이는 요소 제외
      window.getComputedStyle(el).visibility === 'hidden' || // 숨김 처리된 요소 제외
      window.getComputedStyle(el).opacity === '0' || // 투명한 요소 제외
      el.hasAttribute('hidden') // 다른 숨김 속성 제외
    ) {
      return false;
    }

    // 모든 조건을 통과한 요소만 유지
    return true;
  });

  // DOM 순서대로 정렬
  focusableElements.sort((a, b) => {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
  });

  console.log('포커스 가능한 요소들:', focusableElements.length);
  focusableElements.forEach((el, index) => {
    console.log(`요소 ${index}:`, el.tagName, el.className, el.id);
  });

  // 저장
  modal._focusableElements = focusableElements;
  modal._firstFocusableElement = focusableElements[0];
  modal._lastFocusableElement = focusableElements[focusableElements.length - 1];

  // 이전 포커스된 요소 저장
  window.lastFocusedElement = document.activeElement;

  const activeTabBtn = modal.querySelector('.check-scroll > ul > li.active > .check-tab-btn');

  setTimeout(() => {
    // 포커스 설정
    if (activeTabBtn) {
      console.log('활성화된 탭 버튼에 포커스 설정');
      activeTabBtn.focus();
    } else {
      const firstTabBtn = modal.querySelector('.check-tab-btn');
      if (firstTabBtn) {
        console.log('첫 탭 버튼에 포커스 설정');
        firstTabBtn.focus();
      } else if (focusableElements.length > 0) {
        console.log('첫 포커스 가능한 요소에 포커스 설정');
        focusableElements[0].focus();
      }
    }

    // 모든 체크박스/라디오에 tabindex=0 부여 (포커스 가능하게)
  // 숨겨진 체크박스와 라디오도 포함
    const allInputs = modal.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    allInputs.forEach(input => {
      // tabindex가 없으면 추가
      if (!input.hasAttribute('tabindex')) {
        input.setAttribute('tabindex', '0');
      }
    });


    modal.setAttribute('data-focus-trap', 'true');
  }, 100);
}
function handleTabKey(e) {
  if (e.key !== "Tab") return;

  const modal = document.querySelector('.f-modal.active[data-focus-trap="true"]');
  if (!modal) return;

  const focusableElements = modal._focusableElements || [];
  const firstFocusableElement = modal._firstFocusableElement;
  const lastFocusableElement = modal._lastFocusableElement;

  if (!focusableElements.length || !firstFocusableElement || !lastFocusableElement) return;

  const currentFocusIndex = focusableElements.indexOf(document.activeElement);

  // 포커스가 모달 외부에 있는 경우
  if (currentFocusIndex === -1) {
    e.preventDefault();
    (e.shiftKey ? lastFocusableElement : firstFocusableElement).focus({ preventScroll: true });
    return;
  }

  // 순환 포커스 처리
  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      e.preventDefault();
      requestAnimationFrame(() => {
        lastFocusableElement.focus({ preventScroll: true });
      });
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      e.preventDefault();
      requestAnimationFrame(() => {
        firstFocusableElement.focus({ preventScroll: true });
      });
    }
  }
}
class CheckTabManager {
  constructor() {
    this.mobileWrap = document.querySelector('.f-modal');
    this.wrap = document.querySelector('.check-tab-wrap');

    // .check-tab-wrap 요소가 없는 경우 초기화 중단
    if (!this.wrap) {
      console.warn('CheckTabManager: .check-tab-wrap 요소를 찾을 수 없습니다.');
      return;
    }

    this.modalBody = document.querySelector('.f-modal-body');
    this.tabItems = this.wrap.querySelectorAll('.check-scroll > ul > li');
    this.isExpanded = false;
    this.isMobile = window.innerWidth < 768;
    this.allWrapBtns = this.wrap.querySelectorAll('.check-tab-btn');
    this.closeBtn = this.mobileWrap.querySelector('.close-btn');

    // 포커스 제어를 위한 변수 추가
    this.focusableElements = null;
    this.firstFocusableElement = null;
    this.lastFocusableElement = null;


    this.BUTTON_HEIGHT = 48;

    // PC 환경에서의 높이 값
    this.CONTENT_HEIGHT = 222;
    this.COLLAPSED_CONTENT_HEIGHT = 52;

    this.init();

    // 창 크기 변경 시 모바일 상태 업데이트
    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth < 768;

      // 모바일 <-> PC 전환 시 UI 상태 업데이트
      if (wasMobile !== this.isMobile) {
        this.updateUIForDeviceChange();
      }

      // 모바일 -> PC 전환 시
      if (wasMobile === true && this.isMobile === false) {
        this.mobileWrap.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });

    // 모달 배경 클릭 시 모달 닫기 이벤트 추가
    this.mobileWrap.addEventListener('click', (event) => {
      // 클릭된 요소가 f-modal 자체인 경우에만 닫기 (내부 요소 클릭 시 닫지 않음)
      if (event.target === this.mobileWrap) {
        this.mobileWrap.classList.remove('active');
        document.body.classList.remove('no-scroll');
        this.tabItems.forEach(tabItem => {
          tabItem.classList.remove('active');
        })
      }
    });

    // 모달이 활성화될 때 포커스 트랩 설정
    this.mobileWrap.addEventListener('transitionend', () => {
      if (this.mobileWrap.classList.contains('active') && this.isMobile) {
        setupFocusTrap();
      }
    });

    // 키보드 이벤트 리스너 추가
    // document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  init() {
    // 모든 check-tab-btn에 이벤트 리스너 추가
    this.allWrapBtns.forEach(btn => {
      btn.classList.remove('active'); // 초기에 active 제거

      // 초기 텍스트를 '닫힘'으로 설정
      const visibilityText = btn.querySelector('.isOpen .visually-hidden');
      if (visibilityText) {
        visibilityText.textContent = '열림';
      }

      btn.addEventListener('click', (event) => {
        // 모바일 환경에서도 클릭 이벤트가 작동하도록 수정
        if (this.isMobile) {
          this.toggleMobileTab(event);
        } else {
          this.toggleAllTabs();
        }
      });
    });

    this.closeBtn.addEventListener('click', () => {
      this.mobileWrap.classList.remove('active');
      document.body.classList.remove('no-scroll');
      this.tabItems.forEach(tabItem => {
        tabItem.classList.remove('active');
      })
    });

    this.tabItems.forEach(tabItem => {
      const content = tabItem.querySelector('.sub-tab-content');

      // content가 null인 경우 건너뛰기
      if (!content) {
        console.warn('sub-tab-content 요소를 찾을 수 없습니다.');
        return;
      }

      // 초기 상태 설정
      tabItem.classList.remove('active'); // 초기에 active 제거
      content.dataset.expanded = 'true';

      // 모바일/PC에 따라 다른 초기 높이 설정
      if (this.isMobile) {
        this.setMobileInitialHeight(content);
      } else {
        this.setPCInitialHeight(content);
      }

      // 체크박스 변경 이벤트 (PC 환경에서만 작동)
      content.addEventListener('change', (e) => {
        if (!this.isMobile && e.target.type === 'checkbox' && this.isActive(tabItem)) {
          this.showOnlyCheckedItems(content);
        }
      });
    });
  }

  // 디바이스 변경 시 UI 업데이트
  updateUIForDeviceChange() {
    this.tabItems.forEach((item,index) => {
      const content = item.querySelector('.sub-tab-content');
      if (!content) return;

      const isActive = item.classList.contains('active');

      if (this.isMobile) {
        // PC -> 모바일 전환 시
        // 높이를 auto로 설정하고 transition 제거
        content.style.transition = 'none';
        item.style.transition = 'none';

        // 모바일에서는 auto 높이 적용
        if (isActive) {
          content.style.height = 'calc(80vh - 96px)';
          // 버튼 높이는 유지하면서 컨텐츠 높이는 auto로 설정
          item.style.height = '';
          this.showAllItemsMobile(content);
        } else {
          // 닫힌 상태일 때는 최소 높이 설정
          content.style.height = '0';
          item.style.height = `${this.BUTTON_HEIGHT}px`;
        }
      } else {
        // 모바일 -> PC 전환 시
        // PC 환경으로 복원
        content.style.transition = 'height 0.3s ease-in-out';
        item.style.transition = 'height 0.3s ease-in-out';

        this.setPCInitialHeight(content);

        // 모든 탭 닫기
        this.isExpanded = false;
        item.classList.remove('active');
        const btn = item.querySelector('.check-tab-btn');
        if (btn) btn.classList.remove('active');

        // 모든 항목 표시 (필터링 해제)
        this.showAllItems(content);
      }
    });
  }

  // PC 환경에서의 초기 높이 설정
  setPCInitialHeight(content) {
    if (!content) return;

    const li = content.closest('li');
    if (!li) return;

    content.style.transition = 'height 0.3s ease-in-out';
    li.style.transition = 'height 0.3s ease-in-out';

    content.style.height = `${this.CONTENT_HEIGHT}px`;
    li.style.height = `${this.CONTENT_HEIGHT + this.BUTTON_HEIGHT}px`;
  }

  // 모바일 환경에서의 초기 높이 설정
  setMobileInitialHeight(content) {
    if (!content) return;

    const li = content.closest('li');
    if (!li) return;

    // 모바일에서는 transition 제거 (부드러운 애니메이션 대신 즉시 변경)
    content.style.transition = 'none';
    li.style.transition = 'none';

    // 초기 상태에서는 접혀있도록 설정
    content.style.height = '0';
    li.style.height = `${this.BUTTON_HEIGHT}px`;
  }

  // 모바일 환경에서 탭 토글
  toggleMobileTab(event) {
    const clickedBtn = event.currentTarget;
    const tabItem = clickedBtn.closest('li');

    if (!tabItem) return;

    const isActive = tabItem.classList.contains('active');
    const content = tabItem.querySelector('.sub-tab-content');
    // 열림/닫힘 텍스트 요소 찾기
    const visibilityText = clickedBtn.querySelector('.isOpen .visually-hidden');

    if (!content) return;

    // 다른 모든 탭 닫기 (아코디언 방식)
    this.tabItems.forEach(item => {
      if (item !== tabItem && item.classList.contains('active')) {
        const itemContent = item.querySelector('.sub-tab-content');
        if (itemContent) {
          itemContent.style.height = '0';
          item.style.height = `${this.BUTTON_HEIGHT}px`;
        }
        item.classList.remove('active');
        const btn = item.querySelector('.check-tab-btn');
        if (btn) {
          btn.classList.remove('active');
          // 다른 버튼의 텍스트도 '닫힘'으로 변경
          const otherVisibilityText = btn.querySelector('.isOpen .visually-hidden');
          if (otherVisibilityText) {
            otherVisibilityText.textContent = '닫힘';
          }
        }
      }
    });

    // 현재 클릭한 탭 토글
// 현재 버튼이 활성 상태이고, 이를 닫으려고 하는 경우 활성 상태 유지
    if (isActive) {
      return; // **활성화된 버튼은 닫히지 않도록 방지**
    } else {
      // 열기
      content.style.height = 'auto';
      const autoHeight = content.offsetHeight;

      // 애니메이션을 위해 초기화 후 높이 설정
      content.style.height = '0';
      content.offsetHeight;
      content.style.transition = 'height 0.3s ease-in-out';
      content.style.height = `${autoHeight}px`;
      tabItem.style.height = `${autoHeight + this.BUTTON_HEIGHT}px`;

      this.showAllItemsMobile(content);

      tabItem.classList.add('active');
      clickedBtn.classList.add('active');

      if (visibilityText) {
        visibilityText.textContent = '열림';
      }

      // transition 후 높이 auto 유지
      setTimeout(() => {
        content.style.height = 'auto';
        tabItem.style.height = 'auto';
      }, 300);
    }

  }

  // PC 환경에서 모든 탭 토글
  toggleAllTabs() {
    this.isExpanded = !this.isExpanded;

    // 모든 탭 컨테이너의 상태 변경
    this.tabItems.forEach(item => {
      this.updateTabHeight(item, this.isExpanded);
      item.classList.toggle('active', this.isExpanded);

      // 열림/닫힘 텍스트 업데이트
      const btn = item.querySelector('.check-tab-btn');
      if (btn) {
        const visibilityText = btn.querySelector('.isOpen .visually-hidden');
        if (visibilityText) {
          visibilityText.textContent = this.isExpanded ? '닫힘' : '열림';
        }
      }
    });

    // 모든 버튼의 상태 변경
    this.allWrapBtns.forEach(btn => {
      btn.classList.toggle('active', this.isExpanded);
    });
  }

  // PC 환경에서 탭 높이 업데이트
  updateTabHeight(item, isActive) {
    if (!item) return;

    const content = item.querySelector('.sub-tab-content');
    if (content) {
      const contentHeight = isActive ? this.COLLAPSED_CONTENT_HEIGHT : this.CONTENT_HEIGHT;

      content.style.transition = 'height 0.3s ease-in-out';
      item.style.transition = 'height 0.3s ease-in-out';

      content.style.height = `${contentHeight}px`;
      item.style.height = `${contentHeight + this.BUTTON_HEIGHT}px`;

      if (isActive) {
        // PC 환경에서는 체크된 항목만 표시
        this.showOnlyCheckedItems(content);

        // display: none인 checkbox-badge-wrap의 상위 li에서 active 제거
        const hiddenItems = content.querySelectorAll('.checkbox-badge-wrap[style*="display: none"]');
        hiddenItems.forEach(hiddenItem => {
          const parentLi = hiddenItem.closest('li');
          if (parentLi) {
            parentLi.classList.remove('active');
          }
        });
      } else {
        this.showAllItems(content);
      }
    }
  }

  // 모바일 환경에서 모든 항목 표시 (체크박스 필터링 없음)
  showAllItemsMobile(content) {
    if (!content) return;
    const items = content.querySelectorAll('.checkbox-badge-wrap');
    items.forEach(item => {
      item.style.display = '';
      const listItem = item.closest('li');
      if (listItem) {
        listItem.style.display = '';
        // 모바일에서는 모든 항목 활성화
        listItem.classList.add('active');
      }

      // 체크박스 활성화 상태 유지
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.disabled = false;
      }
    });
  }

  isActive(item) {
    return item.classList.contains('active');
  }

  showOnlyCheckedItems(content) {
    if (!content) return;

    const items = content.querySelectorAll('.checkbox-badge-wrap');
    items.forEach(item => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      const listItem = item.closest('li');

      if (!checkbox || !listItem) return;

      if (checkbox && checkbox.checked) {
        listItem.style.display = '';        // 보여주기
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
        listItem.style.display = 'none';    // 숨기기
      }
      checkbox.disabled = true;
    });
  }

  showAllItems(content) {
    if (!content) return;

    const items = content.querySelectorAll('.checkbox-badge-wrap');
    items.forEach(item => {
      item.style.display = '';
      const listItem = item.closest('li');
      if (!listItem) return;

      listItem.classList.remove('active');
      listItem.style.display = '';
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (checkbox) checkbox.disabled = false;
    });
  }
}

/* 7. 데이트 피커 */
function formatYearOptions() {
  $(".ui-datepicker-year").each(function () {
    $(this).find("option").each(function () {
      const val = $(this).val();
      if (!$(this).text().includes("년")) {
        $(this).text(val + "년");
      }
    });
  });
}

/* 10. [공통] 셀렉트박스 */
// 초기화 함수
function initializeCustomSelect(selectElement, selectOptions, options = {}) {
  const button = selectElement.querySelector('.select-toggle');
  const list = selectElement.querySelector('.select-list');
  const selectedText = button.querySelector('.selected-text');

  const {
    up = false,
    placeholder = selectElement.dataset.placeholder || '선택하세요',
    preventSelectionOnLink = false,
    initialValue = null, // ← 여기에 추가
  } = options;

  if (up) {
    selectElement.classList.add('up');
  }

  selectedText.textContent = placeholder;
  list.setAttribute('aria-hidden', 'true');

  // 옵션 DOM 생성
  selectOptions.forEach(opt => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('data-value', opt.value);

    const discountClass = opt.discount?.startsWith('-') ? 'c-red' : (opt.discount ? 'c-blue' : '');
    if (opt.tag === 'a') {
      li.innerHTML = `
        <a href="${opt.href}" target="_blank" class="flex-wrap gap-auto al-center" tabindex="0">
          <span class="txt-sm fw-medium">${opt.value}</span>
          ${opt.discount ? `<span class="txt-sm fw-medium ${discountClass} ml-4">${opt.discount}</span>` : ''}
        </a>
      `;
    } else if (opt.tag === 'button') {
      li.innerHTML = `
        <button type="button" class="flex-wrap gap-auto al-center"  tabindex="0">
          <span class="txt-sm fw-medium">${opt.value}</span>
          ${opt.discount ? `<span class="txt-sm fw-medium ${discountClass} ml-4">${opt.discount}</span>` : ''}
        </button>
      `;
    }

    list.appendChild(li);
  });

  // Focus 업데이트
  const items = list.querySelectorAll('li');

  const closeList = () => {
    list.setAttribute('aria-hidden', 'true');
    button.setAttribute('aria-expanded', 'false');
    selectElement.classList.remove('active');
  };

  const openList = () => {
    list.setAttribute('aria-hidden', 'false');
    button.setAttribute('aria-expanded', 'true');
    selectElement.classList.add('active');
  };

  const toggleList = () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    expanded ? closeList() : openList();
  };

  const selectItem = item => {
    const selectedButton = item.querySelector('button');
    const selectedAnchor = item.querySelector('a');

    if (selectedButton) {
      const div = document.createElement('div');
      div.classList.add('selected-item');
      div.innerHTML = selectedButton.innerHTML;
      selectedText.innerHTML = '';
      selectedText.appendChild(div);
    } else if (selectedAnchor && !preventSelectionOnLink) {
      const div = document.createElement('div');
      div.classList.add('selected-item');
      div.innerHTML = selectedAnchor.innerHTML;
      selectedText.innerHTML = '';
      selectedText.appendChild(div);
    }

    items.forEach(i => i.setAttribute('aria-selected', 'false'));
    item.setAttribute('aria-selected', 'true');
    closeList();
    button.focus();
  };

  // 초기값이 있을 경우 해당 항목을 선택
  if (initialValue !== null) {
    const initialItem = Array.from(items).find(item => item.dataset.value === initialValue);
    if (initialItem) {
      selectItem(initialItem);
    }
  }

  // 이벤트
  button.addEventListener('click', toggleList);

  items.forEach((item, index) => {
    item.addEventListener('keydown', e => {
      const isAnchor = !!item.querySelector('a');

      if ((e.key === 'Enter' || e.key === ' ') && isAnchor && !preventSelectionOnLink) {
        // 링크는 이동만 하고, 선택 텍스트는 업데이트 안 함
        closeList();  // 링크를 클릭하면 리스트는 닫아줘야 함
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          const prev = items[index - 1] || items[items.length - 1];
          prev.focus();
        } else {
          const next = items[index + 1] || items[0];
          next.focus();
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = items[index + 1] || items[0];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = items[index - 1] || items[items.length - 1];
        prev.focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectItem(item);
        closeList();  // 선택한 후 리스트 닫기
      } else if (e.key === 'Escape') {
        closeList();
        button.focus();
      }
    });


    item.addEventListener('click', () => {
      const isAnchor = !!item.querySelector('a');
      if (isAnchor && preventSelectionOnLink) {
        closeList(); // 텍스트 변경 안 하고 리스트만 닫기
        return;
      }

      selectItem(item);
    });
  });

  document.addEventListener('click', e => {
    if (!selectElement.contains(e.target)) {
      closeList();
    }
  });
}

/* 11. [결제내역] 주민등록번호 : 가상키패드 */
// 랜덤 활성화 클래스 효과 함수
function activateRandomButton() {
  const numberButtons = document.querySelectorAll('.key.num');
  const randomIndex = Math.floor(Math.random() * numberButtons.length); // 0~9 중 랜덤
  const randomButton = numberButtons[randomIndex];

  // 랜덤 버튼에 active 클래스 추가
  randomButton.classList.add('active');

  // 짧은 시간 후 active 클래스 제거
  setTimeout(() => {
    randomButton.classList.remove('active');
  }, 200); // 200ms 후 제거
}
/* 12. [결제내역] 주민등록번호 : 앞자리 유효성 검사 */
function applyNumericInputFilter(inputElement, maxLength = Infinity) {
  inputElement.addEventListener('input', (event) => {
    const input = event.target;

    // 숫자 이외의 값 제거
    input.value = input.value.replace(/[^0-9]/g, '');

    // 최대 길이 제한 (기본값은 제한 없음)
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  });
}
/*-----------------------------------------------------------------------------------------------------*/

/* *************************************************************************************************** */
/* *************************************************************************************************** */

/*-----------------------------------------------------------------------------------------------------*/
/* ---- [ 실행문 모음 : 1,2,3,6,7,8,9,11]--------------------------------------------------------------- */
$(document).ready(function(){
  /* 1. [공통]사이드바 */
  // 윈도우 리사이즈 이벤트
  $(window).on('resize', function () {
    if ($(window).width() >= 1200) {
      // PC 모드로 전환되면 초기화
      removeActiveClasses();
    }
  });

  /* 2. [공통]상단 글씨크기 변경 */
  const sizes = ['small', 'normal', 'lg'];
  const savedSize = localStorage.getItem('textSize') || 'normal';
  const txtSizeIndex = sizes.indexOf(savedSize);
  if (txtSizeIndex === -1) return;
  $('body').attr('data-text-size', savedSize);
  $('.txt-size-btn').removeClass('active').eq(txtSizeIndex).addClass('active');

  /* 3. [공통]모달 관련 함수 */
  // 창 크기 변경 시 모달 크기 재조정 or hideModal 작동시키기
  window.addEventListener('resize', () => {
    if (modalStack.length === 0) return; // 열린 모달이 없으면 종료

    const openModalId = modalStack[modalStack.length - 1]; // 스택에서 가장 최근 열린 모달 ID 가져오기
    const openModal = document.getElementById(openModalId); // 해당 ID로 모달 요소 가져오기

    if (openModal) {
      if (openModal.id === 'modal-virtualKeyboard') {
        hideModal(openModal.id); // hideModal 실행
      } else {
        adjustModalSize(openModal.id); // 크기 재조정 호출
      }
    }
  });
  // 모달 창 배경 클릭시 닫힘 처리
  window.addEventListener('click', function (event) {
    const overlay = document.getElementById('overlay');
    const modals = document.querySelectorAll('.modal');
    const body = document.querySelector('body');

    // overlay 클릭 시, 최상단 모달만 닫기
    if (event.target === overlay) {
      const topModalId = modalStack[modalStack.length - 1];
      const topModal = document.getElementById(topModalId);

      if (topModal && topModal.classList.contains('no-dim')) {
        // 모달 닫기 전 인풋 필드 초기화 호출
        // resetModalFields(topModal);

        // 최상단 모달이 "no-dim"인 경우 닫기
        topModal.style.display = 'none';
        if (modalStack.length === 1) {
          body.classList.remove('no-scroll');
        }
        if(overlay.classList.contains('transparent')) {
          overlay.classList.remove('transparent');
        }
        overlay.classList.remove('active');
        modalStack.pop(); // 스택에서 제거
        return;
      }
    }

    // 나머지 모달 클릭 시, 닫기
    for (let modal of modals) {
      if (event.target === modal) {
        // 모달 닫기 전 인풋 필드 초기화 호출
        // resetModalFields(modal);
        modal.style.display = 'none';
        // 모달이 하나도 남지 않았다면 no-scroll 클래스 제거
        modalStack.pop(); // 스택에서 제거
        if (modalStack.length === 0) {
          body.classList.remove('no-scroll');
        }
        return;
      }
    }
  });

  /* 6. [공통]라디오 버튼 핸들러 */
  // 모든 라디오 버튼에 대한 키보드 접근성 향상 (name 속성 독립적)
  document.addEventListener('DOMContentLoaded', function() {
    // 기본정보 테이블 내의 라디오 버튼 식별
    const tableRadios = document.querySelectorAll('.custom-table.form-ver .radio-wrap input[type="radio"]');
    // 각 라디오 버튼에 대해
    tableRadios.forEach(function(radio) {
      // tabindex 재설정 (이미 -1로 설정된 경우 수정)
      if (radio.getAttribute('tabindex') === '-1') {
        radio.setAttribute('tabindex', '0');
      }
      // 시각적으로 숨겨진 라디오 버튼의 포커스 상태 표시하기 위한 이벤트 처리
      radio.addEventListener('focus', function() {
        this.parentElement.classList.add('radio-focused');
      });
      radio.addEventListener('blur', function() {
        this.parentElement.classList.remove('radio-focused');
      });
    });

    // 포커스 이동 디버깅을 위한 코드
    document.addEventListener('focusin', function(e) {
      console.log('포커스된 요소:', e.target.tagName, e.target.type, e.target.name || e.target.className);
    });
  });

  /* 7. [결제내역]데이트피커 */
  // 시작일과 종료일 선택 필드
  let startDateInput = $(".dates").eq(0);
  let endDateInput = $(".dates").eq(1);
  // 공통 옵션
  let dateOptions = {
    changeMonth: true,
    changeYear: true,
    dateFormat: "yy-mm-dd",
    showOtherMonths: true,// 날짜 형식 설정
    showMonthAfterYear: true, // 한국식 년도-월 표시
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], // 요일 한글화
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월 한글화
    defaultDate: new Date(),
    beforeShow: function () {
      setTimeout(() => {
        formatYearOptions();
      }, 0);
    },
    onChangeMonthYear: function () {
      setTimeout(() => {
        formatYearOptions();
      }, 0);
    }
  };
  // 시작일 datepicker
  startDateInput.datepicker({
    ...dateOptions,
    onSelect: function(selectedDate) {
      // 시작일이 선택되면 종료일의 최소 날짜를 시작일로 설정
      endDateInput.datepicker("option", "minDate", selectedDate);
    }
  });
  // 종료일 datepicker
  endDateInput.datepicker({
    ...dateOptions,
    onSelect: function(selectedDate) {
      // 종료일이 선택되면 시작일의 최대 날짜를 종료일로 설정
      startDateInput.datepicker("option", "maxDate", selectedDate);
    }
  });

  /* 8. [결제내역]테이블 rowspan 존재시 hover색상 지정 */
  const tables = document.querySelectorAll('.custom-table[data-table="rowspan-ver"]');
  tables.forEach(table => {
    // 해당 테이블 내의 rowspan이 있는 모든 td 찾기
    const rowspanCells = table.querySelectorAll('td[rowspan]');

    rowspanCells.forEach(cell => {
      const rowspan = parseInt(cell.getAttribute('rowspan'));
      const parentRow = cell.closest('tr');
      const rows = [parentRow];

      // rowspan 값만큼 다음 행들 찾기
      let nextRow = parentRow.nextElementSibling;
      for (let i = 1; i < rowspan; i++) {
        if (nextRow) {
          rows.push(nextRow);
          nextRow = nextRow.nextElementSibling;
        }
      }

      // 모든 관련 행에 이벤트 리스너 추가
      rows.forEach(row => {
        row.addEventListener('mouseover', function() {
          // 모든 관련 행에 hover 클래스 추가
          rows.forEach(r => r.classList.add('table-row-hover'));
        });

        row.addEventListener('mouseout', function() {
          // 모든 관련 행에서 hover 클래스 제거
          rows.forEach(r => r.classList.remove('table-row-hover'));
        });
      });
    });
  });

  /* 9. [공통] 테이블 체크박스 존재시 클릭하면 전체 선택 */
  $('.custom-table').each(function () {
    const $table = $(this);
    const $headCheckbox = $table.find('thead input[type="checkbox"]');

    // 헤더 체크박스 클릭 시, 해당 테이블 tbody에서 보이는 체크박스만 체크/해제
    $headCheckbox.on('change', function () {
      const isChecked = $(this).is(':checked');
      $table.find('tbody input[type="checkbox"]:visible').prop('checked', isChecked);
    });

    // tbody 체크박스 상태 변경 시, 보이는 체크박스 기준으로 전체 체크 여부 판단
    $table.find('tbody input[type="checkbox"]').on('change', function () {
      const $visibleCheckboxes = $table.find('tbody input[type="checkbox"]:visible');
      const allChecked = $visibleCheckboxes.length === $visibleCheckboxes.filter(':checked').length;
      $headCheckbox.prop('checked', allChecked);
    });
  });

  /* 11. [결제내역] 주민등록번호 */
  // 입력 필드와 키패드 요소 가져오기
  const inputField = document.getElementById('input-field');
  const numberButtons = document.querySelectorAll('.key.num');
  const deleteButton = document.getElementById('deleteKey');
  const clearButton = document.getElementById('clearKey');

  let inputValues = ''; // 입력된 값을 추적 (사용자가 직접 보는 값)

  // 숫자 버튼 클릭 이벤트
  numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (inputValues.length >= 7) return; // 7자리 제한
      const value = button.dataset.value; // 클릭된 버튼의 실제 값 (사용하진 않음)

      // 사용자 입력값 업데이트
      inputValues += value;

      // 랜덤 버튼 활성화 효과
      activateRandomButton();

      // 입력 필드 업데이트 (최신값 설정)
      inputField.value = inputValues.replace(/./g, '*'); // 입력된 값은 *로 표시
    });
  });

  // 삭제 버튼 이벤트
  deleteButton.addEventListener('click', () => {
    inputValues = inputValues.slice(0, -1); // 마지막 문자 제거
    inputField.value = inputValues.replace(/./g, '*'); // 수정된 값 반영
  });

  // 키보드로 눌렀을때 팝업창 열기
  const idcardLicense = document.getElementById('input-field');
  idcardLicense.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // 기본 스크롤/서브밋 방지
      showModal('modal-virtualKeyboard', {
        absolute: true,
        triggerElement: e.currentTarget,
      });
    }
  });

})
