// Класс отображения пользоввательской информации на веб странице 

export default class UserInfo {
  constructor({ selectorName, selectorDescription, selectorImage}) {
    this._elementName = document.querySelector(selectorName);
    this._elementDescription = document.querySelector(selectorDescription);
    this._elementImage = document.querySelector(selectorImage);
  }

  // метод, который возвращает объект с данными о имени и роде деятельности пользователя
  getUserInfo() {
    return {
      name: this._elementName.textContent,
      description: this._elementDescription.textContent,
      image: this._elementImage.src
    };
  }

  setUserInfo({ name, description, image }) {
    if (name) {
      this._elementName.textContent = name;
    }
    if (description) {
      this._elementDescription.textContent = description;
    }
    if (image) {
      this._elementImage.src = image;

    }
  }
} 