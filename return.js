/* 
function sum(num1, num2) {
    return num1 + num2
} 
*/


// const sum = (num1, num2) => {
//     return num1 + num2
// }

const sum = (num1, num2) => num1 + num2


console.log("sum is ", sum(2, 4))



console.log("type", typeof (1212))


const createPerson = (name,age) => {
    return { name,age}
    console.log(1)
    console.log(1)
    console.log(1)
    console.log(1)
}

// const createPerson = (name, age) => ({ name, age })


console.log(createPerson("ram", 20))


// const double = (num) => num * 2
const double = num => num * 2

console.log(double(2))
console.log(double(3))


let fruites = ["apple", "orange", "kiwi"]

// fruites[0]
// fruites[1]
// fruites[2]

// for (let index = 0; index < fruites.length; index++) {
//     console.log(fruites[index])
// }

fruites.forEach((element,index) => {
    console.log(element)
})

/* map find filter  */