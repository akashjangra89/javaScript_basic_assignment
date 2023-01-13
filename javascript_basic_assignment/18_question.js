// 18. Write a program which tells the number of days in a month, now consider leap year.

let month = parseInt(prompt('Enter Month', 'Eg. 1'))
let year = parseInt(prompt('Enter year', '2023'))

function calculateDays(month, year) {
    if (isNaN(month) || isNaN(year)) {
        alert('Please Enter in Digit Only')
    }
    else if (month <= 0 || month > 12) {
        alert(`Please Enter Month Between 1 to 12`)
    }
    else if ((month === 1) || (month === 01) || (month === 3) || (month === 03) || (month === 5) || (month === 05) || (month === 7) || (month === 07) || (month === 8) || (month === 08) || (month === 10) || (month === 12)) {
        alert(`Number of days in ${month} are 31`)
    }
    else if ((month === 2 || month === 02) && (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        alert(`Number of days in ${month} are 29`)
    }
    else if (month === 2 || month === 02) {
        alert(`Number of days in ${month} are 28`)
    }
    else {
        alert(`Number of days in ${month} are 30`)
    }
}

calculateDays(month, year) 