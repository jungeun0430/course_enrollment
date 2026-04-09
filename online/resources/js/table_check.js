/* 기능: 테이블 체크박스 연동(pc/mo 동시에 작동되도록) */
document.addEventListener('change', function (e) {
    const target = e.target;
    const group = target.closest('.apply-table-group');

    if (!group) return;

    const itemCheckboxes = group.querySelectorAll('.js-check-item');
    const allCheckboxes = group.querySelectorAll('.js-check-all');

    // 전체선택
    if (target.matches('.js-check-all')) {
        const isChecked = target.checked;

        itemCheckboxes.forEach(function (checkbox) {
            checkbox.checked = isChecked;
        });

        allCheckboxes.forEach(function (checkbox) {
            checkbox.checked = isChecked;
        });

        return;
    }

    // 개별선택
    if (target.matches('.js-check-item')) {
        const itemId = target.dataset.itemId;
        const isChecked = target.checked;

        // 같은 item-id PC/MO 동기화
        const sameItems = group.querySelectorAll(
            '.js-check-item[data-item-id="' + itemId + '"]'
        );

        sameItems.forEach(function (checkbox) {
            checkbox.checked = isChecked;
        });

        // 전체선택 상태 갱신
        const itemStateMap = {};
        itemCheckboxes.forEach(function (checkbox) {
            itemStateMap[checkbox.dataset.itemId] = checkbox.checked;
        });

        const allChecked =
            Object.keys(itemStateMap).length > 0 &&
            Object.values(itemStateMap).every(function (checked) {
                return checked;
            });

        allCheckboxes.forEach(function (checkbox) {
            checkbox.checked = allChecked;
        });
    }
});