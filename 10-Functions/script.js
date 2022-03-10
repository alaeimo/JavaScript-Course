"use strict";

//////////////////////////////////////////////////////////////////
//Default Parameters

/*
const bookings = [];

const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 25 * numPassengers
) {
  //ES5
  numPassengers = numPassengers || 1;
  price = price || 250;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };

  bookings.push(booking);
  console.log(bookings);
};

createBooking("EST021");
createBooking("EST021", 50);
createBooking("EST021", 50, 250);
createBooking("EST021", undefined, 250);
*/

////////////////////////////////////////////////////////////////////////
//How Passing Arguments Works Value vs. Reference
/*
const flightNumber = "HE06";
const passenger = {
  name: "Jonas",
  passport: 5698516539846,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = "HR026";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 5698516539846) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport.");
  }
};

checkIn(flightNumber, passenger);
console.log(flightNumber);
console.log(passenger);

const changePassport = function (passenger) {
  passenger.passport = Math.floor(Math.random() * 10000000000000);
};

changePassport(passenger);
checkIn(flightNumber, passenger);
console.log(flightNumber);
console.log(passenger);
*/

////////////////////////////////////////////////////////////////////////
//Functions Accepting Callback Functions
/*
const toOneWord = function (str) {
  return str.toLowerCase().split(" ").join("");
};

const oneUpperWord = function (str) {
  const [first, ...others] = str.toLowerCase().split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transform = function (str, func) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Transformed by ${func.name}`);
};

transform("JavaScript is the best", toOneWord);
transform("JavaScript is the best", oneUpperWord);

const sayHi = function () {
  console.log("Hi!");
};

document.body.addEventListener("click", sayHi);
*/
//////////////////////////////////////////////////////////////
//Functions Returning Functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//With arrow functions
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
greeterHey("Jonas");
greet("Hello")("Jack");
*/
/////////////////////////////////////////////
//The call and apply Methods
/*
const universityA = {
  name: "universityA",
  ranking: 15,
  students: [],
  applyToUni(studentName, department) {
    console.log(
      `${studentName} applied to the department of ${department} of the ${this.name}`
    );
    this.students.push({ student: studentName, department: department });
  },
};

universityA.applyToUni("Jack", "Computer Science");
console.log(universityA);

const universityB = {
  name: "universityB",
  ranking: 19,
  students: [],
};

const applyToUni = universityA.applyToUni;

//It doesn't work
// applyToUni("Sarah", "Neural Science");

//Using call method
applyToUni.call(universityB, "Josephin", "Electrical Engineering");
console.log(universityB);
// Using apply method
const arr = ["John", "Mechanical Engineering"];
applyToUni.apply(universityA, arr);
console.log(universityA);
applyToUni.apply(universityB, arr);
console.log(universityB);
applyToUni.call(universityA, ...arr);
console.log(universityA);
*/

/////////////////////////////////////////////////////////
//The bind Method

/*
const universityA = {
  name: "universityA",
  ranking: 15,
  students: [],
  applyToUni(studentName, department) {
    console.log(
      `${studentName} applied to the department of ${department} of the ${this.name}`
    );
    this.students.push({ student: studentName, department: department });
  },
};

universityA.applyToUni("Jack", "Computer Science");
console.log(universityA);

const universityB = {
  name: "universityB",
  ranking: 19,
  students: [],
};

const applyToUni = universityA.applyToUni;

const applyToUniA = applyToUni.bind(universityA);
applyToUniA("Janatan", "Computer Science");

const applyToUniAJack = applyToUni.bind(universityA, "Jack");
applyToUniAJack("Computer Science");

const lufthansa = {
  airline: "Lufthansa",
  planes: 300,
  buyPlain() {
    this.planes++;
    console.log(this.planes);
  },
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlain.bind(lufthansa));
*/
//////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let str = `${this.question}\n`;
    for (const item of this.options) str += `${item} \n`;
    const answer = Number(prompt(str));
    if (answer >= 0 && answer < this.answers.length) this.answers[answer]++;
    this.displayResults("array");
    this.displayResults("string");
  },

  displayResults(type) {
    if (type === "string")
      console.log(`Poll results are: ${this.answers.join(",")}`);
    else if (type === "array") console.log(this.answers);
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

const displayResults = poll.displayResults;
displayResults.call({ answers: [5, 2, 3] }, "array");
displayResults.call({ answers: [5, 2, 3] }, "string");
displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "array");
displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
*/

/////////////////////////////////////////////////////////
//Immediately Invoked Function Expressions (IIFE)
/*
const runOnce = function () {
  console.log("This function will never run again!");
};

runOnce();
runOnce();

(function () {
  console.log("This function will never run again!");
})();

(() => console.log("This function will NEVER run again!"))();
*/
/////////////////////////////////////////////////////////
//
/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
console.dir(booker);
booker();
booker();
booker();
*/
/////////////////////////////////////////////////////////
//More Closure Examples

//Example 01
let f;
const g = function () {
  const a = 25;
  f = function () {
    console.log(2 * a);
  };
};

const h = function () {
  const b = 569;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
f();

//Example 02
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", () => (header.style.color = "blue"));
})();
