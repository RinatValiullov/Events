// const applyButton = document.querySelector('.apply-filter') as HTMLButtonElement;
// const inputDateFilter = document.querySelector('#date-filter') as HTMLInputElement;

// applyButton.addEventListener('click', e => {

//   let t1 = document.querySelectorAll('.event-characteristics time')[0] as HTMLTimeElement;

//   console.log(parseInt(inputDateFilter.value.substr(8, 2), 10) === parseInt(t1.dateTime.substr(0, 2), 10));

// });


const events = document.querySelectorAll('.event') as NodeList;
const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeList;
const typeFilterWrapper = document.querySelector('.type-filter-wrapper') as HTMLElement;

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
      let typeEvent = (eventBlock as HTMLDivElement).querySelector('.event-type');
      let checkboxValue = (checkbox as HTMLInputElement).name;
      // eventBlock.classList.remove('hide');
      if ((checkbox as HTMLInputElement).checked) {
        if (checkboxValue === typeEvent?.textContent?.toLowerCase()) {
          (eventBlock as HTMLDivElement).classList.remove('hide');
        }
      }
      if (!(checkbox as HTMLInputElement).checked) {
        if (checkboxValue === typeEvent?.textContent?.toLowerCase()) {
          (eventBlock as HTMLDivElement).classList.add('hide');
        }
      }
    });
  });
})
