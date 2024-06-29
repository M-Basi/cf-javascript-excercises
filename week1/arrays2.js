// 1.1
const arr = [1,1,2,2,5,6,7,8,8]
const arrStr = ['Marios','Anna','Marios','Anna','Petros']

let arrSet = [...new Set(arr.map(n =>n))]
let arrSetStr = [...new Set(arrStr.map(n =>n))]

console.log(arrSet)
console.log(arrSetStr)


//  1.2
 const arrNested = ['Marios','Anna','Petros','Makis', [1, 2, 3, 4, 5]]

 function nestedToSimpleArray(arrNested) {
    const simpleArray = []
    arrNested.map(item => {
        if (Array.isArray(item)) {            
                item.forEach(a => simpleArray.push(a))
            }
            else {
                simpleArray.push(item)
            }        
        }
    
    )
    return simpleArray
 }

 console.log(nestedToSimpleArray(arrNested))

// 2.1

const arr1 = [1,1,2,2,5,6,7,8,8, 9]
function subArray(arr, n) {
    const newArr = []
    while (arr.length > n) {
        newArr.push(arr.splice(0, n))
        }
        newArr.push(arr.splice(0, n))
        return newArr
    }
     
console.log(subArray(arr1, 3))


//2.2
const arr2 = [1,2,5,6,7,8, 9]
const arr3 = [1,9]
function commonElements(arr1,arr2) {
    const newArr = []
    arr1.forEach(element => {
        if (arr2.includes(element))
            newArr.push(element)
    });
    return newArr
}

console.log(commonElements(arr2, arr3))