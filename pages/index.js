const content = document.querySelector('.content');
const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonClose = document.getElementById('popup-close');
const buttonCloseCard = document.getElementById('popup-close_card');
const formItem = document.querySelector('.popup__form');
const nameFormInput = document.querySelector('.popup__input_type_name');
const descriptionFormInput = document.querySelector('.popup__input_type_description');
const createPopup = document.getElementById('create');
const addCard = document.getElementById('create-card');
const createForm = document.getElementById('create_form');
const btnCloseImage = document.getElementById('popup_close-image');
const profilePopup = document.getElementById('profile');
const cardTemplate = document.getElementById('elements').content;
const cardContainer = document.querySelector('.elements');
const fullPopup = document.getElementById('fullscreen');
const imagePopup = fullPopup.querySelector('.popup__image');
const fullNameCard = fullPopup.querySelector('.popup__image-name');
const fullscreenContent = document.getElementById('fullscreen-content');

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

// Закрытие окна по клику вне контейнера
const fullScreenClickOutsideListener = (evt) => {
  if (!fullscreenContent.contains(evt.target)) {
    fullPopup.classList.remove('popup_opened');
  }
}
fullPopup.addEventListener('click', fullScreenClickOutsideListener);

// добавление карточки по переданным данным
const addElement = (cardData, prepend = false) => {
  const { name, link } = cardData;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  cardElement.querySelector('.elements__item-image').src = link;
  cardElement.querySelector('.elements__item-title').textContent = name;
  const cardFullScreen = cardElement.querySelector('.button-image');

  //фулскрин картинка
  fullNameCard.textContent = name;
  imagePopup.src = link;
  fullNameCard.alt = name;

  cardFullScreen.addEventListener('click', fullImage);

  function fullImage(evt) {
    fullNameCard.textContent = name;
    imagePopup.src = link;
    fullNameCard.alt = name;
    fullPopup.classList.toggle('popup_opened');
  };

  btnCloseImage.addEventListener('click', popupClose);

  //удаление карточки
  const trash = cardElement.querySelector('.elements__delete');
  trash.addEventListener('click', deleteCard);

  function deleteCard(evt) {
    const trash = evt.target.closest('.elements__item');
    if (trash !== true) {
      cardElement.remove('elemenst__item');
    }
  }

  //лайк карточки
  const cardLike = cardElement.querySelector('.elements__like-button');
  cardLike.addEventListener('click', cardLikeAdd);
  function cardLikeAdd(evt) {
    cardLike.classList.toggle('elements__like-button_black');
  }
  // условия добавление карточки 
  if (!prepend) {
    cardContainer.append(cardElement);
  } else {
    cardContainer.prepend(cardElement);
  }
}

for (let i = 0; i < initialCards.length; i++) {
  addElement(initialCards[i]);
}

// Открытие попапа
function popupOpen(evt) {
  const popupID = evt.target.getAttribute('data-popup-id');
  const popup = document.getElementById(popupID);
  popup.classList.toggle('popup_opened');
  nameFormInput.value = titleProfile.textContent;
  descriptionFormInput.value = subtitleProfile.textContent;
}


// закрытие попапа
function popupClose(evt) {
  const popupID = evt.target.getAttribute('data-popup-id');
  const popup = document.getElementById(popupID)
  popup.classList.toggle('popup_opened');
}

// сохранение данных в инпутах
function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameValue = nameFormInput.value.trim();
  const descValue = descriptionFormInput.value.trim();

  if (!nameValue || !descValue) {
    alert('Введите информацию.');
    return;
  }

  titleProfile.textContent = nameValue;
  subtitleProfile.textContent = descValue;
  profilePopup.classList.remove('popup_opened');
}

// сохранение карточек

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const name = document.getElementById('create_name').value.trim();
  const link = document.getElementById('create_image').value.trim();

  addElement({ name, link }, true);
  createPopup.classList.toggle('popup_opened');
}

// добавлене слушателей
buttonProfile.addEventListener('click', popupOpen);
formItem.addEventListener('submit', formSubmitHandler);
addCard.addEventListener('click', popupOpen);
createForm.addEventListener('submit', cardFormSubmitHandler);
buttonClose.addEventListener('click', popupClose);
buttonCloseCard.addEventListener('click', popupClose);