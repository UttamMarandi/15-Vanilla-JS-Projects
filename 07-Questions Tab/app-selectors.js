// This prject can be completed in tewo ways

//1. using selectors inside the element

//1. select required element i.e question
//2. apply forEach on questions to access eaach question div
//3. use queryselector on question to limit the access of the querySelector. Earlier we were using it on document but we can also use it on selected elements

const questions = document.querySelectorAll(".question") //1


questions.forEach(function(question) { //2
    const btn =  question.querySelector(".question-btn")
    
    if(question.classList.contains("show-text")) {
        question.classList.remove("show-text")
    }
    
    btn.addEventListener("click" , function(){ //3
        
        questions.forEach(function(ques){
            if(ques != question) { //logiaclly ques and question represent the same div element..but question is used for the div for wiich button is clicked..and ques for rest div with "question" class
                ques.classList.remove("show-text")
            }
            
        })

        // ques.classList.remove("show-text") ..we cannot do this b.c questions represent all the div with .question class. we have to use for each

        question.classList.toggle("show-text")
               
    })
})


// This prject can be completed in tewo ways

//1. using selectors inside the element

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


// traversing the dom
