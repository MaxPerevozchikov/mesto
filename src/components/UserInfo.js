// Класс отображения пользоввательской информации на веб странице 

export default class UserInfo {
  constructor({ selectorName, selectorDescription }) {
    this._elementName = document.querySelector(selectorName);
    this._elementDescription = document.querySelector(selectorDescription);
  }

  // метод, который возвращает объект с данными о имени и роде деятельности пользователя
  getUserInfo() {
    return this._editProfile = {
      name: this._elementName.textContent,
      description: this._elementDescription.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._elementName.textContent = name;
    this._elementDescription.textContent = description;
  }
} 