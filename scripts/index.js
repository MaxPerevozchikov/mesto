import initialCards from './initialCards.js';
import { openPopup, closePopup, defaultCardInput } from './utility.js';
import Cards from './Cards.js';
import FormValidator from './FormValidator.js';
import Card from './Cards.js';


const popupCard = document.querySelector('.popup_card');
const popupNameCard = popupCard.querySelector('.popup__input_type_card-name');
const popupLinkCard = popupCard.querySelector('.popup__input_type_link');

const popupProfile = document.querySelector('.popup_profile');
const nameFormInput = popupProfile.querySelector('.popup__input_type_name');
const descriptionFormInput = popupProfile.querySelector('.popup__input_type_description');
const popupContainerProfile = popupProfile.querySelector('.popup__container');
const popupContainerCard = popupCard.querySelector('.popup__container');
//const popupContainerImageFull = popupFullScreen.querySelector('.popup__container');
const cardTemplate = document.querySelector('#card-template');
const containerCard = document.querySelector('.elements');
//const imageFullScreen = popupFullScreen.querySelector('.popup__image');
//const imageNameFullScreen = popupFullScreen.querySelector('.popup__image-name');
//const submitButtonCard = popupCard.querySelector('.popup__button-save');
const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__edit-btn');
const content = document.querySelector('.content');
const buttonSaveCard = popupContainerCard.querySelector('.popup__button-save');


const validationForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__span_error_visible',
};

const validatorEditForm = new FormValidator(validationForm, popupProfile);
const validatorAddForm = new FormValidator(validationForm, popupCard);

validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

//Profile 
function editProfile(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameFormInput.value;
  subtitleProfile.textContent = descriptionFormInput.value;
  closePopup(popupProfile);
}


// rendering card

function renderCard(item) {
  const newCard = new Card(item, '#card-template');
  const elementCard = newCard.generateCard();

  containerCard.prepend(elementCard);
}
initialCards.reverse().forEach(renderCard);
  


// adding a new card
function addCard(evt) {
  evt.preventDefault();
  renderCard({name: popupNameCard.value, link: popupLinkCard.value});
  closePopup(popupCard);
  buttonSaveCard.classList.remove('popup__button-save_disabled');
  buttonSaveCard.disabled = true;
}

// application on the opening popup profile
buttonProfile.addEventListener('click', function () {
  nameFormInput.value = titleProfile.textContent;
  descriptionFormInput.value = subtitleProfile.textContent;
  openPopup(popupProfile);
});

buttonAddCard.addEventListener('click', function () {
  defaultCardInput(popupNameCard, popupLinkCard);
  openPopup(popupCard);
});

//saving a new card and profile information
popupContainerProfile.addEventListener('submit', editProfile);
popupContainerCard.addEventListener('submit', addCard);
