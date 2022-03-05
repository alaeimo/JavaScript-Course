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
