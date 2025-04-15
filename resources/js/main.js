/* 함수 주석
* 1. 사이드바
* 2. 상단 글씨크기 변경
* 3. 모달 관련 함수
* 4. 탭 관련 함수
* 5. 수강신청 탭 관련 함수
* 6. 라디오 버튼 핸들러
*  */

/* 1. 사이드바 */


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
        /* 1. 온라인 회원카드 */
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
        /* 1. 온라인 회원카드 */
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
// 현재 열린 모달들을 스택으로 관리
let modalStack = [];

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    // 이미 열린 모달이 있으면 스택에 저장 (z-index 관리)
    const currentOpenModal = document.querySelector('.modal[style*="block"]');
    if (currentOpenModal && currentOpenModal.id !== modalId) {
      // 현재 열린 모달이 있고, 새로 열려는 모달과 다른 경우
      modalStack.push(currentOpenModal.id);
      currentOpenModal.style.zIndex = '10001'; // 기존 모달의 z-index 낮춤
    }

    adjustModalSize(modalId); // 크기 조정 로직 호출
    modal.style.display = 'block'; // 모달 표시
    modal.style.zIndex = '10002'; // 새 모달을 최상위로 표시
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
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
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
    this.isMobile = window.innerWidth <= 767;
    this.originalOrder = null;  // 초기 순서를 저장할 변수
    this.init();

    window.addEventListener('resize', () => {
      const wasMobile = this.isMobile;  // 현재 상태 저장
      this.isMobile = window.innerWidth <= 767;  // 새로운 상태 설정

      if (!wasMobile && this.isMobile) {
        // 데스크톱에서 모바일로 전환될 때만 active 탭을 상단으로
        this.moveActiveTabToTop();
      } else if (wasMobile && !this.isMobile) {
        // 모바일에서 데스크톱으로 전환될 때는 원래 순서로 복원
        this.restoreOriginalOrder();
      }

      this.updateHeight();
    });

  }
  // 초기 순서 저장
  saveOriginalOrder(firstDepth) {
    if (!this.originalOrder) {
      this.originalOrder = Array.from(firstDepth.children).map(li => li.cloneNode(true));
    }
  }

  // 원래 순서로 복원
  restoreOriginalOrder() {
    if (this.originalOrder) {
      document.querySelectorAll('.tab-wrap').forEach(wrap => {
        // 현재 활성화된 탭 찾기
        const currentActiveTab = wrap.querySelector('.first-depth > li.active .tab');
        const currentActiveTabId = currentActiveTab ? currentActiveTab.textContent.trim() : null;

        const firstDepth = wrap.querySelector('.first-depth');
        firstDepth.innerHTML = '';

        // 원래 순서로 복원하지만 active 클래스는 모두 제거
        this.originalOrder.forEach(li => {
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
      });

      this.reattachEventListeners();
      this.updateHeight(); // 높이 업데이트 추가
    }
  }

  // 활성 탭을 상단으로 이동하는 메서드 추가
  moveActiveTabToTop() {
    document.querySelectorAll('.tab-wrap').forEach(wrap => {
      const firstDepth = wrap.querySelector('.first-depth');
      const activeTab = wrap.querySelector('.first-depth > li.active');
      if (activeTab && this.isMobile) {
        firstDepth.insertBefore(activeTab, firstDepth.firstChild);
      }
    });
  }

// 이벤트 리스너 다시 연결하는 메서드
  attachEventListeners(wrap) {
    const firstDepth = wrap.querySelector('.first-depth');
    const tabs = wrap.querySelectorAll('.first-depth > li .tab');

    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (this.isMobile) {
          if (firstDepth.classList.contains('opened')) {
            this.activateTab(tab);
            firstDepth.classList.remove('opened');
          } else {
            firstDepth.classList.add('opened');
          }
        } else {
          this.activateTab(tab);
        }
      });

      tab.addEventListener('focus', () => {
        if (!this.isMobile) {
          this.activateTab(tab);
        }
      });
    });
  }

// 모든 탭의 이벤트 리스너 다시 연결
  reattachEventListeners() {
    document.querySelectorAll('.tab-wrap').forEach(wrap => {
      this.attachEventListeners(wrap);
    });
  }

  init() {
    const tabWraps = document.querySelectorAll('.tab-wrap');

    tabWraps.forEach(wrap => {
      const firstDepth = wrap.querySelector('.first-depth');
      // 초기 순서 저장
      this.saveOriginalOrder(firstDepth);

      const tabs = wrap.querySelectorAll('.first-depth > li .tab');
      const tabBoxes = wrap.querySelectorAll('.tab-box');

      // 초기에 모든 tab-box 숨기기
      tabBoxes.forEach(box => box.style.display = 'none');

      // 활성 탭의 tab-box 보이기
      const activeTabBox = wrap.querySelector('.first-depth > li.active .tab-box');
      if (activeTabBox) {
        activeTabBox.style.display = 'block';
        // 모바일일 경우 초기에 활성 탭을 최상단으로 이동
        if (this.isMobile) {
          const activeTab = activeTabBox.closest('li');
          firstDepth.insertBefore(activeTab, firstDepth.firstChild);
        }
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

/* 5. 수강신청 관련 탭 함수 */
function openTab() {
  const tab = document.querySelector('.f-modal');
  tab.classList.add('active');
  document.body.classList.add('no-scroll');

// 첫 번째 탭 활성화하고 나머지 탭은 비활성화
  const allTabs = tab.querySelectorAll('.check-scroll > ul > li'); // 모든 탭 선택
  if (allTabs.length > 0) {
    // 모든 탭에서 active 제거
    allTabs.forEach((tabItem, index) => {
      // 첫 번째가 아닌 탭은 active 클래스 제거
      if (index > 0) {
        tabItem.classList.remove('active');

        // 각 탭의 버튼에서도 active 클래스 제거
        const btn = tabItem.querySelector('.check-tab-btn');
        if (btn) {
          btn.classList.remove('active');
        }

        // 콘텐츠 높이 초기화 (필요한 경우)
        const content = tabItem.querySelector('.sub-tab-content');
        if (content) {
          content.style.height = '';
        }
      }
    });

    // 첫 번째 탭만 활성화
    allTabs[0].classList.add('active');

    // 첫 번째 탭의 버튼도 활성화
    const firstBtn = allTabs[0].querySelector('.check-tab-btn');
    if (firstBtn) {
      firstBtn.classList.add('active');
    }

    // 첫 번째 탭의 내용을 표시 (모바일인 경우)
    const firstContent = allTabs[0].querySelector('.sub-tab-content');
    if (firstContent && window.innerWidth <= 768) { // 모바일 환경 확인
      firstContent.style.height = 'calc(80vh - 96px)';
      allTabs[0].style.height = 'auto';
    }
  }

}

/* 6. 라디오 버튼 핸들러 */
// 라디오 버튼 키보드 이벤트 핸들러
function handleRadioKeyDown(e) {
  // 해당 라디오 버튼이 속한 그룹의 모든 라디오 버튼 찾기
  const name = e.target.name;
  const group = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`));
  const currentIndex = group.indexOf(e.target);

  // 키 이벤트에 따라 다음/이전 라디오 버튼으로 이동
  switch (e.key) {
    case 'ArrowLeft':
    case 'ArrowUp':
      e.preventDefault();
      // 이전 버튼으로 이동 (첫 번째면 마지막으로)
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : group.length - 1;
      group[prevIndex].focus();
      group[prevIndex].checked = true;
      break;

    case 'ArrowRight':
    case 'ArrowDown':
      e.preventDefault();
      // 다음 버튼으로 이동 (마지막이면 첫 번째로)
      const nextIndex = currentIndex < group.length - 1 ? currentIndex + 1 : 0;
      group[nextIndex].focus();
      group[nextIndex].checked = true;
      break;
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
    if (isActive) {
      // 닫기
      content.style.height = '0';
      tabItem.style.height = `${this.BUTTON_HEIGHT}px`;
      tabItem.classList.remove('active');
      clickedBtn.classList.remove('active');
      // 텍스트 '닫힘'으로 변경
      if (visibilityText) {
        visibilityText.textContent = '열림';
      }
    } else {
      // 열기 - auto 높이 사용
      // 먼저 높이를 계산하기 위해 임시로 auto 설정
      content.style.height = 'auto';
      const autoHeight = content.offsetHeight;

      // 애니메이션을 위해 0으로 다시 설정한 후 자연스럽게 전환
      content.style.height = '0';

      // reflow 강제
      content.offsetHeight;

      // transition 추가 후 높이 설정
      content.style.transition = 'height 0.3s ease-in-out';
      content.style.height = `${autoHeight}px`;
      tabItem.style.height = `${autoHeight + this.BUTTON_HEIGHT}px`;

      // 모든 항목 표시
      this.showAllItemsMobile(content);

      tabItem.classList.add('active');
      clickedBtn.classList.add('active');
      // 텍스트 '열림'으로 변경
      if (visibilityText) {
        visibilityText.textContent = '열림';
      }

      // transition 종료 후 height를 auto로 설정 (내용이 동적으로 변경될 수 있으므로)
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
/*-------------------------------*/
/* [실행문] */
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
  // 상태 초기화 함수
  function removeActiveClasses() {
    $dimOverlay.removeClass('active');
    $sidebar.removeClass('active');
    if (!document.querySelector('.modal[style*="display: block"]')) {
      $('body').removeClass('no-scroll'); // 열린 모달이 없을 때만 스크롤 활성화
    }

  }

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
    const body = document.querySelector('body');

    for (let modal of modals) {
      // 클릭된 요소가 현재 모달 요소인 경우
      if (event.target === modal) {
        // 해당 모달 숨기기
        modal.style.display = 'none';
        body.classList.remove('no-scroll'); // 스크롤 가능하게

        // 열린 팝업 이름과 연결된 추가 로직 처리
        hideModal(openModalName);
      }
    }
  };

  /* 6. 라디오 버튼 핸들러 */
  // 모든 라디오 버튼에 대한 키보드 접근성 향상 (name 속성 독립적)
// 문서 로드 완료 후 실행
// 모든 라디오 버튼에 tabindex 추가하여 포커스 가능하게 만들기
// 라디오 버튼의 접근성 및 포커스 문제 해결
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



})
