/* 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.*/

const countries = ["India", "USA", "China", "Japan", "Pakistan", "Australia",]

if (countries.includes("Ethiopia")) {
    console.log('ETHIOPIA')
}
else{
    countries.push('Ethiopia')
}

console.log(countries)