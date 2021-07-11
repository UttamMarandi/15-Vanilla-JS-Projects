// This prject can be completed in tewo ways

//2. traversing the dom

// 1 . select all the question-btn element
//2. use forEach() method to acess the clicked button 
//3. use e.currentTarget.parenelement to access 'questions' div of the clicked button 
//4. add "show text" class to the questions div 
//5. when one of the question text is open ..remove "show-text " class from other questions. for that access 'question' div and use forEach on that 

const btns = document.querySelectorAll(".question-btn") //1
const question = document.querySelectorAll(".question")


btns.forEach(function(btn){ //2
    btn.addEventListener("click" , function(e) {
        console.log(e.currentTarget.parentElement.parentElement); //3
        
        question.forEach (function(ques){ //5
            ques.classList.remove("show-text")
        })

        e.currentTarget.parentElement.parentElement.classList.toggle("show-text") //4

    })
})



