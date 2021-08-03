const applyTypeButton = document.querySelector('.apply-type-filter') as HTMLButtonElement;
const events = document.querySelectorAll('.event') as NodeList;
const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeList;


/* Plural type filter */

applyTypeButton.addEventListener('click', event => {
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

/* Date filter */

const filters = document.querySelectorAll('.date-filter');
const applyDateButton = document.querySelector('.apply-date-filter') as HTMLButtonElement;

applyDateButton.addEventListener('click', evt => {

  let f_dates: number[] = [...filters].reduce((acc, curr) => [...acc, Number(curr.value.split('-').slice(-1))], []);
  console.log('f_dates', f_dates);


  // let e_dates: number[] = [...events].reduce((acc, curr) => [...acc, Number(curr.firstElementChild.dateTime.split('-').slice(-1))], []);
  let e_dates: number[] = [...events].reduce((acc, curr) => [...acc, Number(curr.querySelector('time').dateTime.split('-').slice(-1))], []);
  console.log('sourse:', e_dates);

  let res_dates = e_dates.filter(date => {
    return (date >= f_dates[0] && date <= f_dates[1]);
  });
  console.log('result:', res_dates);

  events.forEach(block => {
    let blockDiv = block as HTMLDivElement;
    const timeElem = blockDiv.querySelector('time') as HTMLTimeElement;
    if (
      !!res_dates.length &&
      !res_dates.includes(+timeElem.dateTime.slice(-2))
    ) {
      blockDiv.classList.add('hide');
    }
  });

});

/* Date filter */


/* Modal */

const modals = document.querySelectorAll('.modal') as NodeList;
const eventDiv = document.querySelector('.event') as HTMLDivElement;
const closeModal = document.querySelector('.modal__dialog-close') as HTMLButtonElement;


modals.forEach(modal => {

  const modalDiv = modal as HTMLDivElement;

  events.forEach(eventDiv => {

    eventDiv.addEventListener('click', event => {
      if (!modalDiv.classList.contains('show') && ((eventDiv as HTMLDivElement).dataset['id'] === modalDiv.dataset['modalid'])) {
        modalDiv.classList.add('show');
      } else {
        modalDiv.classList.remove('show');
      }
    });

  })

  modalDiv.addEventListener('click', (evt) => {
    const target = evt.target as HTMLButtonElement;

    if (target.nodeName === "BUTTON" || target.classList.contains("modal")) {

      if (modalDiv.classList.contains('show')) {
        modalDiv.classList.remove('show');
      } else {
        return false;
      }

    }

  });



})
