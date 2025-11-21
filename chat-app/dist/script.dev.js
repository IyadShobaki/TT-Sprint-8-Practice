"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var messageList = [{
  image: "https://code.s3.yandex.net/web-code/card__image.jpg",
  text: "Hi, we need to tune up our chat ASAP!"
}, {
  text: "Here is the user's chat card",
  isOwner: true
}, {
  image: "https://code.s3.yandex.net/web-code/card__image.jpg",
  text: "The response!"
}];

var Card =
/*#__PURE__*/
function () {
  function Card(cardSelector) {
    _classCallCheck(this, Card);

    this._cardSelector = cardSelector;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
      this._element = cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector(".card__text").addEventListener("click", function () {
        _this._handleMessageClick();
      });
    }
  }, {
    key: "_handleMessageClick",
    value: function _handleMessageClick() {
      this._element.querySelector(".card__text").classList.toggle("card__text_is-active");
    }
  }]);

  return Card;
}();

var UserCard =
/*#__PURE__*/
function (_Card) {
  _inherits(UserCard, _Card);

  function UserCard(data, cardSelector) {
    var _this2;

    _classCallCheck(this, UserCard);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UserCard).call(this, cardSelector));
    _this2._text = data.text;
    return _this2;
  }

  _createClass(UserCard, [{
    key: "generateCard",
    value: function generateCard() {
      _get(_getPrototypeOf(UserCard.prototype), "_getTemplate", this).call(this);

      _get(_getPrototypeOf(UserCard.prototype), "_setEventListeners", this).call(this);

      this._element.querySelector(".card__paragraph").textContent = this._text;
      return this._element;
    }
  }, {
    key: "_handleMessageClick",
    value: function _handleMessageClick() {
      _get(_getPrototypeOf(UserCard.prototype), "_handleMessageClick", this).call(this);

      this._element.classList.toggle("card_is-active");
    }
  }]);

  return UserCard;
}(Card);

var DefaultCard =
/*#__PURE__*/
function (_Card2) {
  _inherits(DefaultCard, _Card2);

  function DefaultCard(data, cardSelector) {
    var _this3;

    _classCallCheck(this, DefaultCard);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultCard).call(this, cardSelector));
    _this3._text = data.text;
    _this3._image = data.image;
    return _this3;
  }

  _createClass(DefaultCard, [{
    key: "generateCard",
    value: function generateCard() {
      _get(_getPrototypeOf(DefaultCard.prototype), "_getTemplate", this).call(this);

      _get(_getPrototypeOf(DefaultCard.prototype), "_setEventListeners", this).call(this);

      this._element.querySelector(".card__avatar").src = this._image;
      this._element.querySelector(".card__paragraph").textContent = this._text;
      return this._element;
    }
  }]);

  return DefaultCard;
}(Card);

messageList.forEach(function (item) {
  var card = item.isOwner ? new UserCard(item, ".card-template_type_user") : new DefaultCard(item, ".card-template_type_default");
  var cardElement = card.generateCard();
  document.body.append(cardElement);
});