/*//Exercise array
make an array of 10 grocery store items loop through that array and log each item.
loop through a string at least 10 characters long and log each character
make that string upper case

*/

//grocery cart

let inventory = [
  "potatoes",
  "soap",
  "cheese",
  "milk",
  "cereal",
  "cookies",
  "bananas",
  "peanut butter",
  "juice",
  "sugar"
];
let onHand = [5, 7, 4, 5, 5, 2, 3, 1, 2, 1];
function add() {
  let input = document.getElementById("userInput").value;
  for (let i = 0; i < inventory.length; i++) {
    if (input == inventory[i]) {
      onHand[i]++;
      console.log(`${inventory[i]}: ${onHand[i]}`);
    }
  }
}
function subtract() {
  let input = document.getElementById("userInput").value;
  let i = 0;
  inventory.forEach(function(inventory) {
    if (inventory == input) {
      if (onHand[i] > 1) {
        onHand[i]--;
        console.log(`${inventory}: ${onHand[i]}`);
      } else if (onHand[i] == 0) {
        console.log(`${inventory} is out of stock!!!`);
        console.log(`${inventory}: ${onHand[i]}`);
      } else {
        console.log(`${inventory} is out of stock!!!`);
        onHand[i]--;
        console.log(`${inventory}: ${onHand[i]}`);
      }
    }
    i++;
  });
}
