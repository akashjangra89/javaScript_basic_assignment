// Create a human readable time format using the Date time object

//     - YYYY-MM-DD HH:mm

function yearFirst() {
    let date = new Date();
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes())
    if (month.length < 2) {
        month = '0' + month
    }
    if (day.length < 2) {
        day = '0' + day
    }
    if (hours < 2) {
        hours = '0' + hours
    }
    if (minutes.length < 2) {
        minutes = '0' + hours
    }
    return `${year}-${month}-${day} ${hours}:${minutes}`
}

console.log(yearFirst())

// //     - DD-MM-YYYY HH:mm

function dateFirst() {
    let date = new Date();
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes())
    if (month.length < 2) {
        month = '0' + month
    }
    if (day.length < 2) {
        day = '0' + day
    }
    if (hours < 2) {
        hours = '0' + hours
    }
    if (minutes.length < 2) {
        minutes = '0' + hours
    }
    return `${day}-${month}-${year} ${hours}:${minutes}`
}

console.log(dateFirst())

// //     - MM/DD/YYYY HH:mm

function monthFirst() {
    let date = new Date();
    let year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes())
    if (month.length < 2) {
        month = '0' + month
    }
    if (day.length < 2) {
        day = '0' + day
    }
    if (hours < 2) {
        hours = '0' + hours
    }
    if (minutes.length < 2) {
        minutes = '0' + hours
    }
    return `${month}/${day}/${year} ${hours}:${minutes}`
}

console.log(monthFirst())