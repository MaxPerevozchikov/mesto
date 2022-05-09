
export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderedItems = items;
      this._renderer = renderer; // renderer — это функция
      
      this._container = document.querySelector(containerSelector);
    }

//публичный метод, отвечающий за отрисовку элементов
    renderItems() {
      this._renderedItems.forEach(item => {
        this._renderer(item)}
        );
    }
//публичный метод, принимающий элемент DOM, добавляющий его в начало контейнера 
    addItem(element) {
      this._container.append(element);
    }

    addItemPrepend(element) {
      this._container.prepend(element);
    }
  }
  //console.log(this._container);