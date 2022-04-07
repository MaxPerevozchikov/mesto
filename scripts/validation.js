function resetInputErrors(popup) {
  popup.querySelectorAll('.popup__input').forEach((inputElement) => {
    inputElement.classList.remove('popup__input_error');
    inputElement.textContent = ' ';
  });

  popup.querySelectorAll('.popup__span-error').forEach((errorElement) => {
    errorElement.classList.remove('popup__span_error_visible');
    errorElement.textContent = ' ';
  });
}

function disabledButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

function enableButton(buttonElement, inactiveButtonClass) {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(inactiveButtonClass);
}

// Show input error
const showInputError = (formElement, inputElement, errorMessage, validationForm) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add(validationForm.inputErrorClass);
    errorElement.classList.add(validationForm.errorClass);
    errorElement.textContent = errorMessage;
  };
  
  // hide input error
  const hideInputError = (formElement, inputElement, validationForm) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.remove(validationForm.inputErrorClass);
    errorElement.classList.remove(validationForm.errorClass);
    errorElement.textContent = '';
  };
  
  // check input validity 
  const checkInputValidity = (formElement, inputElement, validationForm) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationForm);
    } else {
      hideInputError(formElement, inputElement, validationForm);
    }
  };
  
// input validation to determine button status
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  // input validation for toggle btn state
  const toggleButtonState = (inputList, buttonElement, validationForm) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.remove(validationForm.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.add(validationForm.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };
  
  //takes the form element as a parameter and adds the necessary handlers to its fields
  const setEventListeners = (formElement, validationForm) => {
    const inputList = Array.from(formElement.querySelectorAll(validationForm.inputSelector));
    const buttonElement = formElement.querySelector(validationForm.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationForm);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, validationForm);
        toggleButtonState(inputList, buttonElement, validationForm);
      });
    });
  };
  
  //search for all forms with a class "form"
  const enableValidation = (validationForm) => {
    const formList = Array.from(document.querySelectorAll(validationForm.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, validationForm);
    });
  }
  
  const validationForm = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__span_error_visible',
  };
  
  enableValidation(validationForm);