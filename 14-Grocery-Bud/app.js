//PSEUDO-CODE
//1. Select required elements i.e ".alert" , ".grocery-form", "#grocery" ".submit-btn" , ".grocery-container" , ".grocery-list" , ".clear-btn"
//2. set 3 variables that in a sense track the state of our app .a.editElement - undefined variable , b. editFlag- declared as false , c. editID - declared as empty string
//3. use a submit event for the form and run addItem() instead of a callback function
//4.define the function addItem()...by default form is submitted to the server ..we don't want that ..remove the default behaviour
//5.grab the value input by the user and store it in value
//6. get a random id value using getTime()

//LOGIC
//7. We can have three states in our app ...a.when user is adding an element b.when user is editing an element i.e editFlag === true c.when user enters an empty value. Write if else conditions for all these three scenerios
//8.The easiest one - when user enters a empty value ..call displayAlert() function that takes two paremetrs the "text to be dispalyed " and " danger" or "success" depending on color of alert
//9.define displayAlert() ...use template strings
//10. also we want to remove the alert after 2 sec ..so use setTimeout() 


// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert") //1
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

// edit option
let editElement //2
let editFlag = false
let editId = ""

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener("submit" , addItem) //addItem is a function but we are not using moon braces..also submit the form not the button //3



// ****** FUNCTIONS **********
function addItem(e) { //4
    e.preventDefault()
    console.log(grocery.value);
   const value = grocery.value //5
   const id = new Date().getTime().toString() //we want a unique id..one way to do it is this way..not aplicable for live projects //6

   //when the form is submitted we have three options ..1.to add the item to the list and we are not editing , 2.when we are editing, 3. when user has not added any item

   if(value !== '' && editFlag === false){ //7  //can also use value instead of value !== 

   }
   if(value !== "" && editFlag == true) {

   }
   else {
       displayAlert('how are you' , 'danger') //8
   }
   
}

//display alert
function displayAlert(text , action) { //9
    alert.innerHTML = `<p class="alert alert-${action}"> ${text}</p> `
    //remove alert after 5s
    setTimeout(function(){ //10
        alert.innerHTML = `<p class="alert"></p> `
    }, 2000)
}




// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
