"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderElements = renderElements;

var _constants = require("./constants.js");

var _DefaultCard = _interopRequireDefault(require("../components/DefaultCard.js"));

var _HorizontalCard = _interopRequireDefault(require("../components/HorizontalCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function renderElements(isGrid) {
  _constants.cardList.innerHTML = ""; // empty the contents of the container

  _constants.items.forEach(function (item) {
    var card = isGrid ? new _DefaultCard["default"](item, ".default-card") : new _HorizontalCard["default"](item, ".horizontal-card");
    var cardElement = card.generateCard();

    _constants.cardList.append(cardElement);
  });
}