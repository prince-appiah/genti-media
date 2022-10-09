// Given an array arr[] with integers in the range of [1, N], find the missing number
// from the first N integers.

// Hints: There are no duplicates on the list

// Example:
// arr[]= [1, 2, 4, 6, 3, 7, 8]  N = 8
// Output = 5
// find the missing number in a given array of numbers?

let rangeOfNumbers = [1, 2, 4, 6, 3, 7, 8]; // value of arr[]
const count = 8; // value of N - first 8 integers
let missingNumbers = [];

for (let i = 1; i <= count; i++) {
  if (rangeOfNumbers.indexOf(i) == -1) {
    missingNumbers.push(i);
  }
}

console.log("The missing number(s) is/are: ", missingNumbers);
