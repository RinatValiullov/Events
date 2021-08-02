const applyButton = document.querySelector('.apply-filter') as HTMLButtonElement;
const events = document.querySelectorAll('.event') as NodeList;
const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeList;


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
