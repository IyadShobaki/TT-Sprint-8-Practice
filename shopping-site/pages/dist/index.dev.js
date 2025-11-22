"use strict";

var _constants = require("../utils/constants.js");

var _Section = _interopRequireDefault(require("../components/Section.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultCardList = new _Section["default"]({
  data: _constants.items
}, _constants.cardListSelector);

_constants.defaultCardButton.addEventListener("click", function () {
  defaultCardList.renderItems(true);
});

_constants.horizontalCardButton.addEventListener("click", function () {
  defaultCardList.renderItems(false);
});

defaultCardList.renderItems();