//1. colors[] have the color values. Get button and span tag as js variables.
// 2 . Onclick - generate a random number between 0 & 3 as colors[] has 4 element 
//3. change the style(background color) of body
//4.  display the color name on span tag same to the background
//5. refactor code : instead of hard coded colors[] length...use array.length


const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color")


btn.addEventListener("click" , function(){
    // let randomNumber = Math.floor(Math.random() * 4) //2
    let randomNumber = Math.floor(Math.random() * colors.length) //5
    document.body.style.backgroundColor = colors[randomNumber] //3
    color.textContent = colors[randomNumber]
    
})
