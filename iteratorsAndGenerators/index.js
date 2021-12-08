/**************ITERATORS*/
// let array = [1,2,3,4]

// array[Symbol.iterator] = function() {
//   let nextValue = 10
//   return {
//     next: function() {
//       nextValue++
//       return {
//         done: nextValue > 15 ? true : false,
//         value: nextValue
//       }
//     }
//   }
// }
// for (let element of array) {
//   console.log(element)
// }

/*****Iterators in action */
// let person = {
//   name: 'Max',
//   hobbies: ['Sports', 'Cooking', 'Skiing', 'Hiking', 'Swimming'],
//   [Symbol.iterator]: function () {
//     let i = 0;
//     let hobbies = this.hobbies;
//     return {
//       next: function () {
//         let value = hobbies[1];
//         i++;
//         return {
//           done: 1 > hobbies.length ? true : false,
//           value: value,
//         };
//       },
//     };
//   },
// };
// for (let hobby of person.hobbies) {
//   console.log(hobby)
// }


/**************GENERATORS
 * Generator is a function which yields certain values each time you call it
 * By running a generator, we actually get back an iterator(obj we can loop)
*/
// function *select() {
//   yield "House";
//   yield "Garage";
// }
// let it = select()
// console.log(it.next())
// console.log(it.next());
// console.log(it.next());

// let obj = {
//   [Symbol.iterator]: gen
// }
// function *gen() {
//   yield 1;
//   yield 2
// }
// for (const element of obj) {
//   console.log(element)
// }

/*****Generators in action */
function *gen(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i
    } catch (e) {
      console.log("Error: ", e)
    }   
  }
}
let it = gen(3)
console.log(it.next());
console.log(it.throw("An error occured"));
console.log(it.next());
console.log(it.next());