"use strict";

var _Section = _interopRequireDefault(require("../components/Section.js"));

var _UserCard = _interopRequireDefault(require("../components/UserCard.js"));

var _DefaultCard = _interopRequireDefault(require("../components/DefaultCard.js"));

var _SubmitForm = _interopRequireDefault(require("../components/SubmitForm.js"));

var _constants = require("../utils/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cardList = new _Section["default"]({
  data: _constants.messageList,
  renderer: function renderer(item) {
    // Based on the isOwner field, create instances of the classes
    var card = item.isOwner ? new _UserCard["default"](item, ".card-template_type_user") : new _DefaultCard["default"](item, ".card-template_type_default");
    var cardElement = card.generateCard(); // Insert the markup on the page
    // using the setItem() method of the Section() class

    cardList.setItem(cardElement);
  }
}, _constants.cardListSection);
cardList.renderItems(); // create a form instance

var form = new _SubmitForm["default"]({
  formSelector: ".form-template",
  // An object we pass when calling the handleFormSubmit() function
  // will appear in the place of the formData parameter
  handleFormSubmit: function handleFormSubmit(formData) {
    // we pass the formData object containing data from the form
    // to a new instance of UserCard class
    var card = new _UserCard["default"](formData, ".card-template_type_user");
    var cardElement = card.generateCard();
    cardList.setItem(cardElement);
  }
}); // generate form markup

var formElement = form.generateForm(); // initialize a class responsible
// for adding the form to the page

var formRenderer = new _Section["default"]({
  data: []
}, _constants.formSection); // add the form to the page

formRenderer.setItem(formElement);