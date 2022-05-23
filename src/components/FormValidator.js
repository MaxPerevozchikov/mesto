
export default class FormValidator {
  constructor(validationForm, formElement) {
	this._formElement = formElement;
    this._inputSelector = validationForm.inputSelector;
    this._inputErrorClass = validationForm.inputErrorClass;
    this._errorClass = validationForm.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._errorList = Array.from(this._formElement.querySelectorAll(this._errorSelector));
    this._errorSelector = validationForm._errorSelector;
    this._submitButtonSelector = validationForm.submitButtonSelector;
    this._inactiveButtonClass = validationForm.inactiveButtonClass;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners(this._formElement);
  }

	_setEventListeners() {
	this._inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', () => {
			this._checkInputValidity(inputElement, this._formElement);
			this._toggleButtonState();
		});
	});
	}


	// check input validity 
	_checkInputValidity(inputElement) {
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement, inputElement.validationMessage);
		} else {
			this._hideInputError(inputElement);
		};
	}


	// Show input error
	_showInputError (inputElement, errorMessage) {
	const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

	inputElement.classList.add(this._inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(this._errorClass);
	}



	// hide input error
	_hideInputError(inputElement) {
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		
		inputElement.classList.remove(this._inputErrorClass);
		errorElement.classList.remove(this._errorClass);
		errorElement.textContent = '';
	}

	// input validation for toggle btn state
	_toggleButtonState() {
		if (this._hasInvalidInput(this._inputList)) {
			this._disableButton();
		} else {
			this._enableButton();
		}
	}

	// input validation to determine button status
	_hasInvalidInput() {
		return this._inputList.some((inputElement) => {
			return !inputElement.validity.valid;
		});
	} 

	_disableButton() {
		this._buttonElement.classList.add(this._inactiveButtonClass);
		this._buttonElement.setAttribute('disabled', true);
	}

	_enableButton() {
		this._buttonElement.removeAttribute('disabled');
		this._buttonElement.classList.remove(this._inactiveButtonClass);
	}

	_resetInputErrors() {
		this._inputList.forEach((inputElement) => {
			inputElement.classList.remove(this._inputErrorClass);
		});

		this._errorList.forEach((errorElement) => {
		errorElement.classList.remove(this._errorClass);
		errorElement.textContent = ' ';
	});
	}
}