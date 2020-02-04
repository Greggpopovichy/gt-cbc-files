// ----- Object Destructuring ------
var luke = { occupation: "Jedi", father: "Anakin" };

// ES5
var occupation = luke.occupation; // Jedi
var father = luke.father; // Anakin

// ES6 - Destructuring
var { occupation, father } = luke;

console.log(occupation); // Jedi
console.log(father); // Anakin

// ----- Array Destructuring ------
var racers = ["Anakin", "Gasgano", "Aldar Beedo", "Ebe E. Endocott"];
// ES5
var first = racers[0]; // Anakin
var second = racers[1]; // Gasgano
var others = racers.slice(2); // ['Aldar Beedo', 'Ebe E. Endocott']

// ES6 - Array destructuring also using `...` rest pattern
var [first, second, ...others] = racers;
console.log(first); // Anakin
console.log(second); // Gasgano
console.log(others); // ['Aldar Beedo', 'Ebe E. Endocott']


const players = [
    {
        fname: "Steph",
        lname: "Curry",
        position: 1,
        endorses: "Under Armor",
        titles: 2
    },
    {
        fname: "Lebron",
        lname: "James",
        position: [1,2,3,4,5],
        endorses: "Nike",
        titles: 3
    },
    {
        fname: "James",
        lname: "Harden",
        position: 3,
        endorses: "Adidas",
        titles: 0
    }
];

const {fname, lname, position, endorses, titles} = players;
