const applyButton = document.querySelector('.apply-filter') as HTMLButtonElement;
const inputDateFilter = document.querySelector('#date-filter') as HTMLInputElement;

// applyButton.addEventListener('click', e => {

//   let t1 = document.querySelectorAll('.event-characteristics time')[0] as HTMLTimeElement;

//   console.log(parseInt(inputDateFilter.value.substr(8, 2), 10) === parseInt(t1.dateTime.substr(0, 2), 10));

// });


const events = document.querySelectorAll('.event') as NodeList;
const typeFilterWrapper = document.querySelector('.type-filter-wrapper') as HTMLElement;

typeFilterWrapper.addEventListener('click', (event) => {
  const etarget = event.target as HTMLInputElement;
  if (etarget.tagName !== 'INPUT') {
    return false;
  }

  events.forEach((element) => {
    let typeEvent = (element as HTMLDivElement).querySelector('.event-type');
    const filterType = `${etarget.name.substr(0, 1).toUpperCase()}${etarget?.name.substr(1)}`;
    if (filterType === (typeEvent as HTMLDivElement).innerText) {
      console.log('+')
    }

  })

})
