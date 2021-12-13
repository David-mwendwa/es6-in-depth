/************MAPS */
// let cardAce = {
//   name: "Ace of Spades"
// }

// let cardKing = {
//   name: "King of Clubs"
// }

// let deck = new Map(); 
// deck.set("as", cardAce)
// deck.set("kc", cardKing)
// deck.delete("as")
// deck.clear()
// console.log(deck.values())
// for (const entry of deck) {
//   console.log(entry)
// }


/*********WEAKMAP */
// let key1 = {a:1}
// let key2 = {b:2}
// let deck = new Map();
// deck.set(key1, cardAce);
// deck.set(key2, cardKing);
// console.log(deck.get(key1))


/*********SETS 
 * A set stores unique values
*/
let set = new Set([1,1,1,2])
set.add(3)
set.delete(1)
for (const element of set) {
  console.log(element)
}
