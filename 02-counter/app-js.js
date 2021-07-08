// Counter app : John Smilga way

//1. select value and all buttons using querySelectorAll
//2. use forEach function to select each button in node list
//3. When any button is clicked , anyonomus fuction is run which takes the clicked button as its parameter
//4. store all the class for the button using currenTarget.classList in styles 
//5. use if statments to determine the clicked button if the styles containes the specific class. 
//6. increment / decrement / reset according to button

//7. change the color based on count being positive or negative. use of 'if' statements

const value =  document.getElementById("value") //1
const btns = document.querySelectorAll(".btn")

console.log(btns);

let count = 0 

btns.forEach( function (btn) {  //2
    btn.addEventListener("click", function(e){ //3
        console.log(e);
        const styles = e.currentTarget.classList //4
        console.log(styles);

        if(styles.contains("btn-decrease")) { //5

            count -- //6            
        }

        if(styles.contains("btn-increase")) {
            count ++
        }

        if(styles.contains("btn-reset")) {
            count = 0
        }
        //to change color
        if (count>0) {      //7
            value.style.color = "green"
        }
        if(count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "black"
        }

        value.textContent = count
    })
} )