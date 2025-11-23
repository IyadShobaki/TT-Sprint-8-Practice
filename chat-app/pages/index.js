import Section from "../components/Section.js";
import UserCard from "../components/UserCard.js";
import DefaultCard from "../components/DefaultCard.js";
import SubmitForm from "../components/SubmitForm.js";
import {
  messageList,
  cardListSection,
  formSection,
} from "../utils/constants.js";

const cardList = new Section(
  {
    data: messageList,
    renderer: (item) => {
      // Based on the isOwner field, create instances of the classes
      const card = item.isOwner
        ? new UserCard(item, ".card-template_type_user")
        : new DefaultCard(item, ".card-template_type_default");

      const cardElement = card.generateCard();

      // Insert the markup on the page
      // using the setItem() method of the Section() class
      cardList.setItem(cardElement);
    },
  },
  cardListSection
);

cardList.renderItems();

// create a form instance
const form = new SubmitForm({
  formSelector: ".form-template",
  // An object we pass when calling the handleFormSubmit() function
  // will appear in the place of the formData parameter
  handleFormSubmit: (formData) => {
    // we pass the formData object containing data from the form
    // to a new instance of UserCard class
    const card = new UserCard(formData, ".card-template_type_user");

    const cardElement = card.generateCard();

    cardList.setItem(cardElement);
  },
});

// generate form markup
const formElement = form.generateForm();

// initialize a class responsible
// for adding the form to the page
const formRenderer = new Section({ data: [] }, formSection);
// add the form to the page
formRenderer.setItem(formElement);
