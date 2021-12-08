// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject('Failed!');
//   }, 1500);
// });

// promise.then(function (value) {
//   console.log(value)
// }, function(error) {
//   console.log(error)
// })

/*********Chaining promises */
// function waitASecond(seconds) {
//   return new Promise(function (resolve, reject) {
//     if (seconds > 2) {
//       reject('Rejected!');
//     } else {
//       setTimeout(() => {
//         seconds++;
//         resolve(seconds);
//       }, 1000);
//     }
//   });
// }

// waitASecond(3)
//   .then(waitASecond)
//   .then(function (seconds) {
//     console.log(seconds);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/*********All and Race 
 * .all() - All the promises have to resolve else reject
 * .race() - All the promises are taken to account together
*/
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Resolved!');
  }, 1500);
});
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('Rejected!');
  }, 3000);
});

Promise.all([promise1, promise2])
  .then(function (succes) {
    console.log(succes);
  })
  .catch(function (error) {
    console.log(error);
  });
