// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let month = prompt('Enter Month Name', 'September')

    switch (month) {
        case 'September':
        case 'October':
        case 'November':
        case 'september':
        case 'october':
        case 'november':
        case 'Sept':
        case 'Oct':
        case 'Nov':
        case 'sept':
        case 'oct':
        case 'nov':
            alert(`Season in ${month} is Autumn`)
            break;
        case 'January':
        case 'February':
        case 'December':
        case 'january':
        case 'february':
        case 'december':
        case 'Jan':
        case 'Feb':
        case 'Dec':
        case 'jan':
        case 'feb':
        case 'dec':
            alert(`Season in ${month} is Winter`)
            break;
        case 'March':
        case 'April':
        case 'May':
        case 'march':
        case 'april':
        case 'may':
        case 'Mar':
        case 'Apr':
        case 'mar':
        case 'apr':
            alert(`Season in ${month} is Spring`)
            break;
        case 'June':
        case 'July':
        case 'August':
        case 'june':
        case 'july':
        case 'august':
        case 'Jun':
        case 'Jul':
        case 'Aug':
        case 'jun':
        case 'jul':
        case 'aug':
            alert(`Season in ${month} is Summer`)
            break;
        default:
            alert(`Plz Enter Month Between January To December`)
            break;
    }
