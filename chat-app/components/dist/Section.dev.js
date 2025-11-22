"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section =
/*#__PURE__*/
function () {
  function Section(_ref, containerSelector) {
    var data = _ref.data,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      // Iterate over the _renderedItems array of messages
      this._renderedItems.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }, {
    key: "setItem",
    value: function setItem(element) {
      this._container.append(element);
    }
  }]);

  return Section;
}();

var _default = Section;
exports["default"] = _default;