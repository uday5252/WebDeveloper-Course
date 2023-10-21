// Normally, the data present for an Application, it will be kept inside the database
// Frontend data that we need to store if there's no database or server side program available

// 2 types of storages
// These storages are kept inside the browser
// 1)LocalStorage(Commonly Used)
// -->10mb

// 2)SessionStorage
// -->5mb

// localStorage
// -->Will store the data in the form of a key - value pair
// setItem()
// getItem()
// clear()
// removeItem()

// localStorage will always hold the Information, even though that website is opened
// in multiple tabs, whereas sessionStorage will hold the information and store it only
// if we are in the current tab, in case if we try opening the website in some other new tab,
// then the data i removed

// localStorage will store the data permanently, whereas sessionStorage stores the data
// temporarly

// Ecommerce --> Store the product details --> inside the localStorage
// Banking App --> Transactions, Username --> inside the sessionStorage

// let username = "Raju"
// let password = "Welcome"

// localStorage.setItem(username, password)

// let option = prompt("Please either tell L or S:-")

// if(option == "L")
// {
//     localStorage.setItem("age", 30)
// }
// else if(option == "S"){
//     sessionStorage.setItem("age", 50)
// }

