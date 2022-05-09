//----------Создание класса попапа и изображением-----

import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupTitle = this._popupElement.querySelector('.popup__image-name');
    this._popupPicture = this._popupElement.querySelector('.popup__image');
  }

  open(title, link) {
    super.open();
    this._popupTitle.textContent = title;
    this._popupPicture.src = link;
    this._popupPicture.alt = `Картинка ${title}`;
  }
}