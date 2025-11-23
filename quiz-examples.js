// Passing speak method to dog class
const speak = (thisDog) => {
  console.log(`${thisDog.name} says woof`);
};

class Dog {
  constructor(name, speak) {
    this.name = name;
    this._speak = speak;
  }

  speak() {
    this._speak(this);
  }
}

const spot = new Dog("Spot", speak);
spot.speak();

//////////////////////////////

console.log("-------------------------------------");

//////////

function logStuff({ name, age }, selector) {
  console.log(name, age, selector);
}

console.log(logStuff({ name: "Jacques", age: 111, selector: ".profile" })); // Jacques 111 undefined
console.log(logStuff({ name: "Jacques", age: "111" }, ".profile")); // Jacques 111 .profile
console.log(logStuff({ name: "Jacques" }, ".profile")); // Jacques undefined .profile

console.log(logStuff("Jacques", 111, ".profile")); // undefined undefined 111
// both name and age will be undefined,
// since the first argument is a string and doesn't
// contain properties that have those names. The second argument is
// the number 111, which gets mapped to the selector. The third argument is not accessed in the function.
