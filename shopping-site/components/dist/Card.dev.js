"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../utils/constants.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      _constants.popupImage.src = this._image;

      _constants.popupElement.classList.add("popup_is-opened");
    }
  }, {
    key: "_handleClosePopup",
    value: function _handleClosePopup() {
      _constants.popupImage.src = "";

      _constants.popupElement.classList.remove("popup_is-opened");
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.addEventListener("click", function () {
        _this._handleOpenPopup();
      });

      _constants.popupCloseButton.addEventListener("click", function () {
        _this._handleClosePopup();
      });
    }
  }]);

  return Card;
}();

var _default = Card;
exports["default"] = _default;