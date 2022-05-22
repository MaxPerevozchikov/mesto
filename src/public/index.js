import '../public/index.css';


import initialCards from '../components/initialCards.js';
import { openPopup, closePopup, defaultCardInput } from '../components/utility.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';

const popupCard = document.querySelector('.popup_card');
const popupNameCard = popupCard.querySelector('.popup__input_type_card-name');
const popupLinkCard = popupCard.querySelector('.popup__input_type_link');

const popupProfile = document.querySelector('.popup_profile');
const nameFormInput = popupProfile.querySelector('.popup__input_type_name');
const descriptionFormInput = popupProfile.querySelector('.popup__input_type_description');
const popupContainerCard = popupCard.querySelector('.popup__container');
const popupContainerProfile = popupProfile.querySelector('.popup__container');
const containerCard = document.querySelector('.elements');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__edit-btn');
const buttonSaveCard = popupContainerCard.querySelector('.popup__button-save');


const validationForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__span_error_visible',
};



//Создание экземпляров классов Popup-------------

const popupWithImage = new PopupWithImage('.popup_full-screen');
popupWithImage.setEventListeners();

const popupWithForm = new PopupWithForm('.popup_profile', (data) => {
  userInfo.setUserInfo(data);
});
popupWithForm.setEventListeners();


const popupFormAddCard = new PopupWithForm('.popup_card', (data) => {
  renderCard(data);
});
popupFormAddCard.setEventListeners();

//-------создание экземпляра класса UserInfo-----------

const userInfo = new UserInfo({
  selectorName: '.profile__title', 
  selectorDescription: '.profile__subtitle'
});



//------ создание экземпляра класса Section------

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard
  },
  '.elements'
)
section.renderItems();


function renderCard(item) {
  const newCard = new Card(item, '#card-template', function () {
		popupWithImage.open(this._name, this._link);		
  });
  const elementCard = newCard.generateCard();
  section.addItemPrepend(elementCard);
}


//запуск валидации инпутов форм
const profileFormValidator = new FormValidator(validationForm, popupProfile);
const cardFormValidator = new FormValidator(validationForm, popupCard);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();



// Установка слушателей на кнопку открытия попапа с формой редактирования профиля
buttonProfile.addEventListener('click', function () {
  const {name, description} = userInfo.getUserInfo();
  nameFormInput.value = name;
  descriptionFormInput.value = description;
  popupWithForm.open();
});

// установка слушателя на кнопку открытия попапа с добавлением карточки
buttonAddCard.addEventListener('click', function () {
  defaultCardInput(popupNameCard, popupLinkCard);
  popupFormAddCard.open();
});

