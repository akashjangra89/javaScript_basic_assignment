// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let input = parseInt(prompt('Enter Any Number'))

if (isNaN(input)) {
    alert('Please Enter No. Only')
}
else if (input < 0) {
    alert(`${input} is a Negative Number. Plz Enter Positive No.`)
}
else if (input % 2 === 0) {
    alert(`${input} is a Even Number`)
}
else {
    alert(`${input} is a Odd Number`)
}