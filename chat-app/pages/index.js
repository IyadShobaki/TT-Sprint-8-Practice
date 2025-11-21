import DefaultCard from "../components/DefaultCard.js";
import UserCard from "../components/UserCard.js";
import { messageList } from "../utils/constants.js";

messageList.forEach((item) => {
  const card = item.isOwner
    ? new UserCard(item, ".card-template_type_user")
    : new DefaultCard(item, ".card-template_type_default");

  const cardElement = card.generateCard();

  document.body.append(cardElement);
});
