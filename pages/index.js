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
const popupImage =  document.querySelector('.elements__item-image');
const btnCloseImage = document.getElementById('popup-close-image');

const cardTemplate = document.getElementById('elements').content;

const cardContainer = document.querySelector('.elements');


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


const addElement = (cardData, prepend = false) => {
  const { name, link } = cardData;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  cardElement.querySelector('.elements__item-image').src = link;
  cardElement.querySelector('.elements__item-title').textContent = name;
  
//удаление карточки

  const trash = cardElement.querySelector('.elements__delete');
  trash.addEventListener('click', deleteCard);
  function deleteCard(evt) {
   const trash = evt.target.closest('.elements__item');
   if (trash === true){
   } else {
     cardElement.remove('elemenst__item');
   }
  }



  //фулскрин картинка
  const cardFullScreen = cardTemplate.querySelector('.button-image');
  //console.log(cardFullScreen);
  cardFullScreen.addEventListener('click', openFullScreen);
  //console.log(cardFullScreen);
  function openFullScreen(evt){
    cardFullScreen.classList.toggle('popup_opened');
    //console.log(openFullScreen);
  }
//



//лайк карточки
  const cardLike = cardElement.querySelector('.elements__like-button');
  cardLike.addEventListener('click', cardLikeAdd);
  function cardLikeAdd(evt){
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
  popupClose();
}

// сохранение карточек

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const name = document.getElementById('create_name').value.trim();
  const link = document.getElementById('create_image').value.trim();

  addElement({ name, link }, true);
  createPopup.classList.toggle('popup_opened');
  console.log(createPopup);
}

// добавлене слушателей
buttonProfile.addEventListener('click', popupOpen);
formItem.addEventListener('submit', formSubmitHandler);
addCard.addEventListener('click', popupOpen);
createForm.addEventListener('submit', cardFormSubmitHandler);

buttonClose.addEventListener('click', function (evt) {
  popupClose(evt);
});

buttonCloseCard.addEventListener('click', popupClose);


