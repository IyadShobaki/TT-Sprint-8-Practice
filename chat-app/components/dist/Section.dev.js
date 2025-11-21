"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section =
/*#__PURE__*/
function () {
  function Section(_ref, containerSelector) {
    var data = _ref.data;

    _classCallCheck(this, Section);

    this._initialArray = data;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      // Iterate over the _renderedItems array of messages
      this._initialArray.forEach(function (item) {
        // Based on the isOwner field, create instances of the classes
        var card = item.isOwner ? new UserCard(item, ".card-template_type_user") : new DefaultCard(item, ".card-template_type_default");
        var cardElement = card.generateCard(); // Insert the markup on the page
        // using the setItem() method of the Section() class

        _this.setItem(cardElement);
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