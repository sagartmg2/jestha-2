/* 

    TODO: create an array of rooms in your house.
*/

let room1 = "kitchen"
let room2 = "living"
let room3 = "bedroom"
let room4 = "bedroom2"

let room5 = {
    room: "kitchen",
    color: "grren",
    height: 10,
    width: 10,
    length: 10,
    measurentUnit: "feet"
}

let room6 = {
    room: "living",
    color: "pink",
    height: 10,
    width: 10,
    length: 15,
    measurentUnit: "feet"
}


// let rooms = [room1, room2]
// let rooms = ["kitchen", "living"]
// let rooms = ["kitchen", "living"]
// let rooms = [room3, room5, room6]
let rooms = [
    {
        room: "kitchen",
        color: "green",
        height: 10,
        width: 10,
        length: 10,
        measurentUnit: "feet"
    },
    {
        room: "living",
        color: "pink",
        height: 10,
        width: 10,
        length: 15,
        measurentUnit: "feet"
    }
]

/* 
    TODO: 
    kitchen room has green color
    living room has pink color
*/
// console.log("rooms = ", rooms)




// let arrIndexs = [0, 1, 2, 3]  // indexes alwys starts with 0
let fruits = ["apple", "orange", "kiwi", "pineapple"]
// console.log("in 2nd index we have", fruits[2])

/* object (key,property,attribute,field) : <value> */

let projector1 = {
    "brand": "viewsonic",
    "price": 50000,
    "model": "xyz"
}



let projector2 = {
    brand: "acer",
    price: 100000,
    model: "xyz-100"

}

let projector3 = {
    brand: "acer",
    price: 200000,
    model: "xyz-200"
}


/* TODO:
    price of viewson-xyz is 500000
    price of acer-xyz-100 is 100000
    price of acer-xyz-200 is 200000
*/
console.log(projector1.brand)

// console.log("hello","world")
// console.log("hello"+" "+"world")

console.log("price of", projector1.brand + "-" + projector1.model + " is", projector1.price)
console.log("price of", projector2.brand + "-" + projector2.model + " is", projector2.price)
console.log("price of", projector3.brand + "-" + projector3.model + " is", projector3.price)

/*  
TEMPLATE LITERAL  -- MUST KNOW FOR REACT  // string literal
    back tick ` 

*/

let greeting = "Nihao"

console.log(greeting, "world ")
console.log(greeting + ' world')
console.log(`${greeting} world`)

