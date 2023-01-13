// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

for(i=0;i<=100; i++){
    let prime = 0;
    for(j=2; j<i; j++){
        if(i%j ===0){
            prime = 1
            break;
        }
    }
    if (i > 1 && prime === 0) {
        console.log(i)
    }
}