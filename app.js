
// DOM(Document Object Model)
// --> Used to target HTML data through Javascript
// identify that text

// const h1Data = document.querySelector("h1")
// h1Data.style.color = "orange"
// h1Data.style.backgroundColor = "green"



const taskButton = document.querySelector("button")
const myInput = document.querySelector("input")
const myUl = document.querySelector("ul")
// taskButton --> event(action --> type, click, submit, ...)

taskButton.addEventListener("click", function()
{

    // const myImg = document.createElement("img")
    
    // myImg.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")

    // console.log(myImg)
    
   // We need to get the information present in the input box
   //    task(Coding) variable --> sending it to HTML file

//    let task = myInput.value //Coding 
//    let myLi = document.createElement("li")//<li></li>
//    myLi.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`

// //    textContent and innerHTML
// //    textContent is used to display the text as it is
// // innerHTML --> It will evaluate if any HTML code is present

// //    <li>Coding <button>Delete</button></li>

//    myLi.style.color = "green"
//    myLi.style.fontSize = "25px"

// //    within the ul tag we need to append myLi
//     myUl.append(myLi)

//     myInput.value = ""

//     myLi.querySelector("i").addEventListener("click", function()
//     {
//         // Logic to delete the task
//         myLi.remove()
//     })
})

const deleteAllIcon = document.querySelector("i")

deleteAllIcon.addEventListener("click", function()
{
    // Logic to delete all the tasks
    myUl.remove()
})



// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// Display 500 Pokemons