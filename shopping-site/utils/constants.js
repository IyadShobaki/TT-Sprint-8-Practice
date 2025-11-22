const items = [
  {
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
    title: "BIOLOID",
    description:
      "Robot Kit is a popular series of robot construction kits from the company Robotis. The series includes various sets designed both for beginners and for advanced users. In this kit, you'll find everything you need to build unique types of robots and make your own custom designs. The set comes with a software tool for programming, a remote controller, servo motors, and much more.",
    price: "$999",
  },
  {
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail.jpg",
    title: "BIOLOID Premium kit",
    description:
      "BIOLOID Premium Kit has everything needed to build bipedal robots and includes Dynamixel Smart Servo Motor and the CM-530 controller. BIOLOID Premium Kit is perfect for education, entertainment, and robotics competitions.",
    price: "$1800",
  },
  {
    image:
      "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/oop/moved_card_detail2.png",
    title: "Airwheel",
    description:
      "This bicycle model allows you to use both the pedal and the electric motor, or a combination of both. Airwheel R8 is equipped with a removable battery set to ensure sufficient power supply and to make your trips longer.",
    price: "$2000",
  },
];

const cardListSelector = ".card-list__items";
const cardList = document.querySelector(".card-list__items");
const popupElement = document.querySelector(".popup");
const popupImage = document.querySelector(".popup__image");
const popupCloseButton = document.querySelector(".popup__close");
const popupCaption = document.querySelector(".popup__caption");
const defaultCardButton = document.querySelector(".filter__button_type_grid");
const horizontalCardButton = document.querySelector(
  ".filter__button_type_column"
);

export {
  items,
  cardListSelector,
  cardList,
  popupElement,
  popupImage,
  popupCloseButton,
  popupCaption,
  defaultCardButton,
  horizontalCardButton,
};
