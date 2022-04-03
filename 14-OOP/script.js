"use strict";

//////////////////////////////////////////////////////////
// Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  //   }
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. functino automatically return {}

const mohammad = new Person("mohammad", 1996);
console.log(mohammad);

console.log(mohammad instanceof Person);
*/
//////////////////////////////////////////////////////////
//Prototypes
/*
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
mohammad.calcAge();

console.log(Person.prototype);
console.log(jonas.__proto__);
console.log(mohammad.__proto__);

console.log(Person.prototype === jonas.__proto__);
console.log(Person.prototype === mohammad.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(mohammad));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, mohammad.species);
console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
*/
/////////////////////////////////////////////////////////////

/*
console.log(jonas.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [2, 3, 8, 9, 9, 7];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector("h1");
console.dir(h1);
console.dir((x) => x + 1);
*/
///////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  //properties
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} speed is ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} speed is ${this.speed}`);
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();

Mercedes.accelerate();
Mercedes.accelerate();

Mercedes.brake();
Mercedes.brake();
*/
//////////////////////////////////////////////////////////////////
// ES6 Classes

//class expression
/*
const Person = class {

}
*/

//class declaration
/*
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new Person("Jessica", 1996);
jessica.calcAge();

// Person.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
console.log(jessica);

// 1. Classes are not hoisted (interpreter doesn't move the declaration to the top of their scope)
// 2. Classes are first-class citizens (ability to treat classes as values)
// 3. Classes are executed in strict mode
*/
//////////////////////////////////////////////////////
//Setters and Getters

//objects setter and getter
const account = {
  owner: "Jonas",
  movements: [200, -100, 500, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.movements);
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

//class setter and getter
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  set firstName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("${name} is not a full name");
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const sara = new Person("Sara Jackson", 1996);
console.log(sara);
console.log(sara.age);

//////////////////////////////////////////////////////////////
