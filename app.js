// Javascript by default follows synchronous programming(Blocking)

// console.log("Hi")
// console.log("Hello")
// console.log("Namaste")

// console.log("Start")
// console.log("Wrote the code to connect to database, read the data")//10 sec
// console.log("printing numbers 1 to 10")

// Start

// createCart
// storeInCart
// displayProducts
// Unresponsive
// Execute Simulataneously(Asynchronous Programming(Non-Blocking))


// If we want to confirm whether the program is a asynchronous program or not

// concepts:
// setTimeout(), setInterval(), promise, fetch, axios, XMLHttpRequest, async, await



// Synchronous Program == Problem


// function restaurant()
// {
//     for(let i = 0; i < 1000000; i++)
//     {
//         console.log("I have entered the restaurant")
//         console.log("I have placed an order")
//         console.log("My order has been served")
//     }
// }

// restaurant()
// console.log("I am chit chatting with my friends!!!")




// Asynchronous Program == Advanatage

// function restaurant()
// {
//     for(let i = 0; i < 1000000; i++)
//     {
//         console.log("I have entered the restaurant")
//         console.log("I have placed an order")
//         console.log("My order has been served")
//     }
// }

// setTimeout(function()
// {
//     restaurant()
// }, 2000)
// // After 2 seconds --> javascript will restaurant()

// console.log("I am chit chatting with my friends!!!")


// console.log("createCart Functionality")

// console.log("createStore Functionality")

// setTimeout(function()
// {
//     console.log("payment functionality 1")
// }, 0)

// setTimeout(function()
// {
//     console.log("payment functionality 2")
// }, 2000)

// console.log("display functionality")

// Callback Hell


// callback = function()
// {
//     serveOrder("Dosa")
// }

// callback
// callback()


// function placeOrder(customerName, itemName, callback)
// {
    // setTimeout(function()
    // {
    //     console.log(`${customerName} your item ${itemName} is successfully ordered`)

    //     // Logic to call serveOrder()
    //     callback()
    // }, 2000)
// }

// function serveOrder(itemName, callback)
// {
//     setTimeout(function()
//     {
//         console.log(`your item ${itemName} is successfully served`)
        
//         callback()

//     }, 2000)
// }

// function eatFood(itemName)
// {
//     setTimeout(function()
//     {
//         console.log(`your item ${itemName} is successfully eaten`)

//     }, 2000)
// }

// placeOrder("Raju", "Dosa", function()
// {
//     serveOrder("Dosa", function()
//     {
//         eatFood("Dosa", function()
//         {
//             serveOrder("Dosa", function()
//             {
//                 eatFood("Dosa", function()
//                 {

//                 })
//             })
//         })
//     })
// })


// Nesting functions one inside the another

// Callback(Inner Function) Hell

// Promises --> Clean code

// Promise is a javascript object
// 2 purposes
// 1)Clean Code
// 2)To write asynchronous program in a better manner

// Create a promise
// I promise to give chocolates tomorrow --> Pending
// Fullfilled(resolved)
// Rejected(not fullfilled)

// function placeOrder(customerName, itemName)
// {
//     let output1 = new Promise(function(resolve, reject)
//     {
//         setTimeout(function()
//         {
//             console.log(`${customerName} your item ${itemName} is successfully ordered`)
//             resolve(serveOrder("Dosa"))
    
//         }, 2000)
//     })
//     return output1
// }

// function serveOrder(itemName)
// {
//     let output2 = new Promise(function(resolve, reject)
//     {
//         setTimeout(function()
//         {
//             console.log(`your item ${itemName} is successfully served`)
//             resolve(eatFood("Dosa"))
    
//         }, 2000)
//     })
//     return output2
// }

// function eatFood(itemName)
// {
//     let output3 = new Promise(function(resolve, reject)
//     {
//         setTimeout(function()
//         {
//             console.log(`your item ${itemName} is successfully eaten`)
//             resolve("Finsihed a birthday party!")
    
//         }, 2000)
//     })
//     return output3
// }

// // placeOrder("Raju", "Dosa").then(function(result)
// // {
// //     result()
// // })

// placeOrder("Raju", "Dosa").then(serveOrder).then(eatFood).then(function(result)
// {
//     console.log(result)
// })


// placeOrder("Raju", "Dosa", function()
// {
//     serveOrder("Dosa", function()
//     {
//         eatFood("Dosa", function()
//         {
//             serveOrder("Dosa", function()
//             {
//                 eatFood("Dosa", function()
//                 {

//                 })
//             })
//         })
//     })
// })

// placeOrder --> Pending State
// Fullfilled Stated (OR) Rejected State

// resolve, reject are not only parameter

// resolve = function()
// {
    // ---------------
    // Logic --> redirect to other part of the program
// }

// reject = function()
// {
    // ---------------
// }

// Baby(Train the baby) --> Grow
// Chat GPT --> Model --> 

// Yes, Chat GPT

// Software Engineer(Write from scratch)
// Software Enginner + 60% + (Chat GPT)


// Random Quote Generator

// Javascript program to any other website --> fetch()
// https://api.quotable.io/random

// fetch() is a inbuilt function.
// fetch() return type will always be Promise(pending, fullfilled, rejected)

const QuoteButton = document.querySelector("button")
const MyQuote = document.querySelector(".quote")

// QuoteButton.addEventListener("click", function()
// {
//     fetch("https://api.quotable.io/random")
//     .then(function(result)
//     {
//         // read that json data -- that json data will be automatically convered to
//         // javascript object
//         return result.json()
//     })
//     .then(function(output)
//     {
//         MyQuote.textContent = output.content
//     })
//     .catch(function(error)
//     {
//         alert(error)
//     })
// })


// promise is getting returned(fullfilled --> .then() or rejected --> .catch())

// promise is getting returned(fullfilled -->  or rejected --> )

// try and catch --> checking and handling error message

// code is risky --> try block

// QuoteButton.addEventListener("click", async function()
// {
//     try{
//         const result = await fetch("https://api.quotable.io/random")
//         const output = await result.json()
//         console.log(output.content)
//     }

//     catch(error){
//         console.log("Server is busy!")
//     }
// })

// server side

// MAIN STACK
// console.log(output) --> Error

// // SIDE STACK
// const result = await fetch("https://api.quotable.io/random")
// const output = await result.json()

// await --> wait for sometime

// fn --> will always return a promise

// setInterval(function()
// {
//     console.log("Hi")
// }, 1000)


// Scenario
// Generate a random number between 0 to 20
// Promise --> <10 --> Fullfill the promise with "Number is less than 10"
// Promise --> >=10 and <=20 --> Reject the promise with "Number is greater than 10"