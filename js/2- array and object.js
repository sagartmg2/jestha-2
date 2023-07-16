/* variables  // container/box that can store some values */
/* data types
    primitive data-types
        1. String - text
        2. number
        3. Boolean 
            -true
            -false
        4. undefined // in js only
        5. null
    non-prmive  // collections// reference-data-types
        1. array
        2. object
*/

/* var vs let vs const */
let price = 1000
let inStock = true

/* declartion vs initialzation */
let color; // color variable declared
console.log("before color =", color)

color = "red" // color variable is initialzied.
color = "white" // re-initializaiton

console.log("after color =", color)


var count;
console.log("before count", count)
count = 100
count = 200
count = 300
console.log("after count", count)




const PI = 3.14
const ROTATION = "W-E"
// ROTATION = "E-W"  // constatnt variables cannot be re-initialized.


var count = 30000
console.log("count", count)

let brand_name = "nike"
let brandName = "nike"
// let brand = "puma"  // cannot create the same variable if declared using let keyword


// let status = undefined
let data = null //  empty // when we have to defined data as empty explicitely




let fruit1 = "apple"
let fruit2 = "orange"
let fruit3 = "kiwi"

// let fruits = "apple","orange" 

/* Array   
        - collection of differnet values
*/

let fruites = ["apple", "oranges"]
console.log(fruites)

/* Object  
    syntax
    let <objecVaraible> = {  
        <property> : <value>,
        <key>  : <value>, 
        <attribute> : <value>
     }
*/

let projectorName = "dlp"
let projectorColor = "black"
let projectorPrice = 50000

let projector2Name = "acer"
let projector2Color = "grey"
let projector2Price = 40000

let projector1 = {
    name: "dip",
    color: "black",
    price: 5000
}

let projector2 = {
    name: "acer",
    color: "grey",
    price: 40000
}

console.log(projector1)

