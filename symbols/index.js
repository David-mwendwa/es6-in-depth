/*************SYMBOLS
 * symbol is a new primitive type
 * symbols represents a unique id - They dont match
 * adds some metaprogramming power to your objects
 */

// let symbol = Symbol("debug")
// console.log(typeof symbol)

// let obj = {
//   name: "David",
//   [symbol]: 22
// }
// console.log(obj)
// console.log(obj[symbol])


/********Shared symbols */
// let symbol1 = Symbol.for('age')
// let symbol2 = Symbol.for('age');
// console.log(symbol1 === symbol2)

// let person = {
//   name: "David"
// }
// function makeAge(person) {
//   let ageSymbol = Symbol.for('age')
//   person[ageSymbol] = 27
// }
// makeAge(person)
// console.log(person)


/*********Well-known symbols */
// class Person {

// }
// let person = new Person();
// console.log(person)

