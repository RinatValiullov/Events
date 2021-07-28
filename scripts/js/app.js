"use strict";
var applyButton = document.querySelector('.apply-filter');
var inputDateFilter = document.querySelector('#date-filter');
applyButton.addEventListener('click', function (e) {
    var t1 = document.querySelectorAll('.event-characteristics time')[0];
    console.log(parseInt(inputDateFilter.value.substr(8, 2), 10) === parseInt(t1.dateTime.substr(0, 2), 10));
});
