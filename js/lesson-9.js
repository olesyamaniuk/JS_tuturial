/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

localStorage.setItem('myKey', 'Hello world from js!')
const value = localStorage.getItem('myKey');
console.log(value);
// localStorage.setItem('name', 'Maksim');
// localStorage.setItem('age', 45)
// localStorage.setItem('name', 'Alex');
// localStorage.removeItem('name');
// localStorage.clear();
// console.log(localStorage);


/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
// const jsonData = JSON.stringify(names)
// localStorage.setItem(LS_KEY, jsonData);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const rawData = localStorage.getItem(LS_KEY);
// const data = JSON.parse(rawData);
// console.log(data);

/**
 * Видалення
 */

// localStorage.removeItem(LS_KEY);

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };



// practice

// const info = {
//   username: 'Alex',
//   city: 'London',
//   points: [1, 2, 3],

//   test(){
//     console.log('Hello world!')
//   }
// }

// const jsonData = JSON.stringify(info);
// console.log(jsonData)


// const jsonData = `{"username":"Alex","city":"London","points":[1,2,3]}`


// const data = JSON.parse(jsonData);
// console.log(data.username);


// const users = [
//   'Alex',
//   'Andrew',
//   'Viktor',
//   null,
//   NaN,
//   undefined
// ];

// console.log(JSON.stringify(users));

// const jsData = `["Alex","Andrew","Viktor",null,null,null]`
// console.log(JSON.parse(jsData))
// ---------------------------------------------------------------------------------

const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
// const textarea = form.querySelector("textarea");

function readFormData(form){
    const message = form.message.value;
    const username = form.name.value;
    return {
        message,
        username
    }
}

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // localStorage.clear()
    localStorage.removeItem(STORAGE_KEY)
    form.reset()
})


/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
})

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData){
    const data = JSON.parse(rawData);
    form.name.value = data.username;
    form.message.value = data.message;
}