"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/////////////////////////////////////////////////////
//Destructuring Arrays
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

////Switching variables
// const temp = first;
// first = second;
// second = temp;

// [first, second] = [second, first];

//Receive 2 return values from a function
// const [starter, main] = restaurant.order(0, 2);
// console.log(starter, main);

////Nested destructing
// const nested = [2, 3, [4, 5]];

// const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

////Default Values
// const [p = 1, q = 1, r = 1] = [5, 6];
// console.log(p, q, r);

/////////////////////////////////////////////////////
// Destructing Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

////Default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

////Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

////Nested objects

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

////Objects as arguments of functins
// restaurant.orderDelivery({
//   time: "20:30",
//   address: "via del sole, 21",
//   mainIndex: 1,
//   starterIndex: 0,
// });

///////////////////////////////////////////////
////The Spread Operator

// const arr = [7, 8, 9, 10];
// const newArray = [...arr];
// console.log(newArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// ////Copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// ////Join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// ////Iterables: arrays, strings, maps, sets, NOT objects

// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);
// console.log(${...str});

////Real-world example
// const ingredients = [
//   prompt("Ingredient 01?"),
//   prompt("Ingredient 02?"),
//   prompt("Ingredient 03?"),
// ];
// restaurant.orderPasta(...ingredients);

////Objects
// const newRestaurant = { fundedIn: 1998, ...restaurant, founder: "Jack" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurant.name = "Italiano";
// console.log(restaurantCopy);
// console.log(restaurant);

//////////////////////////////////////////
////Rest Pattern and Parameters
////SPREAD, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// ////REST, because on left side of =
// const [a, b, ...others] = [2, 3, 4, 5, 6];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFoods);

// ////Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

////funtions
// const add = function (...array) {
//   const sum = array.reduce((accumulator, curretValue) => {
//     return accumulator + curretValue;
//   }, 0);
//   console.log(sum);
// };

// add(2, 3);
// add(5, 8, 9, 6);
// add(3, 6, 8, 9, 7, 9, 2);

// const arr = [2, 6, 8, 7];
// add(...arr);

// const ingredients = ["Mashrooms", "Onion", "Olives", "Spinach"];
// restaurant.orderPizza(...ingredients);
// restaurant.orderPizza("Mashrooms");

// restaurant.orderPizza();

//////////////////////////////////////////////////////////
////Short Circuiting (&& and ||)

// ////____OR____
// console.log("____OR____");
// console.log(true || 0);
// console.log(7 || "Jonas");
// console.log(null || undefined);
// console.log("" || "Jonas");
// console.log(0 || null || "Hi" || undefined);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log("____OR____");

// ////____AND____
// console.log("____AND____");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas");
// console.log("Jonas" && 23 && null && "Jonas");

// if (restaurant.orderPizza) restaurant.orderPizza("Mashrooms", "Spinach");

// restaurant.orderPizza && restaurant.orderPizza("Mashrooms", "Spinach");
// console.log("____AND____");

//////////////////////////////////////////////////////////
////The Nullish Coalescing Operator

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests || 10;
// console.log(guest1);

// // Nullish: null and undefined (NOT 0 or '')
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);

//////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1)
const [player1, player2] = game.players;
console.log(player1, player2);

//2)
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3)
const [...allPlayers] = [...player1, ...player2];
console.log(allPlayers);

//4)
const [...players1Final] = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6)

const printGoals = function (...array) {
  console.log(array);
  console.log(`${array.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Alaba", "Davies");

printGoals(...game.scored);

//7)
team1 < team2
  ? console.log("team1 is more likely to win")
  : console.log("team2 is more likely to win");


  */

/////////////////////////////////////////////////////////////
////Looping arrays the for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// console.log(menu.entries());

// for (const item of menu.entries()) console.log(item);
// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
//////////////////////////////////////////////////////////////
////Enhanced Object Literals
/*
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const newRestaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
/*
  //Before ES6
  /*
  openingHours:openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  */
//After ES6
/*
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(newRestaurant);
*/

/////////////////////////////////////////////////////////////
/////Optional Chaining (.)
/*
//Without optional chaining
// console.log(restaurant.openingHours.mon.open);

////With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we will open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does't exist.");
console.log(restaurant.orderRice?.(0, 1) ?? "Method does't exist.");

//Arrays
// const users = [{ name: "Jack", age: 25 }];
const users = [];
console.log(users[0]?.name ?? "Array is empty");
*/

/////////////////////////////////////////////////////////////
//Looping Objects Object Keys, Values, and Entries
/*
//Properties
const properties = Object.keys(restaurant.openingHours);
for (const key of properties) console.log(key);

//Property Values
const values = Object.values(restaurant.openingHours);
for (const value of values) console.log(value);

//Entries
const entries = Object.entries(restaurant.openingHours);

for (const [day, { open, close }] of entries)
  console.log(`We open every ${day} at ${open} and close at ${close}`);
*/

////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1)

for (const [index, player] of game.scored.entries())
  console.log(`Goal ${index + 1} : ${player}`);

//2)
let sum = 0;
for (const value of Object.values(game.odds)) sum += value;
console.log(`Average odd is ${sum / 3}`);

//3)

for (const [key, value] of Object.entries(game.odds)) {
  let team = key === "x" ? "draw" : "victory " + game[key];
  console.log(`Odd of ${team}: ${value}`);
}

//4)

// const scorers = {};
// for(cons player of game.scored){
//   scorers[player] = scorers[player] ?? 0;
//   scorers[player]++;
// }

//OR 

const scorers = {};
for (const player of game.scored)
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);


console.log(scorers);

*/
////////////////////////////////////////////////////////////
////Sets
/*
const set = new Set(["Pizza", "Pasta", "Pizza", "Chocolate"]);
console.log(set);
console.log(set.size);
console.log(set.add("Chocolate"));
console.log(set.add("Lunch"));
console.log(set.delete("Chocolate"));
console.log(set.has("Chocolate"));
console.log(set.has("Pizza"));

for (const item of set) console.log(item);
const newArray = [...set];
console.log(newArray);

console.log(new Set("Jackmack"));
*/

/////////////////////////////////////////////////////////////
///Maps
/*
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Italy");
rest.set(2, "Switzerland");
rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]);
rest
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open!")
  .set(false, "We are closed!");

console.log(rest);
const time = 21;
const open = rest.get(time > rest.get("open") && time < rest.get("close"));
console.log(open);

console.log(rest.size);
console.log(rest.has(true));
console.log(rest.has("open"));
console.log(rest.has("coffee"));

// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));
*/

/////////////////////////////////////////////////////////////
///Maps Iteration
/*
const question = new Map([
  ["question", "What is the best programming language around the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  [4, "Python"],
  ["correct", 4],
  [true, "Correct Answer"],
  [false, "Incorrect!"],
]);

console.log(question.get("question"));
for (const [key, value] of question)
  if (typeof key === "number") console.log(`${key} : ${value}`);

const answer = Number(prompt("Your answer is ?"));
console.log(question.get(question.get("correct") === answer));
*/

//////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1)
const events = new Set(gameEvents.values());
console.log(events);

//2)
gameEvents.delete(64);
console.log(gameEvents);

//3)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();

//4)
for (const [key, value] of gameEvents.entries()) {
  let str =
    key < 45
      ? `[FIRST HALF] ${key} : ${value}`
      : `[SECOND HALF] ${key} : ${value}`;
  console.log(str);
}
*/

/////////////////////////////////////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const textAreaEl = document.querySelector("textarea");
  const inputText = textAreaEl.value;
  const camelCaseOutput = convertToCamelCase(inputText);
  textAreaEl.value = camelCaseOutput;
});

function convertToCamelCase(inputText) {
  const lines = inputText.split("\n");

  let output = ``;
  for (let [index, line] of lines.entries()) {
    let [first, second] = line.toLowerCase().trim().split("_");
    line = `${first.toLowerCase()}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    line = line.padEnd(20) + "".padEnd(index + 1, "✅");
    output += line + "\n";
  }
  return output;
}

*/
