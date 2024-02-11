const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

// Example usage:
console.log(pizzaPalace.order("Smoked")); // Returns "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); // Returns "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); // Returns "Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order("Viennese")); // Returns "Sorry, there is no pizza named «Viennese»"




const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// Example usage:
console.log(parent.hasOwnProperty("surname")); // Returns true
console.log(parent.hasOwnProperty("heritage")); // Returns true

console.log(child.hasOwnProperty("name")); // Returns true
console.log(child.name); // Returns "Jason"
console.log(child.hasOwnProperty("age")); // Returns true
console.log(child.age); // Returns 27

console.log(child.hasOwnProperty("surname")); // Returns false
console.log(child.surname); // Returns "Moore"
console.log(child.hasOwnProperty("heritage")); // Returns false
console.log(child.heritage); // Returns "Irish"

console.log(parent.isPrototypeOf(child)); // Returns true


const apartment = {
	rooms: 4,
	floor: 2,
	taxFree: false
};

const condo = Object.create(apartment);
condo.rooms = 3; 

console.log(condo.rooms);

class MyClass {
	static b = 5;

	constructor(value) {
		this.a = value;
	}
}

const instance = new MyClass(10);
console.log(instance.b);
