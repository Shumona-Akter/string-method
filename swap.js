// swap two veriable refers to exchanging value of the variables

let firstName = "Aker";
let lastName = "Sumona";

// let fullNameErr = firstName + " " + lastName;
// approch 1: temporary
let temporayName = firstName;
firstName = lastName;
lastName = temporayName;
let fullName = firstName + " " + lastName;

console.log(fullName);


// approch 2: destruchering 
// let firstNumber = 40;
// let lastNumber = 50;
// [firstName, lastNumber] = [lastNumber, firstNumber];
// console.log(firstNumber, lastNumber);

let first = 30;
let last = 40;
[first , last] = [last, first]
console.log(first, last)




