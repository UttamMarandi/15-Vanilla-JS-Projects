// Counter app : My way...it's simple ..this is what came to my mind 😆. It works but does not contain es6 functions like forEach  as in john smilga tutorial . I will be doing that one too

//1. select all the required elements
//2. button reset is the easy one ..onclick reset button counter resets to 0 
//3. declare a global count variable that is incremented/decremented on click
//4. On increase button click , increment the count value and show it on ui. 
//5. On decrease button click , decrement the count value and show it on ui. 
//6. create a funtion that detemines the color of value based og it being positive or negative
//7. call the function when button is clicked

const value =  document.getElementById("value") //1
const btnDecrease = document.querySelector(".btn-decrease")
const btnReset = document.querySelector(".btn-reset")
const btnIncrease = document.querySelector(".btn-increase")

let count = 0 //3

btnReset.addEventListener("click", function(){ //2
    count = 0
    value.textContent = 0
    value.style.color = "black"
})

btnIncrease.addEventListener("click" , function() {//4
    count += 1
    value.textContent = count
    valueColor() //7
    
})

btnDecrease. addEventListener("click", function() { //5
    count -= 1
    value.textContent = count
    valueColor() //7
})

function valueColor() { //6
    
    if(count < 0 ) {
        value.style.color = "red"
    }
    else if (count > 0) {
        value.style.color = "green"
    }
    else if (count === 0) {
        value.style.color = "black"
    }
}


