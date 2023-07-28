


let users = [
    "ram", "hari", "shyam", "john"
]

users.push("sita")

// for (let index = 0; index < users.length; index++) {
//     console.log(users[index])
// }

/* array functions */

/* callback
    a function passed as arguemet to another function
*/

// let printUser = (user, index) => {
//     console.log("user:", user, index)
// }
// users.forEach(printUser)

users.forEach((user, index) => {
    console.log(user, index)
})


/* double the array */


function double(arr) {

    let emptyArr = []
    arr.forEach(el => {
        emptyArr.push(el * 2)
    })
    return emptyArr

}

let doubledArray = double([1, 2, 3])
console.log({ doubledArray })


/* map function  // IMPORTANT in REACT 
    returns new array of exact same length as old one 
*/

// let doubledArray2 = [4, 5, 6, 3, 5, 7].map((el) => { return el * 2 })
let doubledArray2 = [4, 5, 6, 3, 5, 7].map(el => el * 2)
console.log({ doubledArray2 })


function filterEvenNumbers(arr) {

    let evenNumbers = []
    arr.forEach(number => {

        if (number % 2 == 0) {
            evenNumbers.push(number)
        }
    })

    return evenNumbers
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [ 2,4,6 ]

let evenNumbers = [3, 4, 5, 6, 7, 8, 9, 10].filter((number) => { 
    if (number % 2 == 0) {
        return true
    }
    return false
 })

console.log({evenNumbers});






