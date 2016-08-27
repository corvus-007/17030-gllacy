// 'use strict';

var btnOpenModal = document.querySelector('.js-open-modal');
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal-overlay');
var btnCloseModal = modal.querySelector('.modal__close');
var feedbackForm = modal.querySelector('.feedback-form');
var feedbackName = feedbackForm.querySelector('[name=name]');
var feedbackEmail = feedbackForm.querySelector('[name=email]');
var feedbackMessage = feedbackForm.querySelector('[name=message]');
var storageFeedbackName = localStorage.getItem('feedbackName');



btnOpenModal.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('modal--opened');
  modalOverlay.classList.add('modal-overlay--opened');

  if (storageFeedbackName) {
    feedbackName.value = storageFeedbackName;
    feedbackEmail.focus();
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

window.addEventListener('keyup', function(event) {
  console.log(event);
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened', 'modal--error');
      modalOverlay.classList.remove('modal-overlay--opened');
    }
  }
});
