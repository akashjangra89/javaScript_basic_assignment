// 15. Write a program which can give grades to students according to theirs scores:

let score = parseInt(prompt('Enter Your Score'))

function checkGrade(score) {
    if (isNaN(score)) {
        alert('Please Enter No. Only')
    } else if(score >= 80 && score <= 100) {
        //     - 80-100, A
        alert(`You got A Grade`)
    }
    //     - 70-79, B
    else if(score >= 70 && score <= 79) {
        alert(`You got B Grade`)
    }
    //     - 60-69, C
    else if(score >= 60 && score <= 69) {
        alert(`You got C Grade`)
    }
    //     - 50-59, D
    else if(score >= 50 && score <= 59) {
        alert(`You got D Grade`)
    }
    else if(score > 100 || score < 0){
        alert(`Enter Score between 0 to 100 Only`)
    }
    else {
        //     - 0-49, F
        alert(`You got F Grade`)
    }
}

checkGrade(score)


