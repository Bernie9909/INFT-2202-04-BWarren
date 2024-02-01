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
// function square(x) {
//     return x * x;
// }

// let nums = new Array(1,33,22,5);
// let squaredNums = nums.map(function(value) {
//     return square(value);
// });


// Todo: rewrite the above squared nums using arrow functions
// ==========================================================
// Defining the function with arrows
const square = x => x * x;
// Assigning the variables
let nums2 = new Array(1,33,22,5);
// Assigning a variable with values returned from a function call
let squaredNums = nums2.map(value => square(value));
console.log(`Original Values: ${nums2}`);
console.log(`squared values: ${squaredNums}`);