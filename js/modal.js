var btnOpenModal = document.querySelector('.js-open-modal'),
    modal = document.querySelector('.modal'),
    modalOverlay = document.querySelector('.modal-overlay'),
    btnCloseModal = modal.querySelector('.modal__close'),
    feedbackForm = modal.querySelector('.feedback-form'),
    feedbackName = feedbackForm.querySelector('[name=name]'),
    feedbackEmail = feedbackForm.querySelector('[name=email]'),
    feedbackMessage = feedbackForm.querySelector('[name=message]'),
    storageFeedbackName = localStorage.getItem('feedbackName');

btnOpenModal.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('modal--opened');
  modalOverlay.classList.add('modal-overlay--opened');

  if (storageFeedbackName) {
    feedbackName.value = storageFeedbackName;
    feedbackEmail.focus();
    handleFloatingLabels(floatingTextFields);
  } else {
    feedbackName.focus();
  }
});

btnCloseModal.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.remove('modal--opened', 'modal--error');
  modalOverlay.classList.remove('modal-overlay--opened');
});

feedbackForm.addEventListener('submit', function(event) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    event.preventDefault();
    modal.classList.remove('modal--error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal--error');
  } else {
    localStorage.setItem('feedbackName', feedbackName.value);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened', 'modal--error');
      modalOverlay.classList.remove('modal-overlay--opened');
    }
  }
});
