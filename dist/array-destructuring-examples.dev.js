"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getWeather = function getWeather() {
  return ["sunny", "rainy", "cloudy"];
}; // replace code here using array destructuring syntax


var weather = getWeather(); // console.log(weather[0]);
// console.log(weather[1]);
// console.log(weather[2]);
// const [morning, afternoon, evening] = getWeather();

var _getWeather = getWeather(),
    _getWeather2 = _slicedToArray(_getWeather, 3),
    afternoon = _getWeather2[1],
    evening = _getWeather2[2]; //console.log(morning);


console.log(afternoon);
console.log(evening); //Arrays of a predefined length are called tuples.