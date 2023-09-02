// 3 ways Function Declaration, Exp, Arrow Functions

// Function Declaration and Function Expression --> Hoisting
// Hoisting is a mechanism where all the function declarations are
// automatically moved to the top of the program in a javascript file


// wish()
// wish()
// wish()

// function wish()
// {
//     console.log("Good Evening from Wish")
// }

// wish()
// wish()
// wish()

// var display = function()
// {
//     console.log("Good Evening from Display")
// }

// display()

// Arrays --> []

// Ctrl + /

// const commentsArray = []

// // Want to execute for 10 times --> for loop
// // 1, 2, 4, 8
// for(let i = 1; i < 10; i = i * 2)
// {
//     let myComment = prompt("Enter the comment...")
//     commentsArray.push(myComment)
// }

// // for of --> used to access the elements present in the array
// for(let i of commentsArray)
// {
//     console.log(i)
// }


// Arrays

// 1)forEach() --> We will use forEach() only on the arrays, if our requirement
// is to target every element present in the array

// WAP to multiple every element in the array by 5

// One Function can be given as a input to another function
// function expression or arrow function

// const numbers = [ 10, 20, 30, 40, 50 ]

// numbers.forEach(function(a, b, c)
// {
//     console.log(a + 10)
// })

// i --> point to the elements in the array
// j --> position of the element in the array
// k --> point to the entire array


// 2)map() --> 99.9% same as forEach()
// Difference:-
// Inside forEach() we cannot use return, inside map() we can use return
// default its an array

// NOTE:- map() will 100% make sure input array elements count and output array
// elements count will always be the same

// const numbers = [ 10, 20, 30, 40, 50 ]

// const output = numbers.map(function(a, b, c)
// {
//     return a + 10
// })

// console.log(output)


// const names = [ "Raju", "Ramu", "John", "Rekha" ]//4

// const output = names.map(function(i)
// {
//     if(i.startsWith("R"))
//     {
//         return i
//     }
// })

// console.log(output)//4

// Map (4 --> 4)
// Filter (4 --> 4 or less than 4)

// const names = [ "Raju", "Ramu", "Ramya", "Rekha" ]//4

// const output = names.filter(function(i)
// {
//     if(i.startsWith("R"))
//     {
//         return i
//     }
// })

// console.log(output)//4

// 4 to 3(Data got filtered)

// Filtering can happen based on some condition
// age > 20, name starts with A, 



// WAP to display the name that starts with R

// 1000 names
// ----------
// 100 names


// WAP to display the numbers which are greater than 10 --> Inside Array
// --> access every element in the array and print it

// const age = [10, 18, 20, -45, 100]

// const add = ()=>console.log(100 + 200)
// add()