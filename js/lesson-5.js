function greet(name) {
  console.log(`Welcome ${name}!`);
}
function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest("Mango", greet); // "Registering Mango!"
															 // "Welcome Mango!"

registerGuest("Mango", notify); // "Registering Mango!"
																// "Dear Mango, your room will be ready in 30 minutes"


const numbers = [5, 10, 15, 20, 25];
// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}
// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

function filterArray(numbers, value) {
  const result = [];
  numbers.forEach(function (number) {
    if (number > value) {
      result.push(number);
    }
  });
  return result;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // Виводить: [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // Виводить: [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // Виводить: []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // Виводить: [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // Виводить: [24, 41, 76]

const filterArrayy = (numbers, value) => numbers.filter(number => number > value);
console.log(filterArrayy([1, 2, 3, 4, 5], 3)); // Виводить: [4, 5]

const add = (...args) => {
  console.log(args);
};
add(1, 2, 3); // [1, 2, 3]

const numberss = [5, 10, 15, 20, 25];
const logMessage = (number, index) => console.log(`Inex ${index}, value ${number}`);
numbers.forEach(logMessage);

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbersss = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbersss, 2);
// Мутація вихідних даних не відбулася
console.log(numbersss); // [1, 2, 3, 4, 5]
// Функція повернула новий масив зі зміненими даними
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]
// Оригінальний масив не змінився
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
const planetsLengths = planets.map(planet => planet.length*10);
console.log(planetsLengths); // Вивід: [5, 4, 5, 7]


const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];
const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

const values = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
console.log(values); // [51, -3, 27, 21, -68, 42, -37]


const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const studentss = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];
const best = studentss.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi
const worst = studentss.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax
// У колбек-функції зручно деструктуризувати властивості об'єкта
const average = studentss.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston


const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined

const total = [2, 7, 3].reduce((previousValue, number) => previousValue + number, 0);
console.log(total); // 12

const players = {
  player1: 420,
  player2: 156,
  player3: 355,
  player4: 122
};
const playtimes = Object.values(players);
const totalPlayTime = playtimes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalPlayTime); // Вивід: 1053

const studentsss = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];
// Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = studentsss.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;


console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0
console.log("b".localeCompare("b")); // 0

const names = students
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);
console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]


const getUserNames = users => users.map(user => user.name).toSorted((a, b) => a.localeCompare(b) );
console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];
console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]
console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]
console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []


const sortByDescendingFriendCount = users => users.toSorted((a, b) => a.friends.length - b.friends.length); 
console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]


const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((accumulator, value) => accumulator + value.balance, 0); 
const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
