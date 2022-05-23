//--------------СОЗДАНИЕ КЛАССА ПОПАПА С ПОДТВЕРЖДЕНИЕМ УДАЛЕНИЯ КАРТОЧКИ----------

import Popup from "./Popup";

export default class PopupWithConfirm extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._popupForm = this._popupElement.querySelector('.popup__form');
		this._submitBtn = this._popupElement.querySelector('.popup__button-save');
	}

	close() {
		super.close();
	}

	open(onSubmit) {
		super.open();
		this._onSubmit = onSubmit;
	}

	setEventListeners() {
		super.setEventListeners();
		this._popupForm.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._onSubmit();
			this.close();
		});
	}
}