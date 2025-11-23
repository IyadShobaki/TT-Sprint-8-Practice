"use strict";

var _constants = require("../utils/constants.js");

var _Section = _interopRequireDefault(require("../components/Section.js"));

var _DefaultCard = _interopRequireDefault(require("../components/DefaultCard.js"));

var _HorizontalCard = _interopRequireDefault(require("../components/HorizontalCard.js"));

var _FilterButton = _interopRequireDefault(require("../components/FilterButton.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultCardList = new _Section["default"]({
  data: _constants.items,
  renderer: function renderer(item) {
    var card = new _DefaultCard["default"](item, ".default-card");
    var cardElement = card.generateCard();
    defaultCardList.setItem(cardElement);
  }
}, _constants.cardListSelector);
var horizontalCardList = new _Section["default"]({
  data: _constants.items,
  renderer: function renderer(item) {
    var card = new _HorizontalCard["default"](item, ".horizontal-card");
    var cardElement = card.generateCard();
    horizontalCardList.setItem(cardElement);
  }
}, _constants.cardListSelector);
defaultCardList.renderItems();
var filterList = new _Section["default"]({
  data: _constants.filterButtons,
  renderer: function renderer(item) {
    var filterButton = new _FilterButton["default"]({
      data: item,
      handleButtonClick: function handleButtonClick(isGrid) {
        if (isGrid) {
          defaultCardList.clear();
          defaultCardList.renderItems();
        } else {
          horizontalCardList.clear();
          horizontalCardList.renderItems();
        }
      }
    }, _constants.filterButtonTemplate);
    var filterButtonElement = filterButton.generateButton();
    filterList.setItem(filterButtonElement);
  }
}, _constants.filterListSelector);
filterList.renderItems();