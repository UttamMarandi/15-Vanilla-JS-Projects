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
