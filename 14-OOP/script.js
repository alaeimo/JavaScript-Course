"use strict";

//////////////////////////////////////////////////////////
// Constructor Functions and the new Operator

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

//////////////////////////////////////////////////////////
//Prototypes
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

/////////////////////////////////////////////////////////////
