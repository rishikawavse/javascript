// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)// this will not give predictable result -- we must compare same datatype

console.log(null>0)
console.log(null==0)
console.log(null>=0) // here comparison will convert null to a number, treating as 0;

console.log("2"===2) // triple equality checks the data type too , do not convert the datatype 