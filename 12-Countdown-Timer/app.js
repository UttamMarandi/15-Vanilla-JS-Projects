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
//15. if time remaining is less than 0 means that countdown has experied. change innerHTML of ".deadline " accordingly
//16. use setInterval() to call getRemainingtime once each second
//17. also clearInterval() when checking for time remaining < 0, so that we stop getInterval.
//18. call getRemainingTime() in the end so that we have access to clearInterval() after time remaining < 0
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

let futureDate = new Date(2021 , 6 , 15, 13, 43) //3
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
  let futureTime = futureDate.getTime() //returns value in ms 8
  let today = new Date().getTime()
  let t = futureTime - today //9
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
  let hourRemain = Math.floor((t % oneDay)/oneHour) //10
  console.log(hourRemain);
  let minRemain = Math.floor((t % oneHour )/oneMinute)
  console.log(minRemain);
  let secsRemain = Math.floor((t % oneMinute) / oneSecs)
  console.log(secsRemain);

  let remain = [dayRemain , hourRemain, minRemain, secsRemain ] //11

  function format(iformat) { //12
    if(iformat < 10) {
      return `0 ${iformat}`
    }
    return iformat
  }

  items.forEach(function(item, index){ //passing single item as well as index as parameter 13
    item.innerHTML = format(remain[index]) //14
  })
  
  if(t<0) { //15
    clearInterval(countdown) //17
    deadline.innerHTML = `<h4 class="expired"> Sorry, this giveway has expired </h4>`
  }

}
//countdown
let countdown = setInterval (getRemainingTime, 1000) //16
  
getRemainingTime() //18