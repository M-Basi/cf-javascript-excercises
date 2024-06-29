//1
const arr = [1,2,3,4,5,6,7,8]
const arr1 = arr.map(n => n*2)
console.log(arr1)

//2
const arr2 = arr.filter(n => n%2===0)
console.log(arr2)

//3
let isPositive = arr.some(n => n > 0)
console.log(isPositive)

//4
let isAllPositive = arr.every(n => n > 0)
console.log(isAllPositive)