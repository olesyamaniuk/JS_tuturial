console.log(document);

// const body = document.body;
// console.log(body);

const list = document.querySelector(".list");
console.log(list);

// const lists = document.querySelectorAll('li');
// console.log(lists);

const parentNode = list.parentNode;
console.log(parentNode);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);
// ---------------------------------------------------------
const link = document.querySelector(".link");
console.log(link.href); // "<https://goit.global>"

link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"


const el = document.querySelector(".text")
const nested = document.querySelector(".sub-text")

console.log(el.textContent); // "Username: Mango"
console.log(nested.textContent); // "Mango"

el.textContent = "Username: Poly";
console.log(el.textContent);

console.log(link.classList); // ["link", "is-active", length: 2, value: "link is-active"]

const hasActiveClass = link.classList.contains("is-active"); // true
const hasActiveClasss = link.classList.contains("title"); // false
console.log(hasActiveClass);
console.log(hasActiveClasss);

link.classList.add("special");
console.log(link.classList); // ["link", "is-active", "special", length: 3, value: "link is-active special"]

link.classList.remove("is-active");
console.log(link.classList); // ["link", "special", length: 2, value: "link special"]

link.classList.toggle("is-active");
console.log(link.classList); // ["link", "special", "is-active", length: 3, value: "link special is-active"]

link.classList.replace("special", "regular");
console.log(link.classList); // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]
// -----------------------------------------------------------------------------

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object
// ---------------------------------------------------------------------------

const image = document.querySelector(".image");
console.log(image.hasAttribute("src")); // true
console.log(image.hasAttribute("href")); // false

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");
console.log(image.getAttribute("alt")); // Amazing nature

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false
    
// ---------------------------------------------------------------------------------
const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

// Змінюємо значення data-action для кнопки saveBtn
saveBtn.dataset.action = "update";

// Додаємо новий data-атрибут data-role
saveBtn.dataset.role = "admin";

// Перевіримо нові значення
console.log(saveBtn.dataset.action); // "update"
console.log(saveBtn.dataset.role); // "admin"
// ------------------------------------------------------------------------
const heading = document.createElement("h1");
heading.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const imagee = document.createElement("img");
// imagee.src = "<https://picsum.photos/id/11/320/240>";
imagee.alt = "Nature";
console.log(imagee); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />
// ------------------------------------------------------------------

const lists = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
lists.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
lists.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
lists.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
lists.after(text);

const textt = document.querySelector(".textt")
textt.remove();
// ---------------------------------------------------------------------------
const article = document.querySelector(".article");
console.log(article.innerHTML);

const titlee = document.querySelector(".article .titlee");
console.log(titlee.innerHTML);

const texttt = document.querySelector(".article .texttt");
console.log(texttt.innerHTML);

const linkkk = document.querySelector(".article .linkkk");
console.log(linkkk.innerHTML);

titlee.innerHTML = 'New and <span class="accent">improved</span> title';
// -----------------------------------------------------------------------------


const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const listq = document.querySelector(".listq");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
listq.innerHTML = markup;
// ----------------------------------------------------------------------
const listw = document.querySelector(".listw");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markupe = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

listw.insertAdjacentHTML("beforeend", markupe);
listw.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
// ---------------------------------------------------------------------
const buttonn = document.querySelector(".my-button");

buttonn.addEventListener("click", () => {
  console.log("The button was pressed and now the next image will appear");
});

const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");

let mrgn = 0;
function clickHandler(){
    mrgn += 50;
    box.style.margin = `${mrgn}px 0 0 ${mrgn}px`
}


clickMe.addEventListener('click', clickHandler)
// clickMe.removeEventListener('click', clickHandler)
buttonn.addEventListener('click', clickHandler)

// buttonn.addEventListener("click", handleClick);
// ----------------------------------------------------


const keyContainer = document.querySelector('.key');

function pressHandler(event){
    if (event.key !== ' '){
        keyContainer.textContent = event.key
    }
    else {
        keyContainer.textContent = 'SPACE'; 
    }
       
}

function upHandler(){
    keyContainer.textContent = null;
}

document.addEventListener('keydown', pressHandler)
document.addEventListener('keyup', upHandler)
// ----------------------------------------------------------------------------

const userName = document.querySelector(".js-user-name");

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

function inputHandler(event){
    console.dir(event.target.value)
}

function blurHandler(event){
    const name = event.target.value;
    alert(`Hello, ${name}`);
}

userName.addEventListener('input', inputHandler)
userName.addEventListener('blur', blurHandler)
// ----------------------------------------------------------------

const form = document.querySelector(".js-form");

function formHandler(event){
    event.preventDefault();
    const data = {
        email: event.target.email.value,
        password: event.target.password.value,
        comment: event.target.comment.value
    }

    console.log(data);
}

form.addEventListener('submit', formHandler)
// -----------------------------------------------
const boxRef = document.querySelector(".js-box");


boxRef.addEventListener('mousemove', event => {
    console.log(event)
})
boxRef.addEventListener('mouseenter', event => {
    console.log(event)
})
boxRef.addEventListener('mouseleave', event => {
    console.log(event)
})

boxRef.addEventListener('mouseout', event => {
    console.log(event)
})
// ---------------------------------------