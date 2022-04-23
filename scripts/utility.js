function openPopup(popup) {
    popup.classList.add('popup_opened');
    popup.addEventListener('click', closeOnClick);
    document.addEventListener('keydown', closeOnClickEsc);
  }
  
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
    popup.removeEventListener('click', closeOnClick);
    document.removeEventListener('keydown', closeOnClickEsc);
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
  
  function defaultCardInput(nameElement, linkElement) {
    nameElement.value = '';
    linkElement.value = '';
  }

  export { openPopup, closePopup, closeOnClick, closeOnClickEsc, defaultCardInput };