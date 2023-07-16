
let count = 100  // declaration and initalziation.  

let brand; // declartion
brand = "nike" // initialzation
brand = "puma" // re-initialzation

let inStock = true


let color;
console.log("color", color) // undefined

/* data-types  string,number,boolean,undefined,null */


/* array and objects // collections 
    array -syntax 
        let <arrayVaraible> = [ <element1>,<elment2>,<element3>  ]
    
    array: collection of different values
    most of the time its is collection of similar data-types

    
    object-syntax

    let <obj> = {
        <key> : <value>,
        <property> : <value>,
        <attribute> : <value>,
    }

*/

// let courses = "web","mern","pytohn"
// let courses = ["web", "mern", "python"]

let course1 = {
    "title": "web",
    "duration": 2,
    price: 15000
}

let course2 = {
    title: "mern",
    duration: 3,
    price: 15000
}

let course3 = {
    title: "python",
    duration: 2.5,
    price: 15000
}

let courses = [course1, course2, course3, { title: "graphic", price: 12000, duration: 2 }]
console.log(courses)


let activeStatus = [true, false, true]
console.log("activeStatus", activeStatus)


// let ages = [10,0 30, 20, "thirty", {title:"web"},null,undefined] // not right way
let ages = [1, 30, 20]
console.log("ages", ages)




// let colors = [0th index ,1st index ,2nd index]
// let colors = [<element1>,<element2>,<element3>]
let colors = ["red", "white", "teal"]

/* TODO: create a new array of colors which has both name as well as hex */

// console.log({"colors":colors})
// console.log({colors:colors})
// console.log({colors})

/* INDEXs in array  !!! important    -- indexes always starts with 0 */
console.log("in 0th index we have", colors[0])
console.log("in 1st index we have", colors[1])
console.log("before -- in 2nd index we have", colors[2])



// let projectorColor = "white"
// projectorColor = "black"

colors[2] = "cyan"

console.log("after -- in 2nd index we have", colors[2])

let green = "green"

let hexColors = [
    {
        name: "red",
        hexValue: "#ff000",
        rgbValue: "rgba(255,0,0)"
    },
    {
        name: "green",
        hexValue: "#00800",
        rgbValue: "rgba(0,255,0)"
    }
]

console.log(hexColors)












