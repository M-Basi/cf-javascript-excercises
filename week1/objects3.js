//1

object = {
    1: "Marios",
    2: "Makis",
    3: "Petros",
    4: "Anna"
}

arr = [1,2,3]

function printObject (object, arr) {
    let newObject = {}
    for (let [key, value] of Object.entries(object)) {
        if (arr.includes(Number(key))) {
                newObject[key] = value
            }
        }
    console.log(newObject)
    }

printObject(object, arr)

//2
function mapValues(obj, mappingFn) {
    const newObj = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = mappingFn(obj[key]);
        }
    }
    return newObj;
}


//3


