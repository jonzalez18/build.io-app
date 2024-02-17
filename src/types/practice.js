"use strict";
exports.__esModule = true;
exports.multiplyByTwo = exports.multiply = void 0;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function multiplyByTwo(num) {
    return num * 2;
}
exports.multiplyByTwo = multiplyByTwo;
function uppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.substr(1);
}
var array1 = ['x', 'y'];
var array2 = array1;
var tuple = ['str', 1];
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var myFavoriteColor = Color.Blue;
console.log(Color[3]);
exports["default"] = uppercaseFirstLetter;
