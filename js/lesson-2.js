const grade = 85;
if (grade >= 90) {
  console.log('Perfectly');
} else if (grade >= 80) {
  console.log('Good');
} else if (grade >= 70) {
  console.log('Satisfactorily');
} else {
  console.log('Unsatisfactorily');
}
function checkStorage(available, ordered) {
  // if (ordered >= available) {
  //   return "Not enough goods in stock!";
  // } else {
  //   return "Order is processed, our manager will contact you";
  // }
  if (ordered <= available) {
    return 'Order is processed, our manager will contact you';
  } else {
    return 'Not enough goods in stock!';
  }
}

console.log(checkStorage(100, 50));
const a = 15;
const b = 10;
const biggerNumber = a < b ? b : a;
console.log(biggerNumber);

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);

function checkPassword(password) {
  const correctPassword = 'jqueryismyjam';

  const result =
    password === correctPassword
      ? 'Access granted'
      : 'Access denied, wrong password!';

  return result;
}
console.log(checkPassword('jqueryismyjam'));
console.log(checkPassword('angul4r1sl1f3'));
console.log(checkPassword('r3actsux'));

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
const globalVar = 'Global';

console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// Немає доступу до aVar, bVar і cVar
if (true) {
  const aVar = 'A';
  console.log(globalVar); // Доступ до globalVariable з блоку A
  console.log(aVar); // Доступ до aVar з блоку A
  // Немає доступу до bVar і cVar

  if (true) {
    const bVar = 'B';
    console.log(globalVar); // Доступ до globalVariable з блоку B
    console.log(aVar); // Доступ до aVar з блоку B
    console.log(bVar); // Доступ до bVar з блоку B
    // Немає доступу до cVar
  }
}

console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar
if (true) {
  const cVar = 'C';
  console.log(globalVar); // Доступ до globalVar з блоку C
  console.log(cVar); // Доступ до cVar з блоку C
  // Немає доступу до aVar і bVar
}
console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// Немає доступу до aVar, bVar і cVar

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true
if (null) {
  console.log('Block if');
} else {
  console.log('Block else');
}

if (0) {
  console.log('Block if');
} else {
  console.log('Block else');
}
if (5) {
  console.log('Block if');
} else {
  console.log('Block else');
}
console.log('hello' && 5); // 5
console.log(5 && 'hello'); // "hello"

console.log('mango' && 'poly'); // "poly"
console.log('poly' && 'mango'); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3

console.log('hello' && 0); // 0
console.log(0 && 'hello'); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ''); // 0
console.log('' && 0); // ""

const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

function getScreenType(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return 'Mobile screen';
  } else if (screenWidth > sm && screenWidth <= md) {
    return 'Tablet screen';
  } else if (screenWidth > md && screenWidth <= lg) {
    return 'Desktop screen';
  } else {
    return 'Godzilla screen';
  }
}

console.log(getScreenType(700)); // "Tablet screen"
console.log(getScreenType(1200)); // "Desktop screen"
console.log(getScreenType(1500)); // "Godzilla screen"
console.log(getScreenType(320)); // "Mobile screen"

const message = ' JavaScript is awesome ';
console.log(message.toLowerCase());
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(message.length);
console.log(message.trim());

const fullName = 'Jacob Mercer';
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

const username = 'Jacob Mercer';
console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false

const str1 = 'Hello, world!';
console.log(str1.startsWith('Hello')); // true
console.log(str1.startsWith('hello')); // false (метод чутливий до регістру)

const str2 = 'Hello, world!';
console.log(str2.endsWith('world!')); // true
console.log(str2.endsWith('World!')); // false (метод чутливий до регістру)

let count = 0;

while (count < 5) {
  console.log(`Count: ${count}`);
  count += 1;
}
let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}
function countClients(clientCounter, maxClients) {
  let counter = clientCounter; // створюємо локальну змінну

  while (counter > maxClients) {
    console.log(counter);
    counter -= 1;
  }
}
countClients(10, 5);
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

function sumUpTo(number) {
  let sum = 0;

  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }

  return sum;
}
for (let i = 0; i <= 5; i += 2) {
  console.log(i);
}

console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(0)); // 0

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

const transaction = (quantity, pricePerDroid, customerCredits) => {
  const totalPrice = quantity * pricePerDroid;
  return totalPrice > customerCredits
    ? 'Insufficient funds!'
    : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
};
console.log(transaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(transaction(10, 5000, 8000)); // "Insufficient funds!"

function formatMessage(message, maxLength) {
  return message.length > maxLength
    ? message.slice(0, maxLength) + '...'
    : message;
}
console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

const formatMessages = (message, maxLength) => {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + '...';
  }
};

console.log(formatMessages('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMessages('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

const checkForSpam = message =>
  message.includes('spam') || message.includes('sale');
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('Get best sale offers now!')); // true

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
      return 'Sorry, there is no delivery to your country';
  }
  return `Shipping to ${country} will cost ${price} credits`;
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
