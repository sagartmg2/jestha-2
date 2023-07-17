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

/* color of kitchen room is green */
/* color of living room  is pink */

// console.log(  rooms[0].room    ) 
// console.log(  rooms[0].color    ) 

// console.log(` color of ${rooms[0].room}  room is ${rooms[0].color}`)
// console.log(` color of ${rooms[1].room}  room is ${rooms[1].color}`)



let fruits = ["apple", "orange"]
/* code here to add kiwi in fruits array */

// console.log("before - fruits", fruits)
// // console.log(fruits[1])
// fruits[1] = "kiwi"
// console.log("after  - fruits", fruits)  // apple,orange
// console.log(fruits[2])
// fruits[2] = "pine-apple"
// console.log("after adding new  - fruits", fruits)  // apple,orange



// let brand = "levis"
// brand = "puma"
// console.log({ brand })

let room1 = {
    room: "one",
    color: "green",
    height: 10,
    width: 10,
    length: 10,
    measurentUnit: "feet",
    members: [
        {
            inde: 0,
            name: "ram",
            start: "feb 1 2022"
        },
        {
            index: 1,
            name: "shyam",
            start: "jan 1 2050",
        }
    ]
}

// console.log(room1.windowCount);
// room1.windowCount = 2


room1.members[0].phoneNumber = 1111111
room1.members[1].phoneNumber = 222222
room1.members[2] = {
    name: "hari",
    phoneNumber: 44444
}
console.log(room1);


// console.log(room1.members[1].start)
// room1.members[1].start = "jan 1 2023"
// console.log("after", room1)



// console.log("before", room1.color)
// room1.color = "white"
// console.log("after", room1.color)




console.log("_________________________________")
console.log("\n\n")
