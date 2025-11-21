import { cardList, items } from "./constants.js";
import DefaultCard from "../components/DefaultCard.js";
import HorizontalCard from "../components/HorizontalCard.js";

function renderElements(isGrid) {
  cardList.innerHTML = ""; // empty the contents of the container
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, ".default-card")
      : new HorizontalCard(item, ".horizontal-card");

    const cardElement = card.generateCard();

    cardList.append(cardElement);
  });
}

export { renderElements };
