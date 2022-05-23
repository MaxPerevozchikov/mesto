export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
  }
  
  setEventListeners() {
    this._popupElement.addEventListener('click', this._handleCloseClick);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleCloseClick(evt) {
    if (evt.target.classList.contains('popup__button-close') || evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }
}