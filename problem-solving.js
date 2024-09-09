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
// আমার কাছে একটা array তে কিছু নাম্বার আছে, আমাকে বের করতে হবে সবচেয়ে বড় নাম্বার কোনটা ।

// function giveBiggestNumber(array) {
//     if (!Array.isArray(array)) {
//         return 'this is not an array...!';
//     }
//     let biggest = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > biggest) {
//             biggest = array[i];
//         }
//     }
//     return biggest;
// }
// // const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
// const numbers = [30, 54, 400, 24];
// // const numbers = true
// const result = giveBiggestNumber(numbers);
// console.log(result);

// ### Task-20
//amar kasea akta object asea . akhon amakea ai object ar maddhomea akta function create korte hobe Abong validation korte hobe.

// const person = {
//     name: 'monir',
//     address: 'jashore'
// };

// function createEmail(info) {
//     // console.log(typeof (info));
//     if (typeof info !== "object") {
//         return "Invalid Object";
//     }

//     const result = info.name + "@" + info.address + '.com';
//     return result
// }

// const result = createEmail(person)
// console.log(result);

// ### Task-21
// মনে করেন আপনার প্রতি মাসের ঘর ভাড়া ৫০০০ টাকা, খাবার খরচ ৩০০০ টাকা এবং হাত খরচ ২০০০ টাকা । বাকি টাকা আপনি জমা করেন । এখন মাস শেষে আপনার জমার পরিমান কত হবে, আপনার আয় এর উপরে ভিত্তি করে একটি Js Function create করুন। এবং Validation করুন।;

// function calculateSavings(income) {
//     if (typeof income !== "number") {
//         return "invalid input"
//     }

//     const houseRent = 5000;
//     const mealCost = 3000;
//     const personalExpenses = 2000;
//     const totalExpenses = houseRent + mealCost + personalExpenses;

//     if (totalExpenses > income) {
//         return "Earn more.. !"
//     }

//     const savings = income - totalExpenses;
//     return savings;

// }

// const result = calculateSavings(7000);
// console.log(result)

// ### Task-22
// একটা array এর ভেতরে কয়টা boolean ভ্যালু আছে তার কাউন্ট করে দেখাও

// const x = [3, false, 4, 6, "hello", true, 65, { name: "monir" }]

// function countBoolean(array) {
//     if (!Array.isArray(array)) {
//         return "Please provide valid array"
//     }

//     let count = 0;
//     for (let item of array) {
//         if (typeof item === 'boolean') {
//             count++
//         }
//     }
//     return count;
// }

// const result = countBoolean(x);
// console.log(result)

// ### Task-23
// Borjatri jabe 234 Jon, akta bus a jatri jabe 50 Jon ..akjon Kom holeao jabe na. Akta Micro tea jatri jabe 15 Jon... Akjon Kom holeao jabe na. R jara bus & Micro tea jate parbe na Tara rickshaw tea jabe. Tobe  rickshaw Vara ak ak Jon proti nibe 20 taka. tahole total koto taka rickshaw vara dite hobe ..??  Ai problem ta function ar maddhomea korte hobe

/**
 * bus = 50;
 * micro = 15;
 * rickshaw cost 20 tk.
 * borjatri = 234;
 *
 * calculation:-
 * bus(4) = 200, remaining = 34;
 * micro(2) = 30, remaining = 4;
 * rickshaw (4) = 20 * 4 = 80 tk.
 */

// function rickshawVara(peoples) {

//     const bus = 50;
//     const micro = 15;
//     const rickshawCost = 20;

//     const remainAfterBus = peoples % bus;
//     const remainAfterMicro = remainAfterBus % micro;
//     return remainAfterMicro * rickshawCost

// }

// console.log(rickshawVara(234))

// ### Task-24
// সমকোনী ত্রীভুজের বৃহত্তর বাহুর উপর অঙ্কিত বর্গ ক্ষেত্রের  ক্ষেত্রফল অপর দুই বাহুর উপর অঙ্কিত বর্গ ক্ষেত্রের  ক্ষেত্রফলের সমান, প্রমান কর

//abc trangle --->  ac^2 = ab^2 + bc^2

// function somokoniTest(ac, ab, bc) {
//     //validation check:
//     if (typeof ac !== 'number' || typeof ab !== 'number' || typeof ac !== 'number') {
//         return 'Invalid input';
//     }

//     const biggestSquare = ac ** 2;
//     const smallSquare1 = ab ** 2;
//     const smallSquare2 = bc ** 2;

//     //ac^2 = ab^2 + bc^2
//     if (biggestSquare === (smallSquare1 + smallSquare2)) {
//         return "Somokoni Trangle ... !"
//     } else {
//         return "Not Somokoni Trangle ... !"
//     }
// }

// const result = somokoniTest(5, 3, 4)
// console.log(result)

// ### Task-25

// const person1 = {
//     name: "Rafi Hasan",
//     honors: 30,
//     hsc: 42,
//     isFFfamily: true
// }

// const person2 = {
//     name: "Nahid Hasan",
//     honors: 25,
//     hsc: 32,
//     isFFfamily: false
// }

// function jobSelection(info) {
//     //validation check:
//     if (typeof info !== "object") {
//         return "invalid object"
//     }

//     let total_marks = info.honors + info.hsc;
//     //condition:
//     if (info.isFFfamily) {
//         total_marks = total_marks + (total_marks * (20/100))
//     }
//     console.log('Your Total Mark: ' + total_marks)

//     if (info.isFFfamily && total_marks >= 80) {
//         return "So, You can get the job.."
//     } else if (info.isFFfamily && total_marks < 80) {
//         return "So, You can't get the job. Next time you can try.... !!!"
//     } else if (!info.isFFfamily && total_marks >= 80) {
//         return "So, You can get the job ... "
//     } else if (!info.isFFfamily && total_marks < 80) {
//         return "So, I am sorry,, try another time.."
//     }
// }

// const result = jobSelection(person1);
// console.log(result);

// #### Task-26
// (10 * 120) - (500 + (8 * 50)) = 300 ; atakea fucntion a convert korte hobe. abong validation korte hobe jenoo (- value) na asea:

function calculateMoney(ticketSale) {
    if (ticketSale < 0 || typeof ticketSale !== 'number') {
        return 'Invalid Number';
    }
    let remainingAmount = ticketSale * 120 - (500 + 8 * 50);
    return remainingAmount;
}

// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(-130));
// console.log(calculateMoney('monir'));

// #### Task-27
function checkName(name) {
    if (typeof name !== 'string') {
        return 'Invalid';
    }

    // let lastLetter = name[name.length-1];
    let lastLetter = name.slice(-1).toLowerCase();
    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // Approse No: 1
    // let result = false;
    // for (let charAt of checkArray) {
    //     if (charAt === lastLetter) {
    //         result = true
    //     }
    // }

    // Approse No: 2
    let result = checkArray.includes(lastLetter);

    return result ? 'Good Name' : 'Bad Name';
}

// console.log(checkName("Salman"));
// console.log(checkName("RAFEE"));
// console.log(checkName("Jhankar"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

// #### Task-28
function deleteInvalids(array) {
    //Validation:
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    let numberArray = [];
    for (let element of array) {
        if (typeof element === 'number' && isNaN(element) === false) {
            numberArray.push(element);
        }
    }
    return numberArray;
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, '12', [1, 2], { ob: 'lala' }]));
// console.log(deleteInvalids(['1', { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({ num: [1, 2, 3] }));

//Testing purpuse:-
// console.log(typeof NaN);
// console.log(isNaN(NaN))


// #### Task-29
function password(obj) {
    // validation:
    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4) {
        return "invalid"
    }
    //condition:
    let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
    let passwordString = capitalSiteName + '#' + obj.name + '@' + obj.birthYear;
    return passwordString
}

console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }))

console.log(password({ name: 'rahat', birthYear: 2002, siteName: 'Facebook' }));

console.log(password({ name: 'toky', birthYear: 200, siteName: 'Facebook' }));

console.log(password({ name: 'maisha', birthYear: 2002 }));
      
//Testing purpuse:-
// let birthYear = 1995
// console.log('hello'.length)
// console.log(birthYear.toString().length === 4)