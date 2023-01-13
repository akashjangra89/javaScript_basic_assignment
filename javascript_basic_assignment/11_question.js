// 11. Use the Date object 

//     - What is the year today?

let date = new Date()
let year = date.getFullYear()
console.log(`Year is ${year}`)

//     - What is the month today as a number?

let month = date.getMonth()
console.log(`Month is ${month}`)

//     - What is the date today?
let todayDate = date.getDate()
console.log(`Date is ${todayDate}`)

//     - What is the day today as a number?
let day = date.getDay()
console.log(`Day is ${day}`)

//     - What is the hours now?
let hours = date.getHours()
console.log(`Hour now is ${hours}`)

//     - What is the minutes now?
let minutes = date.getMinutes()
console.log(`Minutes now is  ${minutes}`)

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let elapsed = Date.now()
let getSeconds = elapsed/1000
console.log(Math.floor(getSeconds))

