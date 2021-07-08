const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// 1. Select all the required elements : button , color span
//2. generate a random hex code using for loop and Math.random
//3. on click use the generated random hex code to cheage background and span text
//4. wrap the hexcode generate code within a function so that it runs whenever the button is clicked
//5. set indexNum back to empty ready for next click 



const button = document.getElementById("btn")
const color = document.querySelector(".color")
let indexNum = ""

function indexHex() { //4
    for(let i=0; i < 6; i++){ //2
        indexNum += hex[Math.floor(Math.random()*hex.length)]
    }
    indexNum = "#" + indexNum
    return indexNum
}



button.addEventListener("click", function(){ 
    indexHex()
    document.body.style.backgroundColor = indexNum //3
    color.textContent = indexNum
    indexNum = "" //5
})




