"use strict";

var _Section = _interopRequireDefault(require("../components/Section.js"));

var _constants = require("../utils/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardList = new _Section["default"]({
  data: _constants.messageList
}, _constants.cardListSection);
cardList.renderItems();