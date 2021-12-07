let person = {
  name: 'David Mwendwa',
  age: 25,
  bio() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  },
};
module.exports = person; // common js


