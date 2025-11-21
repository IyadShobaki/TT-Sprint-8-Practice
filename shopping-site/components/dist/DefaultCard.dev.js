"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../utils/constants.js");

var _Card2 = _interopRequireDefault(require("./Card.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefaultCard =
/*#__PURE__*/
function (_Card) {
  _inherits(DefaultCard, _Card);

  function DefaultCard(data, cardSelector) {
    var _this;

    _classCallCheck(this, DefaultCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultCard).call(this, cardSelector));
    _this._title = data.title;
    _this._description = data.description;
    _this._image = data.image;
    return _this;
  }

  _createClass(DefaultCard, [{
    key: "_handleOpenPopup",
    value: function _handleOpenPopup() {
      _constants.popupCaption.textContent = this._description;

      _get(_getPrototypeOf(DefaultCard.prototype), "_handleOpenPopup", this).call(this);
    }
  }, {
    key: "_handleClosePopup",
    value: function _handleClosePopup() {
      _constants.popupCaption.textContent = "";

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
}(_Card2["default"]);

var _default = DefaultCard;
exports["default"] = _default;