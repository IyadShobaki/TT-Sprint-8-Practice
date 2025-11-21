import Card from "./Card.js";

class UserCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._text = data.text;
  }

  generateCard() {
    super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__paragraph").textContent = this._text;

    return this._element;
  }

  _handleMessageClick() {
    super._handleMessageClick();

    this._element.classList.toggle("card_is-active");
  }
}

export default UserCard;
