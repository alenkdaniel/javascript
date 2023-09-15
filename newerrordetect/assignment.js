let x = 10;
const y = 20 ;
let z=5;
x = y + z;

let greeting = "Hello";
if (greeting == "Hello") {
  console.log("Hi!");
} else {
  console.log("Goodbye!");
}

let num = 10;
let doubled = num * 2;
console.log(doubled);

let colors = ["red", "green", "blue"];
let favoriteColor = colors[2];
console.log(favoriteColor);

function add(x, y) {
  return x ;
}

let result = add(5);
console.log(result);


let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.lastName);

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

function multiply(x, y) {
  return x;
}

let product = multiply(3, 2);
console.log("Product:", product);

function greet(name) {
  return  name;
}

let username = "Alice";
console.log(greet(username));

let age = 30;
console.log("Age in 5 years:", age);

let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 92 }
];

  if(students.grade >= 90) {
    console.log(students.name + " has an A grade.");
  }

console.log("End of the code");
