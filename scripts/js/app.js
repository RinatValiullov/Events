"use strict";
// const applyButton = document.querySelector('.apply-filter') as HTMLButtonElement;
// const inputDateFilter = document.querySelector('#date-filter') as HTMLInputElement;
// applyButton.addEventListener('click', e => {
//   let t1 = document.querySelectorAll('.event-characteristics time')[0] as HTMLTimeElement;
//   console.log(parseInt(inputDateFilter.value.substr(8, 2), 10) === parseInt(t1.dateTime.substr(0, 2), 10));
// });
const events = document.querySelectorAll('.event');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeFilterWrapper = document.querySelector('.type-filter-wrapper');
// typeFilterWrapper.addEventListener('click', (event) => {
//   const etarget = event.target as HTMLInputElement;
//   if (etarget.tagName !== 'INPUT') {
//     return false;
//   }
//   events.forEach((element) => {
//     let typeEvent = (element as HTMLDivElement).querySelector('.event-type');
//     const filterType = `${etarget.name.substr(0, 1).toUpperCase()}${etarget?.name.substr(1)}`;
//     if (filterType === (typeEvent as HTMLDivElement).innerText) {
//       (typeEvent as HTMLDivElement).innerHTML = ''
//     }
//     // if (etarget.checked) {
//     //   (typeEvent as HTMLDivElement).innerHTML = ''
//     // }
//   })
// })
document.addEventListener('click', event => {
    checkboxes.forEach((checkbox, index) => {
        events.forEach((eventBlock, index) => {
            var _a, _b;
            let typeEvent = eventBlock.querySelector('.event-type');
            let checkboxValue = checkbox.name;
            // eventBlock.classList.remove('hide');
            if (checkbox.checked) {
                if (checkboxValue === ((_a = typeEvent === null || typeEvent === void 0 ? void 0 : typeEvent.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                    eventBlock.classList.remove('hide');
                }
            }
            if (!checkbox.checked) {
                if (checkboxValue === ((_b = typeEvent === null || typeEvent === void 0 ? void 0 : typeEvent.textContent) === null || _b === void 0 ? void 0 : _b.toLowerCase())) {
                    eventBlock.classList.add('hide');
                }
            }
        });
    });
});
