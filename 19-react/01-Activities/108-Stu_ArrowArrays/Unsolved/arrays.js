const princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach((princess) => {
  console.log(`${princess.name} : ${princess.age}`);
})

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
let princessNames = princesses.map((princess) => {
  return princess.name;
})
console.log(princessNames);

// using the `names` array, get only those names that start with an 'M'
// filter: creates a new array with elements that pass the test of the provided function
let mNames = princessNames.filter((princess) => {
  return princess.startsWith("M");
})

console.log(mNames);


// get a single value from the data: the average age of all of the princesses
// map: applies a function against an "accumulator" and each element in the array (from left to right) to reduce it to a single value.
let reducedPrincesses = princesses.reduce((sum, princess) => sum + princess.age, 0)
let average = reducedPrincesses / princesses.length;

console.log(reducedPrincesses);
console.log(average);

// BONUS: get the average age of all princesses whose name includes an 'l'

// const lAverage = lSum / lNames.length;

// console.log("l-average: ", lAverage);
