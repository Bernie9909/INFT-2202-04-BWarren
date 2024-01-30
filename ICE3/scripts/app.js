// Bernie Warren 
// 01-30-24
// ICE3 - INFT 2202-04
// All about arrays

// Array literal 
let myArray = [1,2,3,4,5];

// Creating array using constructor 
let myArrayConstructor = new Array();

myArrayConstructor.push(24);

// Creating array with values using constructor 
let myConstructorArray = new Array(10,20,30,40,50);

// Create an array with a size of 10
let array2 = new Array(10);
// Pushing 80 to the ends of the array 
array2.push(80);

// Tuesday 
let tuesdayArray = new Array(10).fill("Tuesday!");

// Returns the the number x after it is squared.
function square(x) {
    return x * x;
}

let nums = new Array(1,33,22,5);
let squaredNums = nums.map(function(value) {
    return square
});

console.log(`squared values: ${squaredNums}`);

// Todo: rewrite the above squared nums using arrow functions
// let nums = new Array(1,33,22,5);
// let squaredNums = nums.map(function(value) {
//     return square
// });

// console.log(`squared values: ${squaredNums}`);