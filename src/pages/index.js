import './index.css';

import initialCards from '../components/initialCards.js';
import { defaultCardInput } from '../utils/utility.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';

const popupCard = document.querySelector('.popup_card');
const popupNameCard = popupCard.querySelector('.popup__input_type_card-name');
const popupLinkCard = popupCard.querySelector('.popup__input_type_link');

const popupProfile = document.querySelector('.popup_profile');
const nameFormInput = popupProfile.querySelector('.popup__input_type_name');
const descriptionFormInput = popupProfile.querySelector('.popup__input_type_description');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__edit-btn');

const popupAvatar = document.querySelector('.popup_avatar');
const popupLinkAvatar = popupAvatar.querySelector('.popup__input_type_link-avatar');
const buttonAvatar = document.querySelector('.profile__avatar');


const validationForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__span_error_visible',
};

//Создание экземпляра класса PopupWithForm для редактирования аватара профиля

const popupFormAvatar = new PopupWithForm('.popup_avatar', (data) => {
  userInfo.setUserInfo(data);
});

popupFormAvatar.setEventListeners();  

buttonAvatar.addEventListener('click',  () => {
  popupFormAvatar.open();
})




//Создание экземпляра класса PopupWithConfirm для открытия попапа подтверждения действия 

const popupWithConfirm = new PopupWithConfirm('.popup_confirm');
popupWithConfirm.setEventListeners();


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
  selectorDescription: '.profile__subtitle',
  selectorImage: '.profile__avatar'
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
  const newCard = new Card(item, '#card-template', 
    function () {
      popupWithImage.open(this._name, this._link);
    }, 
    function (removeCard) {
      popupWithConfirm.open(removeCard);
    });

const elementCard = newCard.generateCard();
section.addItem(elementCard);
}


//запуск валидации инпутов форм
const profileFormValidator = new FormValidator(validationForm, popupProfile);
const cardFormValidator = new FormValidator(validationForm, popupCard);
const avatarFormValidator = new FormValidator(validationForm, popupAvatar);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();



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