// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//1. select all required elements : nav-toggle and links
//2. eventlistener for navtoggle that removes or adds the show links class to show / hide the nav bar
//3. Use the element.classList.toggle method to toggle navbar

const navToggle = document.querySelector(".nav-toggle") //1
const links = document.querySelector(".links")
console.log(links);

navToggle.addEventListener("click" , function() { 
    
    // if(links.classList.contains("show-links")) { //2
    //     links.classList.remove("show-links")
    // }
    // else {
    //     links.classList.add("show-links")
    // }

    links.classList.toggle("show-links")
})