const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
const numbers = [1, 2, 3, 4, 5]; // масив чисел

console.table(planets);

console.log(planets);
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'
console.log(planets.length);

const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + ",5"); // "1,true,Poly5"

console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'

const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words2 = message.split(" ");
console.log(words2); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 3)); // ['Earth', 'Mars', 'Venus']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(firstArray); // ["Mercury", "Venus"];
console.log(secondArray); // ["Mars", "Jupiter"];
console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1


planets.push("Jupiter");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']
planets.push("Saturn", "Neptune");
console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

planets.pop();
console.log(planets);

planets.unshift("Jupiter")
console.log(planets);

planets.shift();
console.log(planets);


for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

function getCommonElements(array1, array2) {
    const arr = [];
    for (let i = 0; i < array1.length; i += 1) {
        if (array2.includes(array1[i])){
            arr.push(array1[i]);
        }      
    }   
  return arr;
}
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))


for (const planet of planets) {
  console.log(planet);
}

function multiply() {
  let total = 1;
  for (const arg of arguments) {
    total *= arg;
  }
  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120


function multiplyy(...arr) {
  let total = 1;
  for (const arg of arr) {
    total *= arg;
  }
  return total;
}
console.log(multiplyy(1, 2, 3)); //  6
console.log(multiplyy(1, 2, 3, 4)); //  24
console.log(multiplyy(1, 2, 3, 4, 5)); //  120

function createReversedArray() {
    // Використовуємо метод Array.from() та spread-оператор для створення масиву з аргументів у зворотньому порядку
    const reversedArray = Array.from(arguments).reverse();
    return reversedArray;
}
console.log(createReversedArray(12, 85, 37, 4));

const createReversedArrayy = a => Array.from(a).reverse();
console.log(createReversedArrayy([12, 85, 37, 4]));


function slugify(title) {
    return title.split(' ').join('-').toLowerCase();
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"

const slugg = title => title.trim().split(' ').join('-').toLowerCase();
console.log(slugg("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugg("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


function makeArray(firstArray, secondArray, maxLength) {
    const arr = [];
    return arr.concat(firstArray).concat(secondArray).slice(0, maxLength);
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

const makeArr = (firstArray, secondArray, maxLength) => firstArray.concat(secondArray).slice(0, maxLength);
console.log(makeArr(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]


function filterArray(numbers, value) {
    const arr = []
    for (let number of numbers) {
        if (number > value) {
            arr.push(number);
        }
    }
    return arr;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


const filterArrayy = (numbers, value) => numbers.filter(number => number > value);
console.log(filterArrayy([1, 2, 3, 4, 5], 3)); // [4, 5]