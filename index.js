const variable = "Hello world";
let variable1 = "Hello world 1";

variable1 = "My world";
// console.log(variable1);

let myString = "my string";
let myNumber = 5;
let myBoolean = false;

myString = true;

let myArray = [1, 2, 3, 4, 5];
let myObject = {
  name: "John",
  age: 30,
};

// console.log(myObject);

myArray.push(6);
myArray.splice(0, 2);
const newMyArray = myArray.map((item) => item * 3);
// console.log(myArray);
// console.log(newMyArray);

let secondArray = [];
myArray.forEach((item) => {
  secondArray.push(item * 10);
});

// console.log(secondArray);

myObject["surname"] = "Doe";
// delete myObject.age;

let myObjectKeys = Object.keys(myObject);
let myObjectValues = Object.values(myObject);

const element = document.getElementById("text_id");
element.style.color = "blue";

function changeColor() {
  if (element.style.color === "blue") {
    element.style.color = "white";
  } else {
    element.style.color = "blue";
  }
}

function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

const string = "5";
const number = 5;

console.log(string === number);
console.log(string == number);
