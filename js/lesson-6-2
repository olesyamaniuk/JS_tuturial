const user = {
  username: "Victor",
  showName() {
		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
    console.log(this);
    console.log(this.username);
  },
};
user.showName();

const showThis = () => {
  console.log("this in showThis: ", this);
};
showThis(); // this in showThis: window
//------------------------------------------------------------
const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: "Mango", [[Prototype]]: animal }
console.log(dog.name); // "Mango"
console.log(dog.legs); // 4

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false

console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false

for (const key in dog) {
  console.log(key); // "name" "legs"
}

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for(const key of Object.keys(dog)) {
	console.log(key); // "name"
}
// -------------------------------------------------------------------

class User {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
  
}
const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
mango.changeEmail("new@mail.com");

console.log(mango.getEmail()); // "new@mail.com"

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

const cucumber = new User("Cucumber", "cucumber@mail.com");

console.log(cucumber.getEmail());  // Output: “cucumber@mail.com”

console.log(User.prototype);

class Car {
  constructor(options) {
    this.brand = options.brand;
    this.model = options.model;
    this.price = options.price;
  }
}

const mangoo = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(mangoo);
const apple = new Car({ brand: "BMW", model: "X5", price: 58900 });
console.log(apple);
const banana = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(banana);
//-------------------------------------------------------------------------------

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// -----------------------------------------------------------------------------------------

class Storage{
    #items;

    constructor(items){
        this.#items = items;    
    }

    getItems(){
        return this.#items;
    }

    addItem(newItem){
        this.#items.push(newItem);
    }

    removeItem(itemToRemove){
        this.#items = this.#items.filter(i => i !== itemToRemove);
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//------------------------------------------------------------------------------------------

class StringBuilder{
    #value;
    constructor(value){
        this.#value = value;
    }
    getValue(){
        return this.#value;
    }
    padStart(str){
        this.#value = str + this.#value;
    }
    padEnd(str){
        this.#value = this.#value + str;
    }
    padBoth(str){
        this.padStart(str);
        this.padEnd(str);
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

