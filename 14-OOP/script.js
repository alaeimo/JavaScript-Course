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
/*
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
*/
//////////////////////////////////////////////////////////////
// Static Methods
/*
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Instance methods
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

  //static methods
  static hey() {
    console.log("Hey there!");
  }
}

Person.hey();
const jonas = new Person("Jonas Jackson", 1998);
// jonas.hey(); // Static methods won't work in the instances
*/
////////////////////////////////////////////////////////////
// Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const sarah = Object.create(PersonProto);
console.log(sarah);
sarah.calcAge();
sarah.fullName = "Sarah Jackson";
sarah.birthYear = 1998;

console.log(sarah);

const javid = Object.create(PersonProto);

javid.init("Javid Smith", 1966);
console.log(javid);
javid.calcAge();
*/
/////////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed is ${this.speed}`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 120);

console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
console.log(ford.speedUs);
ford.brake();
ford.brake();
console.log(ford.speedUs);

ford.speedUs = 50;
console.log(ford);
*/

//////////////////////////////////////////////////////////
// Inheritance Between Classes Constructor Functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`I'm ${this.firstName} and I'm studying ${this.course}`);
};

const sarah = new Student("Sarah", 1996, "Computer Science");
sarah.introduce();
console.log(sarah);
console.log(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
console.log(sarah);
*/
//////////////////////////////////////////////////////////////
// Coding Challenge #3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

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

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

////////////////////////////////////////////////////////
//Inheritance Between Classes ES6 Classes
/*
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Instance methods
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

  //static methods
  static hey() {
    console.log("Hey there!");
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`I'm ${this._fullName} and I'm studying ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old.`);
  }
}

const sarah = new Student("Sarah Janson", 2012, "Computer Science");
console.log(sarah);
sarah.introduce();
sarah.calcAge();
*/

/////////////////////////////////////////////////////////////
//Inheritance Between Classes Object.create
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`I'm ${this.fullName} and I'm studying ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay Martin", 1996, "Computer Science");
jay.introduce();
jay.calcAge();
*/
/////////////////////////////////////////////////////////////
//Another Class Example
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.locale = navigator.language;
    //Protected properties
    this._pin = pin;
    this.#movements = [];
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.#movements.push(300);
// acc1.#movements.push(-150);
acc1.deposit(300);
acc1.withdraw(150);
acc1.requestLoan(1000);
acc1._approveLoan(3000);
console.log(acc1);
*/
///////////////////////////////////////////////////////
//Encapsulation Private Class Fields and Methods

// 1) Public fileds
// 2) Private fields
// 3) Public methods
// 4) Private methods
/*
class Account {
  //Public fields (instances)
  locate = navigator.language;

  //Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;
    //Protected properties
    this.#pin = pin;
    // this.#movements = [];
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
    }
  }

  //Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

// acc1.#movements.push(300);
// acc1.#movements.push(-150);
// acc1.#approveLoan(3000);

acc1.deposit(300);
acc1.withdraw(150);
acc1.requestLoan(1000);
console.log(acc1);
*/
/////////////////////////////////////////////////
//Chaining Methods.mp4

/*
class Account {
  //Public fields (instances)
  locate = navigator.language;

  //Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.locale = navigator.language;
    //Protected properties
    this.#pin = pin;
    // this.#movements = [];
    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan approved");
      return this;
    }
  }

  //Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
console.log(acc1);

acc1
  .deposit(300)
  .deposit(500)
  .withdraw(150)
  .withdraw(300)
  .requestLoan(1000)
  .withdraw(200);

console.log(acc1.getMovements());
*/

/////////////////////////////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed is ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed is ${this.speed}Km/h`);
    return this;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );

    return this;
  }
}

const rivian = new EV("Rivian", 120, 23);

console.log(rivian);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUs);
*/
//////////////////////////////////////////////////////////////////
