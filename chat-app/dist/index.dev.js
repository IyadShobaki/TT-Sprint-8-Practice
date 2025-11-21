"use strict";

var _DefaultCard = _interopRequireDefault(require("./components/DefaultCard.js"));

var _UserCard = _interopRequireDefault(require("./components/UserCard.js"));

var _constants = require("./utils/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_constants.messageList.forEach(function (item) {
  var card = item.isOwner ? new _UserCard["default"](item, ".card-template_type_user") : new _DefaultCard["default"](item, ".card-template_type_default");
  var cardElement = card.generateCard();
  document.body.append(cardElement);
});