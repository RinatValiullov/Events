const applyButton = document.querySelector('.apply-filter') as HTMLButtonElement;
const inputDateFilter = document.querySelector('#date-filter') as HTMLInputElement;

applyButton.addEventListener('click', e => {

  let t1 = document.querySelectorAll('.event-characteristics time')[0] as HTMLTimeElement;

  console.log(parseInt(inputDateFilter.value.substr(8, 2), 10) === parseInt(t1.dateTime.substr(0, 2), 10));

});
