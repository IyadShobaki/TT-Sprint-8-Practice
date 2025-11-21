"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = Card;
exports["default"] = _default;