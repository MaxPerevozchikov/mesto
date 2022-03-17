const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.getElementById('elements').content;

const cardContainer = document.querySelector('.elements');

const addElement = (cardData, prepend = false) => {
  const { name, link } = cardData;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  cardElement.querySelector('.elements__item-image').src = link;
  cardElement.querySelector('.elements__item-title').textContent = name;

  if (!prepend) {
    cardContainer.append(cardElement);
  } else {
    cardContainer.prepend(cardElement);
  }
}

for (let i = 0; i < initialCards.length; i++) {
  addElement(initialCards[i]);
}

function imageFullScreen (evt) {
  elementsImage.classList.toggle('elements__item-image_opened');
}

function likePush (evt) {
  likeBtn.classList.toggle('elements__like-button_black');
}




let content = document.querySelector('.content');

let titleProfile = document.querySelector('.profile__title');
let subtitleProfile = document.querySelector('.profile__subtitle');
let buttonProfile = document.querySelector('.profile__edit-button');

let buttonClose = document.getElementById('popup-close');
let buttonCloseCard = document.getElementById('popup-close_card');

let formItem = document.querySelector('.popup__form');
let nameFormInput = document.querySelector('.popup__input_type_name');
let descriptionFormInput = document.querySelector('.popup__input_type_description');
const createPopup = document.getElementById('create');
const addCard = document.getElementById('create-card');
const createForm = document.getElementById('create_form');
const elementsImage = document.querySelector('.elements__item-image');
const likeBtn = document.querySelector('.elements__like-button');



function popupOpen(evt) {
  const popupID = evt.target.getAttribute('data-popup-id');
  const popup = document.getElementById(popupID);
  popup.classList.toggle('popup_opened');
  nameFormInput.value = titleProfile.textContent;
  descriptionFormInput.value = subtitleProfile.textContent; 
}


function popupClose(evt) {
  const popupID = evt.target.getAttribute('data-popup-id');
  const popup = document.getElementById(popupID)
  popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
  // 
  evt.preventDefault();

  // 
  const nameValue = nameFormInput.value.trim();
  const descValue = descriptionFormInput.value.trim();
  
  // 
  if (!nameValue || !descValue) {
    alert('Введите информацию.');
    return;
  }
  
  titleProfile.textContent = nameValue;
  subtitleProfile.textContent = descValue;
  popupClose();
}

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const name = document.getElementById('create_name').value.trim();
  const link = document.getElementById('create_image').value.trim();

  addElement({ name, link }, true);
  createPopup.classList.toggle('popup_opened');
  console.log(createPopup);
}

buttonProfile.addEventListener('click', popupOpen);
formItem.addEventListener('submit', formSubmitHandler);
addCard.addEventListener('click', popupOpen);
createForm.addEventListener('submit', cardFormSubmitHandler);
elementsImage.addEventListener('click', imageFullScreen);
likeBtn.addEventListener('click', likePush);




buttonClose.addEventListener('click', function (event) {
  popupClose(event);
});

buttonCloseCard.addEventListener('click', popupClose);

