/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

const list = document.querySelector(".todo-list");

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if (!response.ok){
            throw new Error(`Response error with status ${response.status}`)
        }

        return response.json()
    })
    .then(data => {
        
        // let html = '';
        // for (let {title} of data){
        //     html += `<li>${title}</li>`
        // }

        // list.innerHTML = html;

        // list.innerHTML = data.map(({title}) => {
        //     return `<li>${title}</li>`
        // }).join('')



    })
    .catch(error => {
        alert('Incorrect request!')
    })



/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

// оце з документації
const KEY = '42676723-0286cb816b5743467714b50d3';
const BASE_URI = 'https://pixabay.com/api/';
const QUERY = 'forest+mountains'
// такий загальний вигляд посилання
const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;


function getImages(){
    return fetch(LINK)
        .then(response => {
            if (!response.ok){
                throw new Error('Image error!')
            }

            return response.json()
        })
        .catch(error => {
            alert('Error while fetching images from pixabay!')
        })
}

getImages().then(data => {
    const images = data.hits.slice(0, 3);
    
    document.body.innerHTML = images.map(({webformatURL}) => {
            return `<img src="${webformatURL}">`
        }).join('')

})





/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

/**
 * Read (GET)
 */

// const apiUrl = "https://65d63786f6967ba8e3bdba79.mockapi.io/api/v1/";

// function fetchBooks() {
//   return fetch(apiUrl + 'books')
//     .then((res) => res.json())
// }

// function fetchBookById(bookId) {
//   return fetch(`${apiUrl}books/${bookId}`)
//     .then((res) => res.json())
// }

// // fetchBooks();
// // fetchBookById(2);
// // fetchBookById(4);

// /**
//  * Create (POST)
//  */

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(book)
//   }

//   // console.log(book);

//   return fetch(apiUrl + 'books', options).then(res => res.json())
// }

// // addBook({
// //   title: "Тестова книга з CSS",
// //   author: "Я",
// //   genres: ["CSS"],
// //   Rating: 9,
// // })
// //   .then((book) => {
// //     console.log("Прийшла відповідь від бекенда можна малювати");
// //     console.log(book);
// //   })
// //   .catch((error) => console.log(error));

// // addBook({
// //   title: "Тестова книга з HTML",
// //   author: "Я",
// //   genres: ["HTML"],
// //   Rating: 7,
// // }).then((book) => {
// //   console.log("Прийшла відповідь від бекенда можна малювати");
// //   console.log(book);
// // });

// /**
//  * Update (PUT/PATCH)
//  */

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PUT',
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(update)
//   }


//   return fetch(`${apiUrl}books/${bookId}`, options).then(response => response.json())
// }

// // updateBookById({ title: "Велика нова книга по NODEJS" }, 19);
// // updateBookById({ rating: 1 }, 18);
// // updateBookById({ rating: 4, author: "Манго" }, 17);

// /**
//  * Delete (DELETE)
//  */

// // function removeBook(bookId) {
// //   const config = {
// //     method: 'DELETE'
// //   }

// //   return fetch(`${apiUrl}books/${bookId}`, config).then(res => res.json())

// // }

// // removeBook(15);
// // removeBook(14);


// const ENDPOINT = 'https://65d63786f6967ba8e3bdba79.mockapi.io/api/v1/users';


// function saveNewUser(name, city){
//     const data = JSON.stringify({
//         name, city
//     })

//     const config = {
//         method: 'POST',
//         body: data,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }

//     return fetch(ENDPOINT, config).then(response => response.json())
// }

// function getAllUsers(){
//     return fetch(ENDPOINT).then(res => res.json())
// }


// // saveNewUser('Alex', 'London').then(data => {
// //     console.log('User created!', data)
// // })


// const a = getAllUsers();
// a.then((data) => console.log(data))