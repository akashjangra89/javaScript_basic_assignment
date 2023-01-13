// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let number = 3
let pattern = ''
for (i = 0; i < number; i++) {
    pattern += '*'
    console.log(pattern)
}


// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let pattern1 = ''
for(let i = 0; i < number; i++) { 
    for(let j = 0; j < number; j++) { 
      pattern1 += "*";
      
    }
    pattern1 += "\n"; 
  }
  console.log(pattern1);

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

let pattern2 =''
for (let i = 1; i <= number; i++) {
    
    for (let j = 1; j <= number - i; j++) {
      pattern2 += " ";
    }
    
    for (let k = 0; k < 2 * i - 1; k++) {
      pattern2 += "*";
    }
    pattern2 += "\n";
  }
  console.log(pattern2);