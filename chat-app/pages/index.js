import Section from "../components/Section.js";
import UserCard from "../components/UserCard.js";
import DefaultCard from "../components/DefaultCard.js";
import { messageList, cardListSection } from "../utils/constants.js";

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
