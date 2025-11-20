"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const userData = {
//   firstName: "William",
//   lastName: "Webberton",
//   age: 55,
// };
// // the function accepts one parameter called params
// const printUserParams = (params) => {
//   // now we can access the properties of the passed argument
//   // using the familar dot notation
//   console.log(params.firstName);
//   console.log(params.lastName);
//   console.log(params.age);
// };
// // we pass the userData object as the first argument of the function
// printUserParams(userData);
// /*
//   William
//   Webberton
//   55
// */
//-------------------------
var userData = {
  firstName: "William",
  lastName: "Webberton",
  age: 55
}; // instead of naming the parameter, we name the properties inside
// the parameter, using destructuring syntax

var printUserParams = function printUserParams(_ref) {
  var firstName = _ref.firstName,
      lastName = _ref.lastName,
      age = _ref.age;
  // we can no access the properties by their names, without using
  // dot notation
  console.log(firstName);
  console.log(lastName);
  console.log(age);
};

printUserParams(userData);
/*
  William
  Webberton
  55
*/
///--------------------------------------

var userData1 = {
  firstName: "William",
  lastName: "Webberton",
  age: 55
};

var printUserParams1 = function printUserParams1(_ref2, secondParameter) {
  var firstName = _ref2.firstName,
      lastName = _ref2.lastName,
      age = _ref2.age;
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(secondParameter);
};

printUserParams1(userData1, "second parameter");
/*
  William
  Webberton
  55
  second parameter
*/
//----------------------------- Method and class constructor parameters
// code without parameter destructuring

var Card = function Card(data) {
  _classCallCheck(this, Card);

  this._text = data.text;
  this._image = data.image;
  this._description = data.description;
}; // code with parameter destructuring


var Card1 = // immediately access object keys
function Card1(_ref3) {
  var text = _ref3.text,
      image = _ref3.image,
      description = _ref3.description;

  _classCallCheck(this, Card1);

  // now, the "data" object's keys
  // are stored in variables of the same name
  this._text = text;
  this._image = image;
  this._description = description;
}; ///-------------


var user = {
  name: "Name",
  job: "Job"
}; // object destructuring is used to assign object properties to variables

var name = user.name,
    job = user.job; // a function with a single destructured parameter

function logUserInfo(_ref4) {
  var name = _ref4.name,
      job = _ref4.job;
  console.log(name);
  console.log(job);
} // calling a function and passing it an object with name and job properties


logUserInfo(user); // calling a function and passing it an object with name and job properties
// in this case the object is created using shorthand assignment syntax

logUserInfo({
  name: name,
  job: job
}); // this is equivalent to the previous example, but without the shorthand

logUserInfo({
  name: name,
  job: job
}); /////-------------------

function createCard(_ref5, greeting) {
  var name = _ref5.name,
      job = _ref5.job;
  console.log("".concat(name, ", ").concat(job, ", ").concat(greeting));
}

createCard({
  name: "Elise",
  job: "Coder"
}, "Hi!"); // Elise, Coder, Hi!

createCard("Elise", "Coder", "Hi!"); // undefined, undefined, Coder

createCard({
  name: "Elise",
  job: "Coder",
  greeting: "Hi!"
}); // Elise, Coder, undefined
//-------------------
// replace the code of the countUserPosts() function

var countUserPosts = function countUserPosts(user) {
  return user.posts.length;
};

var user1 = {
  id: 2294611830,
  username: "leonardo.dv",
  posts: [{
    comment: "The Vitruvian Man",
    dateCreated: 1490
  }, {
    comment: "Portrait of a Musician",
    dateCreated: 1490
  }, {
    comment: "The portrait of a man in red chalk #selfie",
    dateCreated: 1512
  }]
};
console.log(countUserPosts(user1)); // 3

var countUserPosts1 = function countUserPosts1(_ref6) {
  var posts = _ref6.posts;
  return posts.length;
};

console.log(countUserPosts(user1)); // 3