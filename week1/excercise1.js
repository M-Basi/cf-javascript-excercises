//1.1
let name = 'Marios'

console.log("Hello, " + name)

//1.2
let num1 = 1
let num2 = 2
const sum  = num1 + num2
console.log(sum)


//1.3
const isTrue = false
let message = (isTrue ? "Είναι Αλήθεια!" : "Είναι ψευδές")
console.log(message)


//2.1

const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")

cities.forEach(city => console.log(city))

//2.2
const user = {
    name: "Marios",
    age: "39",
    city: "Athens"
}

console.log(user.name, user.age, user.city)

function hello() {
    console.log("Hello " + user.name)
}

hello(user)


//2.3
function circleArea (r) {
    return Math.PI * r*r
}

console.log(circleArea(5).toFixed(2))