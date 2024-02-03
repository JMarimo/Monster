import image from '../../img/goblin.png';

export default class Game {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector('element');
    }
    this._element = element;
  }

  createElements(quantity) {
    for (let i = 0; i < quantity; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      this._element.appendChild(cell);
    }
  }

  insertPicture(element) {
    const picture = document.createElement("img");
    // picture.src = "../../img/goblin.png";
    // picture.src = "https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png?raw=true";
    picture.src = image;
    picture.className = "picture";
    element.appendChild(picture);
  }

  clearCell(element) {
    const picture = element.querySelector(".picture");
    picture.remove();
  }
}