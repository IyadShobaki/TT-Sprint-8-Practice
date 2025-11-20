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

const userData = {
  firstName: "William",
  lastName: "Webberton",
  age: 55,
};

// instead of naming the parameter, we name the properties inside
// the parameter, using destructuring syntax
const printUserParams = ({ firstName, lastName, age }) => {
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
const userData1 = {
  firstName: "William",
  lastName: "Webberton",
  age: 55,
};

const printUserParams1 = ({ firstName, lastName, age }, secondParameter) => {
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

class Card {
  constructor(data) {
    this._text = data.text;
    this._image = data.image;
    this._description = data.description;
  }
}

// code with parameter destructuring

class Card1 {
  // immediately access object keys
  constructor({ text, image, description }) {
    // now, the "data" object's keys
    // are stored in variables of the same name
    this._text = text;
    this._image = image;
    this._description = description;
  }
}

///-------------
const user = { name: "Name", job: "Job" };

// object destructuring is used to assign object properties to variables
const { name, job } = user;

// a function with a single destructured parameter
function logUserInfo({ name, job }) {
  console.log(name);
  console.log(job);
}

// calling a function and passing it an object with name and job properties
logUserInfo(user);

// calling a function and passing it an object with name and job properties
// in this case the object is created using shorthand assignment syntax
logUserInfo({ name, job });

// this is equivalent to the previous example, but without the shorthand
logUserInfo({ name: name, job: job });

/////-------------------

function createCard({ name, job }, greeting) {
  console.log(`${name}, ${job}, ${greeting}`);
}

createCard({ name: "Elise", job: "Coder" }, "Hi!"); // Elise, Coder, Hi!
createCard("Elise", "Coder", "Hi!"); // undefined, undefined, Coder
createCard({ name: "Elise", job: "Coder", greeting: "Hi!" }); // Elise, Coder, undefined

//-------------------

// replace the code of the countUserPosts() function
const countUserPosts = (user) => {
  return user.posts.length;
};

const user1 = {
  id: 2294611830,
  username: "leonardo.dv",
  posts: [
    { comment: "The Vitruvian Man", dateCreated: 1490 },
    { comment: "Portrait of a Musician", dateCreated: 1490 },
    {
      comment: "The portrait of a man in red chalk #selfie",
      dateCreated: 1512,
    },
  ],
};

console.log(countUserPosts(user1)); // 3

const countUserPosts1 = ({ posts }) => {
  return posts.length;
};

console.log(countUserPosts(user1)); // 3
