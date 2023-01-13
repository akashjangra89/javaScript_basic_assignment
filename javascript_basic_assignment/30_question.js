// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

let firstNumber = parseFloat(prompt('Enter First Number'))
let secondNumber = parseFloat(prompt('Enter Second Number'))
let symbol = prompt('what do you want to calculate', 'plus, minus, divide, multiply')

if (isNaN(firstNumber)) {
    alert(`Please Enter Number Only`)
}
else if (isNaN(secondNumber)) {
    alert(`Please Enter Number Only`)
}

else if (symbol == 'plus') {
    alert(`Addition is : ${firstNumber+secondNumber}`)
}
else if (symbol == 'minus') {
    alert(`Subtraction is : ${firstNumber-secondNumber}`)
}
else if (symbol == 'divide') {
    alert(`Division is : ${firstNumber/secondNumber}`)
}
else if (symbol == 'multiply') {
    alert(`Multiplication is : ${firstNumber*secondNumber}`)
}
