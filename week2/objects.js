const people = [
    {name: "Alice", age: 29},
    {name: "Bob", age: 25},
    {name: "Carlie", age: 35}
]

//1
const newPeople = people.filter(obj => {
    if(obj.age < 30) {
        return obj
    }
})

console.log(newPeople)

//2
const newPeopleNmes = people.map(obj => obj.name)
console.log(newPeopleNmes)