"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubmitForm =
/*#__PURE__*/
function () {
  function SubmitForm(_ref) {
    var formSelector = _ref.formSelector;

    _classCallCheck(this, SubmitForm);

    this._formSelector = formSelector;
  }

  _createClass(SubmitForm, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var formElement = document.querySelector(this._formSelector).content.querySelector(".form").cloneNode(true);
      this._element = formElement;
    }
  }, {
    key: "generateForm",
    value: function generateForm() {
      this._getTemplate();

      this._setEventListeners();

      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.addEventListener("submit", function (evt) {
        evt.preventDefault();

        _this._element.reset();
      });
    }
  }]);

  return SubmitForm;
}();

var _default = SubmitForm;
exports["default"] = _default;