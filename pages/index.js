let content = document.querySelector('.content');
let contentButton = content.querySelectorAll('button');

let titleProfile = document.querySelector('.profile__title');
let subtitleProfile = document.querySelector('.profile__subtitle');
let buttonProfile = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__button-close');
let formItem = document.querySelector('.popup__form');
let nameFormInput = document.querySelector('.popup__input');
let descriptionFormInput = document.querySelector('.popup__input-info');
let buttonSave = document.querySelector('.popup__button-save');

function popupOpen() {
  popup.classList.toggle('popup__opened');
  nameFormInput.value = titleProfile.textContent;
  descriptionFormInput.value = subtitleProfile.textContent; 
}

function popupClose() {
  popup.classList.toggle('popup__opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  if (
    !nameFormInput.value ||
    !descriptionFormInput.value ||
    nameFormInput.value.trim() === '' ||
    descriptionFormInput.value.trim() === ''
  ) {
    alert('Введите информацию.');
  } else {
    titleProfile.textContent = nameFormInput.value;
    subtitleProfile.textContent = descriptionFormInput.value;
    popupClose();
  }
}

buttonProfile.addEventListener('click', popupOpen);
formItem.addEventListener('submit', formSubmitHandler);
buttonClose.addEventListener('click', popupClose);



