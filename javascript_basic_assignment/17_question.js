// 17. Write a program which tells the number of days in a month.


let month = prompt('Enter Month Name', 'September')

    switch (month) {
        case 'January':
        case 'january':
        case 'Jan':
        case 'jan':
        case 'March':
        case 'May':
        case 'march':
        case 'may':
        case 'Mar':
        case 'mar':
        case 'July':
        case 'August':
        case 'july':
        case 'august':
        case 'Jul':
        case 'Aug':
        case 'jul':
        case 'aug':
        case 'October':
        case 'october':
        case 'Oct':
        case 'oct':
        case 'December':
        case 'december':
        case 'Dec':
        case 'dec':
            alert(`Number of day in ${month} are 31`)
            break;
        case 'February':
        case 'february':
        case 'Feb':
        case 'feb':
            alert(`Number of day in ${month} are 28`)
            break;
        case 'April':
        case 'april':
        case 'Apr':
        case 'apr':
        case 'June':
        case 'june':
        case 'Jun':
        case 'jun':
        case 'September':
        case 'November':
        case 'september':
        case 'november':
        case 'Sept':
        case 'Nov':
        case 'sept':
        case 'nov':
            alert(`Number of day in ${month} are 30`)
            break;
        default:
            alert(`Plz Enter Month Between January To December`)
            break;
    }
