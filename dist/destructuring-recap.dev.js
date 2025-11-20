"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Object destructuring.
var tastySweets = {
  breakfast: "jam",
  lunch: "honey",
  dinner: "fudge"
};
var breakfast = tastySweets.breakfast,
    lunch = tastySweets.lunch,
    dinner = tastySweets.dinner;
console.log(breakfast, lunch, dinner); // jam honey fudge
// Changing variable names.

var _a$b = {
  a: "chocolate",
  b: "asparagus"
},
    flavor = _a$b.a,
    dish = _a$b.b;
console.log(flavor, dish); // chocolate asparagus
// Array destructuring.

var flavor1 = "spinach",
    dish1 = "lasagna";
console.log(flavor1, dish1); // spinach lasagna
// Destructuring function parameters.

var food = {
  flavor: "spinach",
  dish: "lasagna"
};

var sillyDishMaker = function sillyDishMaker(_ref) {
  var flavor = _ref.flavor,
      dish = _ref.dish;
  return "Here, let me serve you ".concat(flavor, " ").concat(dish);
};

console.log(sillyDishMaker(food)); // Here, let me serve you spinach lasagna
// Default values

var _dishObj = dishObj,
    _dishObj$dish = _dishObj.dish2,
    dish2 = _dishObj$dish === void 0 ? "asparagus" : _dishObj$dish;

var _flavorArr = flavorArr,
    _flavorArr2 = _slicedToArray(_flavorArr, 1),
    _flavorArr2$ = _flavorArr2[0],
    flavor2 = _flavorArr2$ === void 0 ? "chocolate" : _flavorArr2$;

console.log(flavor2, dish2); // chocolate asparagus