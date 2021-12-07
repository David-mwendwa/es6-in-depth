// common js
// const person = require('./external.js'); // common js
// console.log(person.bio())

/************CLASSES */
class Person {
  constructor(name, age, addr) {
    this.name = name;
    this.age = age;
    this.addr = addr;
  }
  bio() {
    console.log(
      `${this.name} is ${this.age} years old and lives in ${this.addr}`
    );
  }
}

class Parent extends Person {}

let parent1 = new Parent('David', 25, 'Nairobi', ['Jane', 'bob']);
parent1.bio();
