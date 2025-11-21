import Card from "./Card.js";
class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._text = data.text;
    this._image = data.image;
  }

  generateCard() {
    super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__avatar").src = this._image;
    this._element.querySelector(".card__paragraph").textContent = this._text;

    return this._element;
  }
}

export default DefaultCard;
