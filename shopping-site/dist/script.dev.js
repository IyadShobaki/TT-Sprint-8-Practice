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

var items = [{
  image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
  title: "BIOLOID",
  description: "Robot Kit is a popular series of robot construction kits from the company Robotis. The series includes various sets designed both for beginners and for advanced users. In this kit, you'll find everything you need to build unique types of robots and make your own custom designs. The set comes with a software tool for programming, a remote controller, servo motors, and much more.",
  price: "$999"
}, {
  image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
  title: "BIOLOID Premium kit",
  description: "BIOLOID Premium Kit has everything needed to build bipedal robots and includes Dynamixel Smart Servo Motor and the CM-530 controller. BIOLOID Premium Kit is perfect for education, entertainment, and robotics competitions.",
  price: "$1800"
}, {
  image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail2.png",
  title: "Airwheel",
  description: "This bicycle model allows you to use both the pedal and the electric motor, or a combination of both. Airwheel R8 is equipped with a removable battery set to ensure sufficient power supply and to make your trips longer.",
  price: "$2000"
}];
var cardList = document.querySelector(".card-list__items");
var popupElement = document.querySelector(".popup");
var popupImage = document.querySelector(".popup__image");
var popupCloseButton = document.querySelector(".popup__close");
var popupCaption = document.querySelector(".popup__caption");
var defaultCardButton = document.querySelector(".filter__button_type_grid");
var horizontalCardButton = document.querySelector(".filter__button_type_column");

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
      return cardElement;
    }
  }, {
    key: "_handleOpenPopup",
    value: function _handleOpenPopup() {
      popupImage.src = this._image;
      popupElement.classList.add("popup_is-opened");
    }
  }, {
    key: "_handleClosePopup",
    value: function _handleClosePopup() {
      popupImage.src = "";
      popupElement.classList.remove("popup_is-opened");
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.addEventListener("click", function () {
        _this._handleOpenPopup();
      });

      popupCloseButton.addEventListener("click", function () {
        _this._handleClosePopup();
      });
    }
  }]);

  return Card;
}();

var DefaultCard =
/*#__PURE__*/
function (_Card) {
  _inherits(DefaultCard, _Card);

  function DefaultCard(data, cardSelector) {
    var _this2;

    _classCallCheck(this, DefaultCard);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultCard).call(this, cardSelector));
    _this2._title = data.title;
    _this2._description = data.description;
    _this2._image = data.image;
    return _this2;
  }

  _createClass(DefaultCard, [{
    key: "_handleOpenPopup",
    value: function _handleOpenPopup() {
      popupCaption.textContent = this._description;

      _get(_getPrototypeOf(DefaultCard.prototype), "_handleOpenPopup", this).call(this);
    }
  }, {
    key: "_handleClosePopup",
    value: function _handleClosePopup() {
      popupCaption.textContent = "";

      _get(_getPrototypeOf(DefaultCard.prototype), "_handleClosePopup", this).call(this);
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = _get(_getPrototypeOf(DefaultCard.prototype), "_getTemplate", this).call(this);

      _get(_getPrototypeOf(DefaultCard.prototype), "_setEventListeners", this).call(this);

      this._element.querySelector(".card__image").style.backgroundImage = "url(".concat(this._image, ")");
      this._element.querySelector(".card__title").textContent = this._title;
      return this._element;
    }
  }]);

  return DefaultCard;
}(Card);

var HorizontalCard =
/*#__PURE__*/
function (_Card2) {
  _inherits(HorizontalCard, _Card2);

  function HorizontalCard(data, cardSelector) {
    var _this3;

    _classCallCheck(this, HorizontalCard);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalCard).call(this, cardSelector));
    _this3._title = data.title;
    _this3._description = data.description;
    _this3._price = data.price;
    _this3._image = data.image;
    return _this3;
  }

  _createClass(HorizontalCard, [{
    key: "generateCard",
    value: function generateCard() {
      this._element = _get(_getPrototypeOf(HorizontalCard.prototype), "_getTemplate", this).call(this);

      _get(_getPrototypeOf(HorizontalCard.prototype), "_setEventListeners", this).call(this);

      this._element.querySelector(".card__image").style.backgroundImage = "url(".concat(this._image, ")");
      this._element.querySelector(".card__title").textContent = this._title;
      this._element.querySelector(".card__info").textContent = this._description;
      this._element.querySelector(".card__price-property").textContent = this._price;
      return this._element;
    }
  }]);

  return HorizontalCard;
}(Card);

function renderElements(isGrid) {
  cardList.innerHTML = ""; // empty the contents of the container

  items.forEach(function (item) {
    var card = isGrid ? new DefaultCard(item, ".default-card") : new HorizontalCard(item, ".horizontal-card");
    var cardElement = card.generateCard();
    cardList.append(cardElement);
  });
}

renderElements();
defaultCardButton.addEventListener("click", function () {
  renderElements(true);
});
horizontalCardButton.addEventListener("click", function () {
  renderElements(false);
});