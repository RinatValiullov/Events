"use strict";
var applyButton = document.querySelector('.apply-filter');
var inputDateFilter = document.querySelector('#date-filter');
// applyButton.addEventListener('click', e => {
//   let t1 = document.querySelectorAll('.event-characteristics time')[0] as HTMLTimeElement;
//   console.log(parseInt(inputDateFilter.value.substr(8, 2), 10) === parseInt(t1.dateTime.substr(0, 2), 10));
// });
var events = document.querySelectorAll('.event');
var typeFilterWrapper = document.querySelector('.type-filter-wrapper');
typeFilterWrapper.addEventListener('click', function (event) {
    var etarget = event.target;
    if (etarget.tagName !== 'INPUT') {
        return false;
    }
    events.forEach(function (element) {
        var typeEvent = element.querySelector('.event-type');
        var filterType = "" + etarget.name.substr(0, 1).toUpperCase() + (etarget === null || etarget === void 0 ? void 0 : etarget.name.substr(1));
        if (filterType === typeEvent.innerText) {
            console.log('+');
        }
    });
});
