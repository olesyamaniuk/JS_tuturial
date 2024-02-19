/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// // let clickCounter = 0;

// // document.addEventListener('click', (event) => {
// //     clickCounter++;
// //     console.log('Clicks:', clickCounter)
// // })

// parent.addEventListener('click', (event) => {
//     console.log('Parent')
//     console.log('Target: ', event.target)
//     console.log('CurrentTarget: ', event.currentTarget)
// })

// child.addEventListener('click', (event) => {
//     console.log('Child')
//     // event.stopImmediatePropagation()
//     event.stopPropagation()
    
//     console.log('Target: ', event.target)
//     console.log('CurrentTarget: ', event.currentTarget)
// })

// // child.addEventListener('click', (event) => {
// //     console.log('Second click on child!')
// // })

// innerChild.addEventListener('click', (event) => {
//     console.log('Inner child!')
//     event.stopPropagation()
//     console.log('Target: ', event.target)
//     console.log('CurrentTarget: ', event.currentTarget)
// })
// ---------------------------------------------------------------

/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

// const container = document.querySelector(".container");

// /**
//  * Дегегування подій
//  *
//  * Отримай колір квадратика по якому було здійснено клік
//  */

// container.addEventListener('click', (event) => {
//     // console.log('Clicked!', event.currentTarget)
//     // if (
//     //     event.target != document.querySelector('.container')
//     // ){
//     //     console.log(event.target.dataset.color)
//     // }
    

//     // if (
//     //     !event.target.classList.contains('container')
//     // ){
//     //     console.log(event.target.dataset.color)
//     // }

    
// })

/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

const container = document.querySelector(".products");
container.innerHTML = createProductsMarkup(products)
let currentModal;

function createProductsMarkup(products){
  return products.map(({id, img, name, price}) => `
    <li data-id="${id}" class="item">
      <img src="${img}" alt="">
      <h2>${name}</h2>
      <p>${price}</p>
    </li>
  `).join("")
}

// console.log(createProductsMarkup(products))

container.addEventListener('click', (event) => {
  if (event.target === event.currentTarget){
    return;
  }
// closest шукакє найблищий батьківський елемент заданим css селектором
  const card = event.target.closest('.item');
  const idClicked = card.dataset.id;
  
  const {
    img,
    name, price,
    description
  } = products.find((product) => product.id == idClicked)
  

  currentModal = basicLightbox.create(
    `<div class="modal">
      <img src="${img}" alt="">
      <h2>${name}</h2>
      <h3>${price}</h3>
      <p>${description}</p>
    </div>`
  )

  currentModal.show()
})


document.addEventListener('keyup', ({code}) => {
  if (code !== 'Escape'){
    return
  }

  currentModal.close()
})
// ------------------------------------------------------------------------

/**
 * Деструктуризація об'єкта
 */

// const user1 = {
//   username: 'Alex',
//   // age: 45,
//   city: 'London'
// }


// const {username, age=0} = user1;

// console.log(username, age)

// const user2 = {
//   username: 'Alex',
//   age: 45,
//   city: 'London'
// }

// const {username: u1, age: a1} = user1;
// const {username: u2, age: a2} = user2;

// console.log(u1, u2)

// let username = user.name;
// let age = user.age;

// let {name, city} = user;

// console.log(name)
// console.log(city)



// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const {username} = user;
// console.log(username)

/**
 * Глибока деструктуризація об'єкта
 */

// const { skills: {html, js, css} } = user;


// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];

// const [n1, n2, n3, n4, n5] = arr;
// console.log(n1, n2, n3,n4,n5)

// const [n1, n2, ...other] = arr;
// console.log(n1, n2, other)

// const n1 = arr[0]
// const n2 = arr[1]
// const n3 = arr[2]
// const n4 = arr[3]
// const n5 = arr[4]

// -----------------------------------------------------

/**
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: "Jacob name",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// Без деструктуризації
// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// З деструктуризацією
// function getUserName({
//   username,
//   skills: {
//     html, css, js
//   }
// }){
//   console.log(
//     `Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`
//   )
// }
// getUserName(user);


// function printInfo({username, age=0, city='error'}){
//   console.log(`Username -> ${username}, age -> ${age}, city -> ${city}`)
// }


// printInfo('Maksim', 34, 'London')
// printInfo('Maksim', undefined, 'London')

// printInfo({
//   username: 'Alex',

//   city: 'London'
// })

// printInfo({city: 'Kyiv'})


function countArray([n1, n2, n3]) {
  // return arr[0] + arr[1] + arr[2]
  return n1 + n2 + n3
}
console.log(countArray([1, 2, 3, 1, 2]))
// --------------------------------------------------------
/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: "Kate",
  },
  {
    name: "Alex",
  },
  {
    name: "Mark",
  },
];

/**
 * Без деструктуризації
 */
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */

// const names = [];

// for (const {name} of users) {
//   names.push(name);
// }

// console.log(names);

// const names = users.map(({name}) => name)
// console.log(names)
// ----------------------------------------------------------
/**
 * Деструктуризуй об'єкт таким чином щоб отримати значення name, 
 * surname, username
 */

const user = {
  id: 1,
  username: "harry_potter",
  profile: {
    name: "Harry",
    surname: "Potter",
    age: 25,
  },
};

// Деструктуризація об'єкта для отримання окремих змінних

const {
  username,
  profile: {
    name,
    surname
  }
} = user;

// Виведення отриманих значень
console.log(`Ім'я користувача: ${name}`);
console.log(`Прізвище користувача: ${surname}`);
console.log(`Ім'я користувача (за нікнеймом): ${username}`);
// --------------------------------------------------------------------
/**
 * Допиши функцію таким чином щоб кожна властивість
 * об'єкта product була незалежним параметром
 */

const product = {
  name: "Smart TV",
  price: 25000,
  category: "Electronics",
  details: {
    brand: "Samsung",
    color: "Black",
    weight: "15.5",
  },
};

function displayProductInfo({
  name,
  price,
  category,
  details: {
    brand,
    color,
    weight
  }
}) {
  console.log(`Назва товару: ${name}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log("Деталі:");
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}

// function displayProductInfo() {
//   console.log(`Назва товару: ${product.name}`);
//   console.log(`Ціна: ${product.price} грн`);
//   console.log(`Категорія: ${product.category}`);
//   console.log("Деталі:");
//   console.log(`- Бренд: ${product.details.brand}`);
//   console.log(`- Колір: ${product.details.color}`);
//   console.log(`- Вага: ${product.details.weight} кг`);
// }

displayProductInfo(product);
// -------------------------------------------------------------------
/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({a, b, c, d}) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const params = {
  a: 10,
  b: 15,
  c: 10,
  d: 15
}


const perimeter = calculateHousePerimeter(params);
console.log(`Периметр будинку: ${perimeter}`);