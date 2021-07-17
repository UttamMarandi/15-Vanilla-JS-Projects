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
//10. also we want to remove the alert after 3 sec ..so use setTimeout() 
//11. 1st case if() ...when user enters a value.

//ADD ITEM
//12. create an article element using js
//13. add ".grocery-item" classlist to the article
//14. create a data attribute named "id" using js
//15. assign attribute "data-id" vale to vlue of id
//16. use innerhtml on article and cut paste the html code i.e p tag storing the grocery name , delete bt, and edit btn from index.html. make changes to make code dynamic
//17. append the article to ".list" using appendChild
//18. also show a success alert using displayAlert()
//19. at last show the container by adding ".show-container" class to ".container"
//20.call the function setBackToDefault()
//21. define the function setBackToDefault(). This function sttore the initial/normal state of the app.Each time it is called, it changes certain variables back to their original values
//22. Within setBackToDefault() ..a. set value of grocery and edit-id to empty string.
//23. Within setBackToDefault().. c. set ediftFlag as false and textContent of submit button to submit

//DELETE ALL ITEMS
//24. In order to delete all the items first we need to call an click event on ".clear-btn" button. call clearItem() method on click
//25. Within clearItem() .. what I did was set the innerHTML of ".list" as empty string. and it worked 😆. But jhon did this other way and I think Jhon's way is more js savvy.my way is commented out
//26.select all html element eith class ".grocery-item". //we created this element using js
//27.".grocery item" represents each grocery input by user. So we run for each on these items when items.length > 0..means there is items input by the user. If not items.length will be equal to zero
//28. ".grocery-item" is child element of ".grocery-list". We remove the ".grocery-item" using removeChild()..in this way we remove all the items.
//29. Also remove the ".show-cotainer" class from the ".container" .This remover "clear items" button too
//30. call the setBackToDefault() to move the app back to default position.
//31. also call the displayAlert() with appropriate parameters

//DELETE SINGLE ITEM
//32. We cannot select ".delete-btn" ,".edit-btn"  globally because we don't have access to them until it is created in addItem().
//33. So select the ".delete-btn",".edit-btn" within the addItem() function after they are created
//34. Also use clcik events on both the buttons and call deleteItem() and editItem()
//35. define a function deleteItem() which takes event object as parameter.
//36. within deleteItem() acess the parent's parent container ".article" using parentElement
//37. use removeChild() to remove the single item from list
//38. check if the deleted item is the only item. if it is then remove ".show-container " class from container
//39. call displayAlert()
//40. call setBackToDefault

//EDIT SINGLE ITEM
//41.define editItem() function that takes event obkect as parameter
//42.select the parent's parent of the e.currentTarget
//43.a.c to our html structyre ..title is a sibling of parent's parent of event object. so acess that title.
//44.now change the value of grocery to that title
//45.Also change the state of our app...a.Edit flag to true,b. submit text to edit text and c.id to the id of the parent element.


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

//clear items
clearBtn.addEventListener("click" , clearItems) //24


// ****** FUNCTIONS **********
function addItem(e) { //4
    e.preventDefault()
    console.log(grocery.value);
   const value = grocery.value //5
   const id = new Date().getTime().toString() //we want a unique id..one way to do it is this way..not aplicable for live projects //6

   //when the form is submitted we have three options ..1.to add the item to the list and we are not editing , 2.when we are editing, 3. when user has not added any item

   if(value !== '' && editFlag === false){ //7  //can also use value instead of value !== 
        const element  = document.createElement("article") //12
        element.classList.add("grocery-item")//13

        const attr = document.createAttribute("data-id")//14
        attr.value = id
        element.setAttributeNode(attr)//15
        console.log(element);
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
              <button class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
        `
        //only after access
        const deleteBtn = element.querySelector(".delete-btn")
        const editBtn = element.querySelector(".edit-btn")
        deleteBtn.addEventListener("click",deleteItem)
        editBtn.addEventListener("click",editItem)

        //16
        //append child
        list.appendChild(element)//17
        //display alert
        displayAlert("grocrery added to the list" , "success")//18
        //show container
        container.classList.add('show-container')//19

        //add to local storage
        addtoLocalStorage(id,value)

        //set back to default
        setBackToDefault() //20


   }
   else if(value !== "" && editFlag == true) {

   }
   else {
       displayAlert('Please enter value' , 'danger') //8
   }
   
}

//display alert
function displayAlert(text , action) { //9
    alert.innerHTML = `<p class="alert alert-${action}"> ${text}</p> `
    //remove alert after 5s
    setTimeout(function(){ //10
        alert.innerHTML = `<p class="alert"></p> `
    }, 3000)
}

//clear items
function clearItems() {
    //list.innerHTML = "" //this is working too //25
    const items = document.querySelectorAll(".grocery-item") //26

    if(items.length > 0) { //2
        items.forEach(function(item){ //27
            list.removeChild(item)//28
        })
    }
    container.classList.remove("show-container")//29
    displayAlert("items removed from the list" , "danger")//30
    setBackToDefault();//31
    //localStorage.removeItem('list')
}

//set back to default
function setBackToDefault () { //when we enter a value , even after addition it stays on the input field. we have to manually delete it. this function make sure that things go back to default //21
    console.log("set back to default");
    grocery.value = " " //set the value to empty string does the job//22

    //state
    editFlag = false //23
    editId = ""
    submitBtn.textContent = "submit"
}

//delete single item
function deleteItem(e) {
    const parent = e.currentTarget.parentElement.parentElement
    const id = parent.dataset.id
    console.log("id", id);

    // const attr = parent.getAttribute("data-id") //same thing as above
    // console.log("attr" , attr);

    list.removeChild(parent)
    if(list.children.length ===0) {
        container.classList.remove("show-container")
    }
    displayAlert("single item removed" , "danger")
    setBackToDefault()

    //remove from local storage
    //removeFromLocalStorage(id)
}

//edit single item
function editItem(e) { //41
    const parent = e.currentTarget.parentElement.parentElement //42
    const editTitle = e.currentTarget.parentElement.previousElementSibling; //43 
    grocery.value = editTitle.innerHTML //44

    //shange state
    editFlag = true //45
    editId = parent.dataset.id
    submitBtn.textContent = "Edit"
}


// ****** LOCAL STORAGE **********

function addtoLocalStorage(id,value){
    console.log("added to local storage");
}

function removeFromLocalStorage(id) {
    console.log("remove");
}
// ****** SETUP ITEMS **********
