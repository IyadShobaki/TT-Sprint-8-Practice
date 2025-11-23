"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Passing speak method to dog class
var speak = function speak(thisDog) {
  console.log("".concat(thisDog.name, " says woof"));
};

var Dog =
/*#__PURE__*/
function () {
  function Dog(name, speak) {
    _classCallCheck(this, Dog);

    this.name = name;
    this._speak = speak;
  }

  _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      this._speak(this);
    }
  }]);

  return Dog;
}();

var spot = new Dog("Spot", speak);
spot.speak(); //////////////////////////////

console.log("-------------------------------------"); //////////

function logStuff(_ref, selector) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age, selector);
}

console.log(logStuff({
  name: "Jacques",
  age: 111,
  selector: ".profile"
})); // Jacques 111 undefined

console.log(logStuff({
  name: "Jacques",
  age: "111"
}, ".profile")); // Jacques 111 .profile

console.log(logStuff({
  name: "Jacques"
}, ".profile")); // Jacques undefined .profile

console.log(logStuff("Jacques", 111, ".profile")); // undefined undefined 111
// both name and age will be undefined,
// since the first argument is a string and doesn't
// contain properties that have those names. The second argument is
// the number 111, which gets mapped to the selector. The third argument is not accessed in the function.