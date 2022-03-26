const popupProfile = document.querySelector('.popup_profile');
const nameFormInput = popupProfile.querySelector('.popup__input_type_name');
const descriptionFormInput = popupProfile.querySelector('.popup__input_type_description');
const popupCard = document.querySelector('.popup_card');
const popupNameCard = popupCard.querySelector('.popup__input_type_card-name');
const popupLinkCard = popupCard.querySelector('.popup__input_type_link');
const popupFullScreen = document.querySelector('.popup_full-screen');
const popupContainerProfile = popupProfile.querySelector('.popup__container');
const popupContainerCard = popupCard.querySelector('.popup__container');
const popupContainerImageFull = popupFullScreen.querySelector('.popup__container');
const cardTemplate = document.querySelector('#card-template');
const containerCard = document.querySelector('.elements');
const imageFullScreen = popupFullScreen.querySelector('.popup__image');
const imageNameFullScreen = popupFullScreen.querySelector('.popup__image-name');
const submitButtonCard = popupCard.querySelector('.popup__button-save');
const titleProfile = document.querySelector('.profile__title');
const subtitleProfile = document.querySelector('.profile__subtitle');
const buttonProfile = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__edit-btn');
const content = document.querySelector('.content');

//Open and close popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closeOnClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.addEventListener('click', closeOnClick);
}
  
function closeOnClick(evt) {
  if (evt.target.classList.contains('popup__button-close') || evt.target.classList.contains('popup_opened')) {
    const elementTarget = evt.target;
    const popupTarget = elementTarget.closest('.popup_opened');
    closePopup(popupTarget);
  }
}

// close by overlay
function closeByClickOverlay(popup) {
  if (!popupFullScreen.contains(evt.target)) {
    popup.classList.remove('popup_opened')
    popup.addEventListener('click', closeByClickOverlay);
  }
}


//Profile 
function editProfile(evt) {
  evt.preventDefault();
  titleProfile.textContent = nameFormInput.value;
  subtitleProfile.textContent = descriptionFormInput.value;
  closePopup(popupProfile);
}

//creating a card and its elements
function addElement(item) {
  const ElementCard = cardTemplate.content.cloneNode(true);
  const cardName = ElementCard.querySelector('.card__title');
  const cardImage = ElementCard.querySelector('.card__image');
  const trahsImage = ElementCard.querySelector('.card__delete');
  const likeBtn = ElementCard.querySelector('.card__like');
  cardName.textContent = item.name;
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardImage.addEventListener('click', fullScreen);
  likeBtn.addEventListener('click', likePicture);
  trahsImage.addEventListener('click', deleteCard);
  return ElementCard;
}

// like for card
function likePicture(evt) {
  evt.target.classList.toggle('card__like_black');
}

// deleting a card
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

// picture fullscreen
function fullScreen(evt) {
  const targetElement = evt.target;
  imageFullScreen.src = targetElement.src;
  imageFullScreen.alt = targetElement.alt;
  imageNameFullScreen.textContent = targetElement.alt;
  openPopup(popupFullScreen);
}

// adding a new card
function addCard(evt) {
  evt.preventDefault();
  containerCard.prepend(addElement(popupNameCard.value, popupLinkCard.value));
  closePopup(popupCard);
}

// application on the opening popup profle
buttonProfile.addEventListener('click', function () {
  const nameValue = nameFormInput.value.trim();
  const descValue = descriptionFormInput.value.trim();


  titleProfile.textContent = nameValue;
  subtitleProfile.textContent = descValue;
  openPopup(popupProfile);
});

buttonAddCard.addEventListener('click', function () {
  openPopup(popupCard);
});

//saving a new card and profile information
popupContainerProfile.addEventListener('submit', editProfile);
popupContainerCard.addEventListener('submit', addCard);

//adding cards from array
initialCards.forEach(function (item) {
  containerCard.prepend(addElement(item));
});