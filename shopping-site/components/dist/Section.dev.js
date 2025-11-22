"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DefaultCard = _interopRequireDefault(require("./DefaultCard.js"));

var _HorizontalCard = _interopRequireDefault(require("./HorizontalCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section =
/*#__PURE__*/
function () {
  function Section(_ref, containerSelector) {
    var data = _ref.data;

    _classCallCheck(this, Section);

    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "setItem",
    value: function setItem(element) {
      this._container.append(element);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._container.innerHTML = "";
    }
  }, {
    key: "renderItems",
    value: function renderItems(isGrid) {
      var _this = this;

      this.clear();

      this._renderedItems.forEach(function (item) {
        var card = isGrid ? new _DefaultCard["default"](item, ".default-card") : new _HorizontalCard["default"](item, ".horizontal-card");
        var cardElement = card.generateCard();

        _this.setItem(cardElement);
      });
    }
  }]);

  return Section;
}();

var _default = Section;
exports["default"] = _default;