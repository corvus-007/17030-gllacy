// 'use strict';

var btnOpenModal = document.querySelector('.js-open-modal'),
     modal = document.querySelector('.modal'),
     modalOverlay = document.querySelector('.modal-overlay'),
     btnCloseModal = modal.querySelector('.modal__close'),
     feedbackForm = modal.querySelector('.feedback-form'),
     feedbackName = feedbackForm.querySelector('[name=name]'),
     feedbackEmail = feedbackForm.querySelector('[name=email]'),
     feedbackMessage = feedbackForm.querySelector('[name=message]'),
     storageFeedbackName = localStorage.getItem('feedbackName'),
     map,
     mapMarker;

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
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened', 'modal--error');
      modalOverlay.classList.remove('modal-overlay--opened');
    }
  }
});


// Yandex map
ymaps.ready(init);

function init() {
  map = new ymaps.Map("contacts-map", {
    center: [59.939327, 30.327901],
    zoom: 16,
    controls: []
  });

  map.behaviors.disable(['scrollZoom']);

  mapMarker = new ymaps.Placemark([59.938657, 30.322982], {
    hintContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.svg',
    iconImageSize: [79, 139],
    iconImageOffset: [-39, -139],
    iconShadow: true,
    iconShadowLayout: 'default#image',
    iconShadowImageHref: 'img/shadow-map-pin.png',
    iconShadowImageSize: [182, 110],
    iconShadowImageOffset: [0, -110]
  });

  map.geoObjects.add(mapMarker);
}
