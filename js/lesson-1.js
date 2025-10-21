const  word = "hello world";
console.log(word);
console.log("hello world");
let age = 25;
age += 1;
console.log(age)
age -= 1;
console.log(age)
age *= 2;
console.log(age);
age /= 2;
console.log(age);
age %= 3;
console.log(age);

const quantity = 17;
console.log(typeof quantity); // виведе "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // виведе "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"

let username;
console.log(typeof username); // виведе "undefined"

let status = null;
console.log(typeof status); // виведе "object"


const messageNew = "Mango " + "is" + " happy";
console.log(messageNew); // "Mango is happy"


console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"


const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"


const productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12


const product = "Repair droid";
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'


console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN


console.log(Number.parseInt("5")); // 5 
console.log(Number.parseInt("5.5")); // 5 
console.log(Number.parseInt("5cm")); // 5
console.log(Number.parseInt("12qwe74")); // 12 
console.log(Number.parseInt("12.46qwe79")); // 12 
console.log(Number.parseInt("cm5")); // NaN 
console.log(Number.parseInt("")); // NaN 
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN


console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1

console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2

console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2

console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2


console.log(Math.min(20, 10, 50, 40)); // 10
console.log(Math.max(20, 10, 50, 40)); // 10

console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294


console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2));  //  ”5.00”
console.log((8.762195).toFixed(4));  //  “8.7622”


function makeTransaction(quantity, pricePerDroid) {
  return `You ordered ${Number.parseInt(quantity)} droids worth ${Number.parseInt(quantity) * Number.parseFloat(pricePerDroid)} credits!`;
}
console.log(makeTransaction(5.5, "3000px")); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


const transaction = (quantity, pricePerDroid) => `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
console.log(transaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(transaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(transaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


function getShippingMessage(country, price, deliveryFee) {
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

const shippingMessage = (country, price, deliveryFee) => `Shipping to ${country} will cost ${price + deliveryFee} credits`;
console.log(shippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(shippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(shippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


function getElementWidth(content, padding, border) {
  return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


const elementWidth = (content, padding, border) => Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
console.log(elementWidth("50px", "8px", "4px")); // 74
console.log(elementWidth("60px", "12px", "8.5px")); // 101
console.log(elementWidth("200px", "0px", "0px")); // 200

let ages = 24;
console.log("Poly is " + ages + " years old!"); 
const messages = "Poly is " + ages + " years old!";
ages+=1;
console.log("Poly is " + ages + " years old!"); 


function makeTransaction(quantity, pricePerDroid){
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;

}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

const totalPriceTwo = (quantity, pricePerDroid) => {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
};
console.log(totalPriceTwo(5, 3000)); 
console.log(totalPriceTwo(3, 1000));
console.log(totalPriceTwo(10, 500)); 

function getShippingMessage(country, price, deliveryFee){
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost  ${totalPrice} credits`;

}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

const getShippingMessageTwo = (country, price, deliveryFee) => {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost  ${totalPrice} credits`;

}
console.log(getShippingMessageTwo("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessageTwo("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessageTwo("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

function getElementWidth (content, padding,  border){
  const ElementWidth = Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border);
  return  `${ElementWidth}px`;

}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


const getElementWidthTwo = (content, padding,  border) => {
 const ElementWidth = Number.parseFloat(content) + 2 * Number.parseFloat(padding) + 2 * Number.parseFloat(border);
 return  `${ElementWidth}px`;
}
console.log(getElementWidthTwo("50px", "8px", "4px")); // 74
console.log(getElementWidthTwo("60px", "12px", "8.5px")); // 101
console.log(getElementWidthTwo("200px", "0px", "0px")); // 200
