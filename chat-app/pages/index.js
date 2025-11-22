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
const form = new SubmitForm({ formSelector: ".form-template" });

// generate form markup
const formElement = form.generateForm();

// initialize a class responsible
// for adding the form to the page
const formRenderer = new Section({ data: [] }, formSection);
// add the form to the page
formRenderer.setItem(formElement);
