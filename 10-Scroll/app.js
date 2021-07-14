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

//FIXED NEVBAR

//7. access required elements i.e ".top-link" , "#nav"
//8. add a scroll event to window object so that whenver we sroll past a certain height ".fixed-nav" class is added to the nav to make the height fixed
//9. access the height of "#nav" element and scrollheight of the document
//10. use an if statement to add ".fixed-nav" class when scrollHeight passes the navHeight

//SMOOTH SCROLL
//11. smooth scroll works by default if we use in css scroll-behaviour : smooth; for html. But we do lose some section on reaching that particular section. We need to solve that. JS to the rescue
//12. select all links with ".scroll-link" class
//13. run a foreach() method on them to acess indivisual links and add a click event
//14. prevent the default smooth scroll effect of html
//15. get the "href" attribute of the selected link ...also use .slice() to remove the "#" from the href values
//16. I have a doubt on this step...we are again selecting the sliced href value using document.getElementbyId(id)..I don't know why..I will look into this later
//17. use offsetTop to get the top position clicked link element
//18. define postion variable that negates the navHeight from offsetop when navbar is fixed
//19. select containerHeigth and navHeight to solve exceptional cases ...1st-when navbar is not fixed 2nd- on mobile view where topbar adds to the navHeight
//20. use scrollTo() method to set the scroll position when link is clicked
//21. set containerHeight to 0 to close the navbar once the link is clicked




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
const navBar = document.getElementById("nav") //7
const topLink = document.querySelector(".top-link")


window.addEventListener("scroll", function()  { //8
    const navBarHeight = navBar.getBoundingClientRect().height //9
    // console.log(navBarHeight);
    const scrollHeight = window.pageYOffset
    console.log(scrollHeight);
    if(scrollHeight > navBarHeight) { //10
        navBar.classList.add("fixed-nav")
    }
    else {
        navBar.classList.remove("fixed-nav")
    }

    // show links
    if(scrollHeight > 500) {
        topLink.classList.add("show-link")
    }
    else {
        topLink.classList.remove("show-link")
    }
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link") //12

scrollLinks.forEach(function(link){ //13
    link.addEventListener("click" , function(e){
        e.preventDefault() //14
        const id = e.currentTarget.getAttribute("href").slice(1) //15
        console.log(id);
        const element = document.getElementById(id) //doubt ...I don't know how this work.  //16

        //calculate the heights
        const navHeight = navBar.getBoundingClientRect().height //19
        const containerHeight = linksContainer.getBoundingClientRect().height
        // selected earlier but not globally..so need to select again
        const fixedNav = navBar.classList.contains("fixed-nav") //returns true or false

        let position = element.offsetTop - navHeight //18
        if(!fixedNav) {
            position = position -navHeight //doubt
        }
        if (navHeight > 82) { //82 is the height of the top bar in mobile.if > 92 that means navbar is open
            position = position + containerHeight 
        }

        window.scrollTo({ //20
            top: position,
            left: 0
        })
        linksContainer.style.height = 0 //21
    })
})