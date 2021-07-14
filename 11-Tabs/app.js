//PSEUDO-CODE
//1. Select all the tab buttons, ".about" div and ".content" div
//2. add a click event to about whose anynonymous function takes event object as parameter.
//3. use e.target to access the dataset "id" so that we can access only the buttons
//4. if id exists means that the clicked element is a button
//5. use a for each method to remove "active" class if added to the btn elements
//6. use e.target to access the button which is clicked and add "active" class to it , also remove active class from all button just before that
//7.run a for each function on articles and remove "active" class from each article.
//8. get id of article using getAttribute
//9. if id from e.target is equals to the id of article ..add "active" class to the article.
//10. Note: My code (8-10) is little bit diffrent from john. but I am keeping this one. I feel like i understood this one better 


const btns = document.querySelectorAll(".tab-btn") //1
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", function(e){ //2
    console.log(e.target);
    const id = e.target.dataset.id //3
    console.log(id);
    if(id) { //4
        btns.forEach(function(btn){
            btn.classList.remove("active") //5
            e.target.classList.add("active") //6
        })
    }
    articles.forEach(function(article){ //7
        let contentId = article.getAttribute("id") //8
        article.classList.remove("active")
        if(id === contentId) { //9
            article.classList.add("active")
        }
    })
    
})
