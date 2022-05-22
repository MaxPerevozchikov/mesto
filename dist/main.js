(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=n,this._inputSelector=e.inputSelector,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._errorList=Array.from(this._formElement.querySelectorAll(this._errorSelector)),this._errorSelector=e._errorSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners(this._formElement)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t,e._formElement),e._toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableButton():this._enableButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableButton",value:function(){this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"_resetInputErrors",value:function(){var e=this;this._inputList.forEach((function(t){t.classList.remove(e._inputErrorClass)})),this._errorList.forEach((function(t){t.classList.remove(e._errorClass),t.textContent=" "}))}},{key:"initialDisableButton",value:function(e,t,n){this._disableButton(e,t),this._resetInputErrors(n)}},{key:"initialEnableButton",value:function(e,t,n){this._enableButton(e,t),this._resetInputErrors(n)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._alt=t.name,this._selector=n,this._handleCardClick=r,this._handleCardClick=this._handleCardClick.bind(this)}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._likeBtn=this._element.querySelector(".card__like"),this._trashImage=this._element.querySelector(".card__delete"),this._popupCard=this._element.querySelector(".popup_card"),this._btnImageFull=this._element.querySelector(".card__image-full");var e=this._element.querySelector(".card__image");return this._element.querySelector(".card__title").textContent=this._name,e.src=this._link,e.alt=this._alt,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._likePicture()})),this._btnImageFull.addEventListener("click",(function(){e._fullScreen()})),this._trashImage.addEventListener("click",(function(){e._deleteCard()}))}},{key:"_likePicture",value:function(){this._likeBtn.classList.toggle("card__like_black")}},{key:"_fullScreen",value:function(){this._handleCardClick()}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.selectorName,r=t.selectorDescription;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementName=document.querySelector(n),this._elementDescription=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._editProfile={name:this._elementName.textContent,description:this._elementDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description;this._elementName.textContent=t,this._elementDescription.textContent=n}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(this._popupSelector),this._popupCloseButton=this._popupElement.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleCloseClick=this._handleCloseClick.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this._popupElement.addEventListener("click",this._handleCloseClick)}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleCloseClick",value:function(e){(e.target.classList.contains("popup__button-close")||e.target.classList.contains("popup_opened"))&&this.close()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function y(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupTitle=t._popupElement.querySelector(".popup__image-name"),t._popupPicture=t._popupElement.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e,t){f(d(u.prototype),"open",this).call(this),this._popupTitle.textContent=e,this._popupPicture.src=t,this._popupPicture.alt="Картинка ".concat(e)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitForm=t,n._popupForm=n._popupElement.querySelector(".popup__form"),n._inputList=n._popupElement.querySelectorAll(".popup__input"),n._submitBtn=n._popupElement.querySelector(".popup__button-save"),n._btnText=n._submitBtn.textContent,n}return t=u,(n=[{key:"close",value:function(){k(C(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;k(C(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a),L=document.querySelector(".popup_card"),O=L.querySelector(".popup__input_type_card-name"),j=L.querySelector(".popup__input_type_link"),P=document.querySelector(".popup_profile"),q=P.querySelector(".popup__input_type_name"),I=P.querySelector(".popup__input_type_description"),B=L.querySelector(".popup__container"),x=P.querySelector(".popup__container"),R=document.querySelector(".elements"),T=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__edit-btn"),V=B.querySelector(".popup__button-save"),A={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__span_error_visible"},F=new m(".popup_full-screen");F.setEventListeners();var N=new w(".popup_profile",(function(e){z.setUserInfo(e)}));N.setEventListeners();var U=new w(".popup_card",(function(){U.setEventListeners()})),z=new i({selectorName:".popup__input_type_name",selectorDescription:".popup__input_type_description"});function M(e){var t=new r(e,"#card-template",(function(){F.open(this._name,this._link)})).generateCard();R.prepend(t)}new s({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:M},".elements").renderItems();var G=new t(A,P),H=new t(A,L);G.enableValidation(),H.enableValidation(),T.addEventListener("click",(function(){q.value=z.getUserInfo().name,I.value=z.getUserInfo().description,N.open()})),D.addEventListener("click",(function(){var e;e=j,O.value="",e.value="",U.open()})),x.addEventListener("submit",N),B.addEventListener("submit",(function(e){e.preventDefault(),M({name:O.value,link:j.value}),U.close(),V.classList.remove("popup__button-save_disabled"),V.disabled=!0}))})();