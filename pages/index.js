let content = document.querySelector('.content');
let contentButton = content.querySelectorAll('button');

let titleProfile = document.querySelector('.profile__title');
let subtitleProfile = document.querySelector('.profile__subtitle');
let buttonProfile = document.querySelector('.profile__edit_button');

let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__button_close');
let formItem = document.querySelector('.popup__form');
let nameFormInput = document.querySelector('.popup__input');
let descriptionFormInput = document.querySelector('.popup__input_info');
let buttonSave = document.querySelector('.popup__button_save');

function popupOpen() {
  popup.classList.toggle('popup__opened');
  nameFormInput.value = titleProfile.textContent;
  descriptionFormInput.value = subtitleProfile.textContent; 
}

function popupClose() {
  popup.classList.toggle('popup__opened');
}

buttonProfile.addEventListener('click', popupOpen);
buttonClose.addEventListener('click', popupClose);


