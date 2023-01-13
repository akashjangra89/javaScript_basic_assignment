// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let input = prompt(`Enter Your Age: `)
if (input < 18) {
    alert(`Sorry wait for ${18 - input} year.`)
} else {
    alert(`Nice you are old enough to drive`)
}
