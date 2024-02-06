const grade = 85;
if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); 

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

const message = "JavaScript is awesome";
console.log(message.toLowerCase());
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(message.length);
console.log(message.trim())

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

const username = 'Jacob Mercer';
console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false

const str1 = "Hello, world!";
console.log(str1.startsWith("Hello")); // true
console.log(str1.startsWith("hello")); // false (метод чутливий до регістру)

const str2 = "Hello, world!";
console.log(str2.endsWith("world!")); // true
console.log(str2.endsWith("World!")); // false (метод чутливий до регістру)


function makeTransaction(quantity, pricePerDroid, customerCredits){
    let totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    }else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }   
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"

const transaction = (quantity, pricePerDroid, customerCredits) => {
    const totalPrice = quantity * pricePerDroid;
    return (totalPrice > customerCredits) ? "Insufficient funds!" : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"

function formatMessage(message, maxLength) {
    return (message.length > maxLength) ? message.slice(0, maxLength) + "..." : message;  
}
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"

const checkForSpam = (message) => (message.includes('spam') || message.includes('sale'));
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get best sale offers now!")); // true

function getShippingCost(country) {
  let price;
  switch (country.toLowerCase()) {
  case 'china':
    price = 100;
    break;
  case 'chile':
    price = 250;
    break;
  case 'australia':
    price = 170;
    break;
  case 'jamaica':
    price = 120;
    break;
  default:
    return "Sorry, there is no delivery to your country";
    
  }
  return `Shipping to ${country} will cost ${price} credits`;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
