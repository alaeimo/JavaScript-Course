"use strict";
//////////////////////////////////////////////////////////////////////////////
// Scoping in Practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName},you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1985 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "New Output";
    }
    console.log(millenial);
    // console.log(add(7, 3));
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
*/
//////////////////////////////////////////////////////////////////////////////
// Hoisting and TDZ in Practice

//Variables
/*
console.log(me);
console.log(job);
console.log(year);

var me = "Jonas";
let job = "Teacher";
const year = 1995;
*/

//Functions
/*
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

//Example
/*
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");}
*/

/*
var x = 5;
let y = 6;
const z = 10;

if (x === window.x) console.log("x");
if (y === window.y) console.log("y");
if (z === window.z) console.log("z");
*/

//////////////////////////////////////////////////////////////
//The this Keyword in Practice
/*
console.log(this); //window

const calcAgeDecl = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined
};

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //window
};

calcAgeDecl(1984);
calcAgeArrow(1974);

const Jonas = {
  firstName: "Jonas",
  year: 1988,
  calcAge: function () {
    console.log(`${this.firstName} is ${2037 - this.year}`);
    console.log(this); //Jonas Object

    // const self = this;
    // const isMillenial = function () {
    //   //   if (this.year >= 1985 && this.year <= 1996) console.log(this.year);
    //   if (self.year >= 1985 && self.year <= 1996) console.log(self.year);
    // };
    // isMillenial();

    const isMillenial = () => {
      if (this.year >= 1985 && this.year <= 1996) console.log(this.year);
    };
    isMillenial();
  },
  //don't use a arrow function as a method
  greet: () => console.log(`Hey ${this.firstName}`),
};

Jonas.calcAge();
Jonas.greet();

const Jolia = {
  firstName: "Jolia",
  year: 2018,
};

Jolia.calcAge = Jonas.calcAge;
Jolia.calcAge();
*/

//argument keyword
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 4, 5, 6);

addArrow(2, 3);
*/
////////////////////////////////////////////////////
// Primitives vs. Objects in Practice
/*
// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage: ", marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);


*/
