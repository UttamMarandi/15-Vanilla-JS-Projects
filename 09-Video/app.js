// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

//1. select required elements i.e video and switch
//2. add an click event to button . 
//3. slide class moves the span with class switch to left 50 %. Add the "slide" class to btn and remove it if already added to create click functionality in ui

//Pre-Loader
//4. Add a "load" event on window . diffrence between load and DOMContentLoaded
//5. add "hide=preloader" class when load is fired


const btn = document.querySelector(".switch-btn")//1
const video = document.querySelector(".video-container")
const preloader = document.querySelector(".preloader")



btn.addEventListener("click" , function(){ //2
   
    if(!btn.classList.contains("slide")) { //3
        btn.classList.add("slide")
        video.pause()
    }
    else {
        btn.classList.remove("slide")
        video.play()
    }
})

window.addEventListener("load",function(){ //4
    preloader.classList.add("hide-preloader") //5
})