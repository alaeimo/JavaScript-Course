"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

///////////////////////////////////////////////////////
//Computing Usernames
//
const createUsernames = function (accounts) {
  accounts.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""))
  );
};

createUsernames(accounts);
/////////////////////////////////////////////////////

const displayMovements = function (account) {
  const movements = account.movements;
  containerMovements.innerHTML = "";
  movements.forEach(function (movement, index) {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}€</div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
/////////////////////////////////////////////////////

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);

  labelSumIn.textContent = `${income}€`;
  const outcome = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .reduce((acc, deposit) => acc + deposit);

  labelSumInterest.textContent = `${interest}€`;
};
/////////////////////////////////////////////////////
const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
  account.balance = balance;
};
////////////////////////////////////////////////////
const updateUI = function (accout) {
  //Display movements
  displayMovements(accout);
  //Display balance
  calcDisplayBalance(accout);
  //Display Summary
  calcDisplaySummary(accout);
};
///////////////////////////////////////////////////
let currentAccout;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccout = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccout?.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    //Display welcome
    labelWelcome.textContent = `Welcome back ${
      currentAccout.owner.split(" ")[0]
    }`;

    updateUI(currentAccout);
  }
  inputLoginUsername.value = inputLoginPin.value = "";
});
/////////////////////////////////////////////////

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    currentAccout.username !== recieverAccount?.username &&
    currentAccout.balance - amount > 0 &&
    recieverAccount
  ) {
    currentAccout.movements.push(-amount);
    recieverAccount.movements.push(amount);

    updateUI(currentAccout);
  }
  inputTransferAmount.value = inputTransferTo.value = "";
});
/////////////////////////////////////////////////
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccout.username &&
    Number(inputClosePin.value) === currentAccout.pin
  ) {
    const accountIndex = accounts.findIndex(
      (acc) => acc.username === currentAccout.username
    );
    accounts.splice(accountIndex, 1);
    containerApp.style.opacity = 0;
  }
});
/////////////////////////////////////////////////
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccout.movements.some((mov) => mov > amount * 0.1)) {
    currentAccout.movements.push(amount);
    updateUI(currentAccout);
  }
  inputLoanAmount.value = "";
});
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
//Simple Array Methods
/*
let arr = ["a", "b", "c", "d", "e", "f"];

//Slice
console.log(arr);
console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice(-3, -2));

//Splice
console.log(arr.splice(2));
console.log(arr);
console.log(arr.splice(1, -3));

//Reverce
arr = ["a", "b", "c", "d", "e", "f"];
const arr2 = ["g", "f", "e", "d", "c"];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

//Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log(arr);
console.log([...arr, ...arr2]);

//Join
console.log(letters.join(" - "));
*/

//////////////////////////////////////////////////////////
//Looping Arrays forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("____for loop____");
for (const [i, movement] of movements.entries()) {
  if (movement > 0)
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  else console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
}

console.log("____forEach____");

movements.forEach(function (movement, index, array) {
  if (movement > 0)
    console.log(`Movement ${index + 1} : You deposited ${movement}`);
  else
    console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
});
*/
//////////////////////////////////////////////////////////////
//forEach With Maps and Sets
/*
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "EUR", "GBP", "EUR", "USD"]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
*/
/////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = dogsJulia.slice(0, -2);
  const dogs = [...dogsJuliaCopy, ...dogsKate];
  dogs.forEach(function (age, index) {
    const checkAge =
      age >= 3
        ? `Dog number ${index + 1} is an adult, and is ${age} years old`
        : `Dog number ${index + 1} is still a puppy 🐶`;
    console.log(checkAge);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

///////////////////////////////////////////////////////
//The map Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

//map using regular function
const movementUSD = movements.map(function (movement) {
  return eurToUSD * movement;
});
console.log(movementUSD);

//map using arrow function
const movementDisplay = movements.map(
  (movement, index) =>
    `Movement ${index + 1} : You ${
      movement > 0 ? "deposited" : "withdrew"
    } ${movement}`
);
console.log(movementDisplay);

*/

///////////////////////////////////////////////////////
//The filter Method

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter((movement) => movement > 0);
const withdrawals = movements.filter((movement) => movement < 0);

console.log(deposits);
console.log(withdrawals);
*/

///////////////////////////////////////////////////////
//The reduce Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, mov) => acc + mov, 0);
console.log(balance);
*/
///////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (dogsAge) {
  const humanAge = dogsAge.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adultDogs = humanAge.filter((age) => age >= 18);
  const averageHumanAge =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  console.log(humanAge);
  console.log(adultDogs);
  console.log(averageHumanAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (dogsAge) {
  const averageHumanAge = dogsAge
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  console.log(averageHumanAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/
////////////////////////////////////////////////////////////
//The find method
/*
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
*/
///////////////////////////////////////////////////////////
//includes some and every
/*
//includes
console.log(account1.movements);
const a = account1.movements.includes(-130);
console.log(a);

//some
const b = account1.movements.some((mov) => mov > 0);
console.log(b);

//every
const c = account1.movements.every((mov) => mov > 0);
console.log(c);
*/
///////////////////////////////////////////////////////////
