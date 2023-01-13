// 23. Write a program to check that the number given by the user is a prime number or not.

let input = parseInt(prompt('Enter Any Number'))
isPrime = true
function checkPrime(params) {
    if (isNaN(params)) {
        alert('Enter Number Only')
    } else if (params > 1) {
        for (let i = 2; i < params; i++) {
            if (params % i == 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            alert(`${params} is a prime number`);
        } else {
            alert(`${params} is a not prime number`);
        }

    }

}
checkPrime(input)