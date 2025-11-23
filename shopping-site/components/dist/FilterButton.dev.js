"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FilterButton =
/*#__PURE__*/
function () {
  function FilterButton(_ref, buttonSelector) {
    var data = _ref.data,
        handleButtonClick = _ref.handleButtonClick;

    _classCallCheck(this, FilterButton);

    this._additionalButtonClass = data.buttonClass;
    this._buttonSelector = buttonSelector;
    this._handleButtonClick = handleButtonClick;
    this._isGrid = data.isGrid;
  }

  _createClass(FilterButton, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var buttonElement = document.querySelector(this._buttonSelector).content.querySelector(".filter__button").cloneNode(true);
      return buttonElement;
    }
  }, {
    key: "generateButton",
    value: function generateButton() {
      this._element = this._getTemplate();

      this._element.classList.add(this._additionalButtonClass);

      this._setEventListeners();

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.addEventListener("click", function () {
        _this._handleButtonClick(_this._isGrid);
      });
    }
  }]);

  return FilterButton;
}();

var _default = FilterButton;
exports["default"] = _default;