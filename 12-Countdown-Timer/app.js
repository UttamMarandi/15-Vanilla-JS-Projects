//PSEUDOCODE
//1. given two arrays consisting of months and weekdays
//2. select all required elements i.e ".giveway" ".deadline" all h4 in all ".deadline-format"
//3. set a futuredate when the giveaway ends using new Date()
//4. get the year , hours and mins ..and display it on ui. These are the easy ones
//5. as Date() returns months as 0 indexed based..use months[] to acess required month
//6.use getMinutes() , getMonth() and getDay() to access mins, month and day
//7. render the date to ui in ".giveway" using template literals
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveway = document.querySelector(".giveway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4") //innovative

let futureDate = new Date(2021 , 6 , 24, 18, 34)
console.log(futureDate);

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth()
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

giveway.textContent = `giveway ends on ${weekday} , ${date} ${months[month]} ${year} ${hours}:${minutes}`

// 

const futureTime = futureDate.getTime() //returns value in ms
const today = new Date().getTime()

function getRemainingTime() {
  let t = futureTime - today
  console.log(t);
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1day = 24hr

  //values in ms
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000
  const oneSecs = 1000
  let dayRemain =Math.floor( t/oneDay)
  // let hourRemain = Math.floor((t-(dayRemain * oneDay))/oneHour)
  //above works but tedious..use modulus operartor instead ..stable and scalabele
  let hourRemain = Math.floor((t % oneDay)/oneHour)
  console.log(hourRemain);
  let minRemain = Math.floor((t % oneHour )/oneMinute)
  console.log(minRemain);
  let secsRemain = Math.floor((t % oneMinute) / oneSecs)
  console.log(secsRemain);

  let remain = [dayRemain , hourRemain, minRemain, secsRemain ]

  items.forEach(function(item, index){ //passing single item as well as index as parameter
  
    item.innerHTML = remain[index]
  })
  
}
getRemainingTime() 