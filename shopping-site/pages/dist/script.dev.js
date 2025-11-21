"use strict";

var _constants = require("../utils/constants.js");

var _utils = require("../utils/utils.js");

_constants.defaultCardButton.addEventListener("click", function () {
  (0, _utils.renderElements)(true);
});

_constants.horizontalCardButton.addEventListener("click", function () {
  (0, _utils.renderElements)(false);
});

(0, _utils.renderElements)();