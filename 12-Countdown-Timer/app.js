//PSEUDOCODE
//1. given two arrays consisting of months and weekdays
//2. select all required elements i.e ".giveway" ".deadline" all h4 in all ".deadline-format"
//3. set a futuredate when the giveaway ends using new Date()
//4. get the year , hours and mins ..and display it on ui. These are the easy ones
//5. as Date() returns months as 0 indexed based..use months[] to acess required month
//6.use getMinutes() , getMonth() and getDay() to access mins, month and day
//7. render the date to ui in ".giveway" using template literals
//COUNTDOWN TIMER

//8.get futureDate and currentDate time in milliseconds
//9. The idea is to subtract current time from future date to get the remaining time
//10. use Math.floor, modulus operator, and remaining time to calculate the days, hours, mins and secs remaining
//11. store each of these values in an array "remain"
//12. format the output so that if value in remain is less than 10 than an extra 0 before it
//13. use for each to access each items i.e h4 in deadline-format and pass single item and index to it's callback function
//14. set the innerhtml of h4 to the remain[] values
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

const giveway = document.querySelector(".giveway")//2
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4") //innovative

let futureDate = new Date(2021 , 6 , 24, 18, 34) //3
console.log(futureDate);

const year = futureDate.getFullYear()//4
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth() //5
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()] //6

giveway.textContent = `giveway ends on ${weekday} , ${date} ${months[month]} ${year} ${hours}:${minutes}` //7

// 



function getRemainingTime() {
  let futureTime = futureDate.getTime() //returns value in ms
  let today = new Date().getTime()
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

  function format(iformat) {
    if(iformat < 10) {
      return `0 ${iformat}`
    }
    return iformat
  }

  items.forEach(function(item, index){ //passing single item as well as index as parameter
    item.innerHTML = format(remain[index])
  })
  
}
//countdown
let countdown = setInterval (getRemainingTime, 1000)
getRemainingTime()