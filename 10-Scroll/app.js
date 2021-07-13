// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

//PseudoCode
//SET DATE
//1.select date element
//2.use Date() method to get the full year. set it to innerHTML of date

// TOGGLE LINKS
//3.select required links .nav-toggle , .links-conatainer, .links
//4. The problem with previuos navmenu is the heifht of the container is fixed. so if more nav items are added than , they stay hidden. We need a new approach .We use getBoundingClientRect()
//5. use getBoundingClientRect() to get the height of "links-container" & "links". 
//6. "links" ul is wrapped within the "links-container". So whenever a new link is added ..height of links increases. assign this height to linkscontainer to open the navmenu. set "links-container" heigth to 0 to close the navmenu




// ********** set date ************
const date = document.getElementById("date") //1
date.innerHTML = new Date().getFullYear() //2
console.log(date);

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle") //3
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navToggle.addEventListener("click" , function(){
    // linksContainer.classList.toggle("show-links") //4
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height //5
    
    if(containerHeight === 0) { //6
        linksContainer.style.height = `${linksHeight}px` 
    }
    else {
        linksContainer.style.height = 0
    }
})

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
