// ### Task-1
//write code that will return a random letter from your name:

// simple ans:
// console.log("Monir".charAt(Math.floor(Math.random() * 4)))

//Best practise:
const myName = 'Monir';
// console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

// ### Task-2
//write code that will return a random number from 0 to 10:
// console.log(Math.floor(Math.random() * 10 + 1));

// ### Task-3
// var a = [1, 2, 3, 4];
// console.log(a[2]);

// ### Task-4
// var a = [1, 2, 3, 4];
// a.forEach(function (val) {
//   if (val <= 2) {
//     console.log(val);
//   }
// })

// ### Task-5
// var a = [1, 2, 3, 4, 5];

// a.forEach(function (val) {
//   console.log(val + 2)
// })

// ### Task-6
// var a = [1, 2, 3, 4, 5];
// a.forEach(function (val) {
//   console.log("Hello" + " " + val)
// })

// ### Task-7
var a = [1, 2, 3, 4, 5];

// var sum = 0;
// a.forEach(function (val) {
//   sum = sum + val;
// })
// console.log(sum);

// ### Task-8
var a = [1, 2, '3', 4, 5];

// var sum = 0;
// a.forEach(function (val) {
//   if(typeof val === 'number') {
//   sum = sum + val;
//   }
// })
// console.log(sum)

// var sum = 0;
// a.forEach(function (val) {
//   if (typeof val !== 'string') {
//   sum = sum + val;
//   }
// })
// console.log(sum)

// ### Task-9
// var arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(function () {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000)
//   })
// }

// for (var i = 0; i < 10; i++) {
//   arr[i]()
// }

// ### Task-10
// Take four parameters. Multiply the four numbers and then return the result.

// function multAll(a, b, c, d) {
//     const multiply = a * b * c * d;
//     console.log('#Task-1 Multiply result is : ' + multiply);
// }

// multAll(2, 4, 3, 6);

// ### Task-11
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function number() {
//     const num = 25;
//     if (num % 2 === 0) {
//         return '#Task-2 Divided Result is: ' + num / 2;
//     } else {
//         return '#Task-2 Multiply Result is: ' + num * 2;
//     }
// }

// console.log(number());

// ### Task-12
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         let currentNum = array[i];
//         sum += currentNum;
//     }
//     average = sum / array.length;
//     return average;
// }

// const array = [23, 43, 14, 36, 74];
// const avgNumber = make_avg(array);
// console.log('#Task-3 Average numbers is: ' + avgNumber);

// ### Task-13
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binaryString) {
//     let count = 0;

//     for (let i = 0; i < binaryString.length; i++) {
//         if (binaryString[i] == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let binaryString = '0100101010';
// const countNumber = count_zero(binaryString);
// console.log('#Task-4: binaryString count-zero is : ' + countNumber);

// ### Task-14
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

// function odd_even() {
//     const num = 34;
//     if (num % 2 === 0) {
//         return '#Task-5 Even Number: ' + 'Even';
//     } else {
//         return '#Task-5 Odd Number: ' + 'Odd';
//     }
// }
// console.log(odd_even());

// ### Task- 15
/**
 * give me the average of the odd numbers in the array
 * function takes an array as paramiter
 */

// function oddAverage(numbers) {
//     const odds = [];
//     for (const number of numbers) {
//         if (number % 2 !== 0) {
//             // console.log(number)
//             odds.push(number);
//         }
//     }
//     //odds is the array that contains only the odd numbers
//     // console.log(odds);
//     let sum = 0;
//     for (const number of odds) {
//         sum += number;
//     }
//     const count = odds.length;
//     console.log(sum, count);

//     const avg = sum / count;
//     return avg;
// }

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('Average of the odd numbers is: ' + avg);

//Another Process:- ### Task- 17
// const numbers = [6, 4, 3, 7, 23, 54, 65, 75, 24, 12];
// function oddAverage(numbers) {
//     let odd = [];
//     let sum = 0;
//     for (const number of numbers) {
//       if (number % 2 !== 0) {
//         odd.push(number);
//         sum += number;
//       }
//   }
//   let avg = sum / odd.length;
//   return avg;
// }

// ### Task-18
/**
 * array has some duplicate elements
 * []
 */

// const names = ['monir', 'ashif', 'sahir', 'monir', 'rafi', 'sahir', 'hasnat', 'nahid', 'hasnat'];

// function noDublicate(array) {
//     const unique = [];
//     for (const item of array) {
//         if (unique.includes(item) === false) {
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const uniqueArray = noDublicate(names);
// console.log(uniqueArray);

// ### Task-19
