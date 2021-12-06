// const AGES = [89, 87, 34, 56];

// for (let i = 0; i < AGES.length; i++) {
//   ((v) => console.log(v * 10))(AGES[i]);
// }

// function fn() {
//   console.log(this)
// }
// fn()

// var fn2 = () => console.log(this)
// fn2()

// let obj = {
//   name: "Davy",
//   age: 23,
//   greet() {
//     console.log(`Hi ${this.name}`)
//   }
// }

// obj["greet"]()


/***************REST OPERATOR */
// function sumUp(toAdd) {
//   if (!Array.isArray(toAdd)) {
//     toAdd = Object.values(arguments);
//   }
//   let sum = 0
//   for (let i = 0; i < toAdd.length; i++) {
//     sum += toAdd[i]
    
//   }
//   return sum
// }
// console.log(sumUp(5, 10, 50, 100))

// function sumUp(...toAdd) {
//   let sum = 0;
//   for (let i = 0; i < toAdd.length; i++) {
//     sum += toAdd[i];
//   }
//   return sum;
// }
// console.log(sumUp(5, 10, 50, 100));


/****************REST OPERATOR -> opposite of spread
  Takes an array and splits it into individual values*/
// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(...numbers))


/*****************for-of Loop 
 * Usually used with arrays as for-in loop is used with objects
*/
// let testResults = [1.23, 1.10, 4.1]
// for (const i of testResults) {
//   console.log(i)
// }


/*****************DESTRUCTURING ARRAYS/OBJECTS
 * It can also be used to swap variables
*/
// let numbers = [1,2,3,4,5]
// let [a, ...b] = numbers
// console.log(...b)

// let a = 5;
// let b = 10;
// [b,a] = [a,b] // swapping the values
// console.log(a, b)

// let nums = [1,2,3,4]
// let [a, , ,c] = nums // ignore certain values
// console.log(a,c)

// let obj = {
//   name: "David",
//   age: 25,
//   greet() {
//     console.log(`Good morning, ${this.name}`)
//   }
// }
// let {name, ...rest} = obj 
// console.log(rest.greet()) //!Why can't we call greet func from rest?
// console.log(rest)