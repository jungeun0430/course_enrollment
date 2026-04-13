/* 기능: 탭 함수 */
class TabManager {
    constructor(options = {}) {
        this.isMobile = window.innerWidth <= 767;
        this.tabSets = new Map();
        this.observers = new Map();
        this.tabSetSeq = 0;
        this.isPointerInteracting = false;

        this.options = {
            onTabChange: null,
            tabActions: {},
            ...options
        };

        this.handleResize = this.handleResize.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);

        this.init();

        window.addEventListener('resize', this.handleResize);
        document.addEventListener('click', this.handleDocumentClick);
    }

    handleResize() {
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

                this.updateTabindexes(wrap);
            }
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.updateHeight();
            });
        });
    }

    handleDocumentClick(e) {
        if (!this.isMobile) return;

        document.querySelectorAll('.tab-wrap[data-tab="fraternal"]').forEach(wrap => {
            const firstDepth = wrap.querySelector('.first-depth');
            if (!firstDepth) return;

            if (!wrap.contains(e.target)) {
                firstDepth.classList.remove('opened');
                this.updateTabindexes(wrap);
            }
        });
    }

    getTabSetId(wrap) {
        if (!wrap.dataset.tabSetId) {
            this.tabSetSeq += 1;
            wrap.dataset.tabSetId = `tab-set-${this.tabSetSeq}`;
        }
        return wrap.dataset.tabSetId;
    }

    setOriginIndex(firstDepth) {
        Array.from(firstDepth.children).forEach((li, index) => {
            li.dataset.tabOriginIndex = String(index);
        });
    }

    getOriginalIndex(tabItem, fallbackList = []) {
        const originIndex = tabItem?.dataset?.tabOriginIndex;
        if (originIndex !== undefined) {
            return Number(originIndex);
        }
        return fallbackList.indexOf(tabItem);
    }

    saveOriginalOrder(wrap, firstDepth) {
        if (!firstDepth) return;

        this.setOriginIndex(firstDepth);

        const id = this.getTabSetId(wrap);

        if (!this.tabSets.has(id)) {
            this.tabSets.set(id, {
                originalOrder: Array.from(firstDepth.children).map(li => li.cloneNode(true))
            });
        }
    }

    restoreOriginalOrder(wrap) {
        const id = this.getTabSetId(wrap);
        const tabSetData = this.tabSets.get(id);
        const firstDepth = wrap.querySelector('.first-depth');

        if (!tabSetData || !tabSetData.originalOrder || !firstDepth) return;
        if (wrap.getAttribute('data-tab') !== 'fraternal') return;

        const currentActiveItem = wrap.querySelector('.first-depth > li.active');
        const currentActiveOriginIndex = currentActiveItem
            ? currentActiveItem.dataset.tabOriginIndex
            : null;

        firstDepth.innerHTML = '';

        tabSetData.originalOrder.forEach(li => {
            const newLi = li.cloneNode(true);
            newLi.classList.remove('active');

            const tabBox = newLi.querySelector('.tab-box');
            if (tabBox) {
                tabBox.style.display = 'none';
            }

            firstDepth.appendChild(newLi);
        });

        if (currentActiveOriginIndex !== null) {
            const restoredActiveItem = firstDepth.querySelector(
                `li[data-tab-origin-index="${currentActiveOriginIndex}"]`
            );

            if (restoredActiveItem) {
                restoredActiveItem.classList.add('active');

                const tabBox = restoredActiveItem.querySelector('.tab-box');
                if (tabBox) {
                    tabBox.style.display = 'block';
                }
            }
        } else {
            const firstItem = firstDepth.querySelector('li');
            if (firstItem) {
                firstItem.classList.add('active');
                const tabBox = firstItem.querySelector('.tab-box');
                if (tabBox) {
                    tabBox.style.display = 'block';
                }
            }
        }

        this.updateTabindexes(wrap);
        this.updateHeight();
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

        if (wrap.dataset.tabEventsAttached === 'true') return;

        const tabType = wrap.getAttribute('data-tab');

        const markPointerInteracting = (e) => {
            if (e.target.closest('.tab')) {
                this.isPointerInteracting = true;
            }
        };

        const resetPointerInteracting = () => {
            this.isPointerInteracting = false;
        };

        firstDepth.addEventListener('pointerdown', markPointerInteracting);
        firstDepth.addEventListener('mousedown', markPointerInteracting);
        firstDepth.addEventListener('pointerup', resetPointerInteracting);
        firstDepth.addEventListener('mouseup', resetPointerInteracting);
        firstDepth.addEventListener('pointercancel', resetPointerInteracting);
        firstDepth.addEventListener('mouseleave', resetPointerInteracting);

        firstDepth.addEventListener('click', (e) => {
            const tab = e.target.closest('.tab');
            if (!tab || !firstDepth.contains(tab)) {
                resetPointerInteracting();
                return;
            }

            if (tabType === 'fraternal' && this.isMobile) {
                if (firstDepth.classList.contains('opened')) {
                    this.activateTab(tab, tabType);
                    firstDepth.classList.remove('opened');
                    this.updateTabindexes(wrap);

                    setTimeout(() => {
                        tab.focus();
                    }, 0);
                } else {
                    firstDepth.classList.add('opened');
                    this.updateTabindexes(wrap);
                }
            } else {
                this.activateTab(tab, tabType);
            }

            resetPointerInteracting();
        });

        firstDepth.addEventListener('focusin', (e) => {
            const tab = e.target.closest('.tab');
            if (!tab || !firstDepth.contains(tab)) return;

            // 클릭/터치로 인해 발생한 focus는 click에서 이미 처리하므로 무시
            if (this.isPointerInteracting) return;

            // 원본 동작 유지:
            // fraternal + mobile 에서는 focus만으로는 선택되지 않음
            if (tabType !== 'fraternal' || !this.isMobile) {
                this.activateTab(tab, tabType);
            }
        });

        if (tabType === 'fraternal') {
            this.updateTabindexes(wrap);

            const observerKey = this.getTabSetId(wrap);
            const prevObserver = this.observers.get(observerKey);
            if (prevObserver) {
                prevObserver.disconnect();
            }

            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === 'attributes' &&
                        mutation.attributeName === 'class' &&
                        mutation.target === firstDepth
                    ) {
                        this.updateTabindexes(wrap);
                    }
                });
            });

            observer.observe(firstDepth, { attributes: true });
            this.observers.set(observerKey, observer);
        }

        wrap.dataset.tabEventsAttached = 'true';
    }

    updateTabindexes(wrap) {
        const firstDepth = wrap.querySelector('.first-depth');
        if (!firstDepth) return;

        const tabType = wrap.getAttribute('data-tab');
        if (tabType !== 'fraternal' || !this.isMobile) return;

        const isOpened = firstDepth.classList.contains('opened');
        const tabs = wrap.querySelectorAll('.first-depth > li .tab');

        if (isOpened) {
            tabs.forEach(tab => {
                tab.setAttribute('tabindex', '0');
            });
        } else {
            tabs.forEach(tab => {
                const isActive = tab.closest('li').classList.contains('active');
                tab.setAttribute('tabindex', isActive ? '0' : '-1');
            });
        }
    }

    init() {
        const tabWraps = document.querySelectorAll('.tab-wrap');

        tabWraps.forEach((wrap) => {
            const tabType = wrap.getAttribute('data-tab');
            const firstDepth = wrap.querySelector('.first-depth');
            if (!firstDepth) return;

            this.saveOriginalOrder(wrap, firstDepth);

            const tabs = wrap.querySelectorAll('.first-depth > li .tab');
            if (tabs.length <= 1) {
                firstDepth.classList.add('only');
            } else {
                firstDepth.classList.remove('only');
            }

            const tabBoxes = wrap.querySelectorAll('.tab-box');
            tabBoxes.forEach(box => {
                box.style.display = 'none';
            });

            let activeItem = wrap.querySelector('.first-depth > li.active');
            if (!activeItem) {
                activeItem = wrap.querySelector('.first-depth > li');
                if (activeItem) {
                    activeItem.classList.add('active');
                }
            }

            if (activeItem) {
                const activeTabBox = activeItem.querySelector('.tab-box');
                if (activeTabBox) {
                    activeTabBox.style.display = 'block';
                }

                if (tabType === 'fraternal' && this.isMobile) {
                    firstDepth.insertBefore(activeItem, firstDepth.firstChild);
                }
            }

            this.attachEventListeners(wrap);
            this.updateTabindexes(wrap);
        });

        this.updateHeight();
    }

    activateTab(selectedTab, tabType) {
        const wrap = selectedTab.closest('.tab-wrap');
        if (!wrap) return;

        const firstDepth = wrap.querySelector('.first-depth');
        if (!firstDepth) return;

        const allTabItems = Array.from(wrap.querySelectorAll('.first-depth > li'));
        const activeTabItem = selectedTab.closest('li');
        if (!activeTabItem) return;

        tabType = tabType || wrap.getAttribute('data-tab');

        const currentActiveItem = wrap.querySelector('.first-depth > li.active');
        const isSameTab = currentActiveItem === activeTabItem;

        if (!isSameTab) {
            allTabItems.forEach(tabItem => {
                tabItem.classList.remove('active');

                const tabBox = tabItem.querySelector('.tab-box');
                if (tabBox) {
                    tabBox.style.display = 'none';
                }
            });

            activeTabItem.classList.add('active');

            const activeTabBox = activeTabItem.querySelector('.tab-box');
            if (activeTabBox) {
                activeTabBox.style.display = 'block';
            }
        }

        const index = this.getOriginalIndex(activeTabItem, allTabItems);

        if (tabType === 'fraternal' && this.isMobile) {
            const parent = activeTabItem.parentNode;
            if (parent && parent.firstChild !== activeTabItem) {
                parent.insertBefore(activeTabItem, parent.firstChild);
            }
        }

        this.updateTabindexes(wrap);

        setTimeout(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.updateHeight();
                });
            });

            // 같은 탭을 다시 클릭/포커스한 경우 콜백 중복 실행 방지
            if (isSameTab) return;

            const payload = {
                index,
                wrap,
                activeTabItem,
                selectedTab,
                tabType,
                isMobile: this.isMobile
            };

            if (typeof this.options.onTabChange === 'function') {
                this.options.onTabChange(payload);
            }

            const action = this.options.tabActions[index];
            if (typeof action === 'function') {
                action(payload);
            }
        }, 0);
    }

    getOuterHeight(el) {
        const style = window.getComputedStyle(el);
        const marginTop = parseFloat(style.marginTop) || 0;
        const marginBottom = parseFloat(style.marginBottom) || 0;

        return el.getBoundingClientRect().height + marginTop + marginBottom;
    }

    updateHeight(modalId = null) {
        const tabWrapSelector = modalId ? `#${modalId} .tab-wrap` : '.tab-wrap';
        const tabWraps = document.querySelectorAll(tabWrapSelector);

        tabWraps.forEach(wrap => {
            const firstDepth = wrap.querySelector('.first-depth');
            const activeTabBox = wrap.querySelector('.first-depth > li.active .tab-box');

            if (!firstDepth) return;

            if (!activeTabBox) {
                wrap.style.height = '';
                return;
            }

            const tabHeaderHeight = this.getOuterHeight(firstDepth);
            const tabBoxHeight = this.getOuterHeight(activeTabBox);

            wrap.style.height = `${Math.ceil(tabHeaderHeight + tabBoxHeight)}px`;
        });
    }

    destroy() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('click', this.handleDocumentClick);

        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
        this.tabSets.clear();
    }
}