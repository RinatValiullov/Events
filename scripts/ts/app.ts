const applyButton = document.querySelector('.apply-filter') as HTMLButtonElement;
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

applyButton.addEventListener('click', event => {
  checkboxes.forEach((checkbox, index) => {
    events.forEach((eventBlock, index) => {
      let typeEvent = (eventBlock as HTMLDivElement).querySelector('.event-type');
      let checkboxValue = (checkbox as HTMLInputElement).name;

      if ((checkbox as HTMLInputElement).checked) {
        if (typeEvent?.textContent?.toLowerCase() === checkboxValue) {
          (eventBlock as HTMLDivElement).classList.add('hide');
        }
      }

      if (!(checkbox as HTMLInputElement).checked) {
        if (typeEvent?.textContent?.toLowerCase() === checkboxValue) {
          (eventBlock as HTMLDivElement).classList.remove('hide');
        }
      }
    });
  });
});


/* Modal */

const modal = document.querySelector('.modal') as HTMLDivElement;
const eventDiv = document.querySelector('.event') as HTMLDivElement;
const closeModal = document.querySelector('.modal__dialog-close') as HTMLButtonElement;

events.forEach((eventDiv, index) => {

  eventDiv.addEventListener('click', e => {
    if (!modal.classList.contains('show')) {
      modal.classList.add('show');
    } else {
      modal.classList.remove('show');
    }
  });

})


modal.addEventListener('click', (evt) => {
  const target = evt.target as HTMLButtonElement;

  if (target.nodeName === "BUTTON" || target.classList.contains("modal")) {

    if (modal.classList.contains('show')) {
      modal.classList.remove('show');
    } else {
      return false;
    }

  }

});
