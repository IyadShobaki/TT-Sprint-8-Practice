const getWeather = () => {
  return ["sunny", "rainy", "cloudy"];
};

// replace code here using array destructuring syntax
const weather = getWeather();

// console.log(weather[0]);
// console.log(weather[1]);
// console.log(weather[2]);

// const [morning, afternoon, evening] = getWeather();
const [, afternoon, evening] = getWeather();
//console.log(morning);
console.log(afternoon);
console.log(evening);
//Arrays of a predefined length are called tuples.
