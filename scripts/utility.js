const popupCard = document.querySelector('.popup_card');
const popupNameCard = popupCard.querySelector('.popup__input_type_card-name');
const popupLinkCard = popupCard.querySelector('.popup__input_type_link');


function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', closeOnClick);
    document.addEventListener('keydown', closeOnClickEsc);
    //disableButton(popup);
    defaultCardInput(popup);
  }
  
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }
    
  function closeOnClick(evt) {
    if (evt.target.classList.contains('popup__button-close') || evt.target.classList.contains('popup_opened')) {
      const elementTarget = evt.target;
      const popupTarget = elementTarget.closest('.popup_opened');
      closePopup(popupTarget);
    }
  }
  
  function closeOnClickEsc(evt) {
    if (evt.key === 'Escape') {
      const popupTarget = document.querySelector('.popup_opened');
      closePopup(popupTarget);
    }
  }
  
  function defaultCardInput() {
    popupNameCard.value = '';
    popupLinkCard.value = '';
  }

  export { openPopup, closePopup, closeOnClick, closeOnClickEsc };