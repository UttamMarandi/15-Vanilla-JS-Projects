const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 56.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//1. Given meny[] array of objects whose data needs to rendered to ui
//2. Select all elements
//3. we want to run a function the moment DOM is loaded , that's why DOMContentLoaded
//4. use map function on menu to iterate through each object in array and modify its content
//5. using template literals in return of a function
//6. producing html from map...using .join() method on displayMenu
//7. use innerHTMl to render the generated html to ui

//SET UP FILTERING
//8. wrap all the code from 4-7 in a function render() b.c this piece of code will run each time filter buttons are clicked. function will take an array of objects as argument.. call render() within DOMContentloaded event
//9. create data-id attribute in html and use dataset to access data-id. data-id contains the category of menu item
//10. use filter method to access only those objects who have same categories
//11. call render() with required parameter to display filtered content in ui
//12. for "all" button call render() method again to render all objects in array

// DYANAMIC CATEGORIES
//13. Right now everything works but what if I add a new menuItem with a new category , then that categaory will not show up in filter buttons.
//14. Create a function renderCategory to render the categories
//15. use .reduce() method to iterate over each object and store unique categories in new array
//16. .reduce() is a complex function ..need to research more on this. basically it takes two parameters accumulator and current. accumulator is a function which again takes two parameters ..1st is the array that needs to be returned..2nd is  copy of the array on which reduce is implemented. accumulator always returns a value for it to function



const sectionCenter = document.querySelector(".section-center")
const filterBtns = document.querySelectorAll(".filter-btn")

//render items
function render(menuItems) {
  
    let displayMenu = menuItems.map(function(item){ //4
      console.log(item);
      //5
      return `
      <article class="menu-item">
      <img src="${item.img}" alt="menu img" class="photo">
      <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>
    `
    })
    displayMenu = displayMenu.join("") //6
  
    sectionCenter.innerHTML = displayMenu
    console.log(displayMenu);
    console.log(menu);
  
}

//render categories

function renderCategory(menuItems) { //15
  const categories = menuItems.reduce( function(values, menuArray) {
    if(!values.includes(menuArray.category)) {
      values.push(menuArray.category)
    }
    return values
    
  }, ["all"])
  console.log(categories);
}

//filer buttons
filterBtns.forEach(function(btn) {
  btn.addEventListener("click" , function(e){
    const category = e.currentTarget.dataset.id //9
    
    const menuCategory = menu.filter(function(menuItem) {  //10 
      if(category === menuItem.category) {
        return menuItem
      }
    })
    render(menuCategory) //11

    if(category === "all") { //12
      render(menu)
    }
    console.log("Menu Category");
    console.log(menuCategory);
  })
})


window.addEventListener("DOMContentLoaded" , function(){ //3
  render(menu)
  renderCategory(menu)
 
  // const categories = menu.reduce(
  //   function (values, item) {
  //     if (!values.includes(item.category)) {
  //       values.push(item.category);
  //     }
  //     return values;
  //   },
  //   ["all"]
  // );

  

})
