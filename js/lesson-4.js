const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const userLocation = user.location;
console.log(userLocation); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"


const books = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(books.title); // "The Last Kingdom" 
console.log(books["title"]); // "The Last Kingdom" 

console.log(books.genres); // ["historical prose", "adventure"]
console.log(books["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(books.propKey); // undefined
console.log(books[propKey]); // "Bernard Cornwell"

const name = "Henry Sibola";
const age = 25;

const userr = {
  name,
  age,
};

console.log(userr.name); // "Henry Sibola"
console.log(userr.age); // 25



const bookss = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in bookss) {
  console.log(key); // Ключ
  console.log(bookss[key]);  // Значення властивості з таким ключем
}

const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

const books1 = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books1) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}

const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

bookShelf.books.push("The Mist");
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]


const temps = [14, -4, 25, 8, 11];
console.log(...temps); // 14 -4 25 8 11  набір окремих чисел 
// ✅ Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25
console.log(Math.min(...temps));
console.log(Math.tan(...temps));


function isEnoughCapacity(products, containerSize) {
    let allProducts = 0;
    for (let product in products){
        allProducts += products[product];
    }
    return allProducts <= containerSize; 
}
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true
console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false
console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true
console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

const isEnoughCapacityy = (products, containerSize) => Object.values(products).reduce((total, current) => total + current, 0) <= containerSize;
console.log(
  isEnoughCapacityy({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true


function calcAverageCalories(days) {
    
    if (days.length == 0) {
        return 0;
    }
        
    let allCalories = 0;
    
    for (let i in days) {
        allCalories += days[i].calories;
    }
    return allCalories / days.length;
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180
console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270
console.log(
  calcAverageCalories([])
); // 0

const calcAverageCaloriess = days => days.length > 0 ? days.reduce((sum, day) => sum + day.calories, 0)/days.length : 0;
console.log(
  calcAverageCaloriess([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270
console.log(
  calcAverageCaloriess([])
); // 0


//HW3
const profile = {
    username: "Jacob",
    playTime: 300,
  
    changeUsername(newName) {
        this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`
    }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"