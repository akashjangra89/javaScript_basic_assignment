// 22. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//     - Sort the array and find the min and max age
ages.sort()
console.log(ages)
const minAge = Math.min(...ages)
const maxAge = Math.max(...ages)
console.log(`Minimum age of student is ${minAge}`)
console.log(`Maximum age of student is ${maxAge}`)

//     - Find the median age(one middle item or two middle items divided by two)
const middle = Math.ceil(ages.length/2)

if (ages.length%2 === 0) {
    console.log(`Median Age of Student is ${ages[middle] + ages[middle+1]}`)
}
else{
    console.log(`Median Age of Student is ${ages[middle]}`)
}

//     - Find the average age(all items divided by number of items)
let sum = 0;
for (let index = 0; index < ages.length; index++) {
    const element = ages[index];
    sum += element;

}
const averageAge = sum/ages.length
console.log(`Average age of student are ${averageAge}`)

//     - Find the range of the ages(max minus min)
console.log(`Range of ages are ${maxAge - minAge}`)

//     - Compare the value of (min - average) and (max - average), use abs() method

const minValue = Math.abs(minAge - averageAge)
const maxValue = Math.abs(maxAge -averageAge)

console.log(`Comparing Values : ${minValue === maxValue}`)