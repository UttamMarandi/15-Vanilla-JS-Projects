// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


//1. reviews is an array of objects that needs to be displayed in ui.. each object in review[] represents a dii person.
//2. Select all elements that needs to be manipulatod including buttons
//3. declare currentItem variable that specifies the current indexed person
//4. fire an event listener when all the elements are loaded. use of DOMContentLoaded on window object
//5. acess and store the current review in item variable. 
//6. acess and change values based on the elements - use a function for that showPerson()
//7. eventclcik for next button ..loop functionality using if statement
//8. eventclick for prev button
//9. random button functionality...use Math.random to generate currentItem

const img = document.getElementById("person-img") //2
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")


let currentItem = 1 //3

window.addEventListener("DOMContentLoaded" , function() { //4
  showPerson(currentItem)

})

//show person based on item

function showPerson(person) {
  const item = reviews[person] //5 ..
  img.src = item.img //6
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}

//show next person

nextBtn.addEventListener ("click", function () { //7

  currentItem ++
  if(currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})

// show prev button
prevBtn.addEventListener ("click", function () { //8

  currentItem --
  if(currentItem === 0) {
    currentItem = reviews.length -1
  }
  showPerson(currentItem)
})

//random button
randomBtn.addEventListener ("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem);
  showPerson(currentItem)
})