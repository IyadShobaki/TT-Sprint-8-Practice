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

const form = new SubmitForm({ formSelector: ".form-template" });

const formElement = form.generateForm();

// use Section to place form on DOM
const formRenderer = new Section({ data: [] }, formSection);
formRenderer.setItem(formElement);
