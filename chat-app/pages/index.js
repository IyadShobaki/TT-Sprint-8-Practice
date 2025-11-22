import Section from "../components/Section.js";
import { messageList, cardListSection } from "../utils/constants.js";

const cardList = new Section(
  {
    data: messageList,
  },
  cardListSection
);

cardList.renderItems();
