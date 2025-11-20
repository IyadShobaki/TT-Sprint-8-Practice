// Object destructuring.
const tastySweets = { breakfast: "jam", lunch: "honey", dinner: "fudge" };
const { breakfast, lunch, dinner } = tastySweets;
console.log(breakfast, lunch, dinner); // jam honey fudge

// Changing variable names.
const { a: flavor, b: dish } = { a: "chocolate", b: "asparagus" };
console.log(flavor, dish); // chocolate asparagus

// Array destructuring.
const [flavor1, dish1] = ["spinach", "lasagna"];
console.log(flavor1, dish1); // spinach lasagna

// Destructuring function parameters.

const food = { flavor: "spinach", dish: "lasagna" };

const sillyDishMaker = ({ flavor, dish }) => {
  return `Here, let me serve you ${flavor} ${dish}`;
};

console.log(sillyDishMaker(food)); // Here, let me serve you spinach lasagna

// Default values
const { dish2 = "asparagus" } = dishObj;
const [flavor2 = "chocolate"] = flavorArr;

console.log(flavor2, dish2); // chocolate asparagus
