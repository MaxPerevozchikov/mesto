import { openPopup } from "./utility.js";

export default class Card {
	
	
	constructor(data, selector) {
		this._name = data.name;
		this._link = data.link;
		this._alt = data.name;
		this._selector = selector;
		this._imageFullScreen = document.querySelector('.popup__image');
		this._imageNameFullScreen = document.querySelector('.popup__image-name');
		this._popupFullScreen = document.querySelector('.popup_full-screen');

	}

	_getTemplate() {
		const CardElement = document
			.querySelector(this._selector)
			.content.querySelector('.card')
			.cloneNode(true); 

			return CardElement;
	}

	
	generateCard() {
		this._element = this._getTemplate();
		this._likeBtn = this._element.querySelector('.card__like');
		this._trashImage = this._element.querySelector('.card__delete');
		this._popupCard = this._element.querySelector('.popup_card');
		this._btnImageFull = this._element.querySelector('.card__image-full');

		const cardImage = this._element.querySelector('.card__image');
		const cardTitle = this._element.querySelector('.card__title');

		cardTitle.textContent = this._name;
		cardImage.src = this._link;
		cardImage.alt = this._alt;

		this._setEventListeners();

		return this._element;
	}
	

	_setEventListeners() {
		this._likeBtn.addEventListener('click', () => {
			this._likePicture();
		});

		this._btnImageFull.addEventListener('click', () => {
			this._fullScreen(); 
		});

		this._trashImage.addEventListener('click', () => {
			this._deleteCard();
		});
	}

//like for card
	_likePicture() {
		this._likeBtn.classList.toggle('card__like_black');
}

// picture fullscreen
	_fullScreen() {
		this._imageFullScreen.src = this._link;
		this._imageFullScreen.alt = this._alt;
		this._imageNameFullScreen.textContent = this._name;
		openPopup(this._popupFullScreen);
}

// deleting a card
	_deleteCard() {
  	this._element.remove();
		this._element = null;
	}
}