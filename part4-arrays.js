//  Problem 1: Favorite Foods
let favoriteFoods = ["pizza", "sushi", "tacos", "pasta", "ice cream"];
console.log("First food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);
favoriteFoods.push("burger");
console.log("Updated foods:", favoriteFoods);

//  Problem 2: Guest List
let guests = ["Alice", "Bob", "Charlie", "David"];
guests.shift(); // remove first guest
guests.push("Eve"); // add new guest to end
console.log("Number of guests:", guests.length);

//  Problem 3: Weekend Tasks
let tasks = ["laundry", "groceries", "coding", "naps"];

function printTasks() {
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

printTasks(); // Call the function to log tasks

//  Problem 4: Reverse It (Manual Reverse)
let numbers = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log("Reversed array:", reversed);

//  Bonus: Random Picker
function randomLunch(options) {
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

let lunches = ["burrito", "pizza", "sandwich", "ramen"];
console.log("Random lunch:", randomLunch(lunches));
