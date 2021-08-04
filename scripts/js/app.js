"use strict";
const applyTypeButton = document.querySelector('.apply-type-filter');
const events = document.querySelectorAll('.event');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
/* Plural type filter */
applyTypeButton.addEventListener('click', event => {
    checkboxes.forEach((checkbox, index) => {
        events.forEach((eventBlock, index) => {
            var _a, _b;
            let typeEvent = eventBlock.querySelector('.event__characteristic-type');
            let checkboxValue = checkbox.name;
            if (checkbox.checked) {
                if (((_a = typeEvent === null || typeEvent === void 0 ? void 0 : typeEvent.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === checkboxValue) {
                    eventBlock.classList.add('hide');
                }
            }
            if (!checkbox.checked) {
                if (((_b = typeEvent === null || typeEvent === void 0 ? void 0 : typeEvent.textContent) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === checkboxValue) {
                    eventBlock.classList.remove('hide');
                }
            }
        });
    });
});
/* Date filter */
const filters = document.querySelectorAll('.date-filter');
const applyDateButton = document.querySelector('.apply-date-filter');
applyDateButton.addEventListener('click', evt => {
    let f_dates = [...filters].reduce((acc, curr) => [...acc, Number(curr.value.split('-').slice(-1))], []);
    console.log('f_dates', f_dates);
    let e_dates = [...events].reduce((acc, curr) => [...acc, Number(curr.querySelector('time').dateTime.split('-').slice(-1))], []);
    console.log('sourse:', e_dates);
    let res_dates = e_dates.filter(date => {
        return (date >= f_dates[0] && date <= f_dates[1]);
    });
    console.log('result:', res_dates);
    events.forEach(block => {
        let blockDiv = block;
        const timeElem = blockDiv.querySelector('time');
        if (!!res_dates.length &&
            !res_dates.includes(+timeElem.dateTime.slice(-2))) {
            blockDiv.classList.add('hide');
        }
    });
});
/* Date filter */
/* Modal */
const modals = document.querySelectorAll('.modal');
const eventDiv = document.querySelector('.event');
const closeModal = document.querySelector('.modal__dialog-close');
modals.forEach(modal => {
    const modalDiv = modal;
    events.forEach(eventDiv => {
        eventDiv.addEventListener('click', event => {
            if (!modalDiv.classList.contains('show') && (eventDiv.dataset['id'] === modalDiv.dataset['modalid'])) {
                modalDiv.classList.add('show');
            }
            else {
                modalDiv.classList.remove('show');
            }
        });
    });
    modalDiv.addEventListener('click', (evt) => {
        const target = evt.target;
        if (target.nodeName === "BUTTON" || target.classList.contains("modal")) {
            if (modalDiv.classList.contains('show')) {
                modalDiv.classList.remove('show');
            }
            else {
                return false;
            }
        }
    });
});
