/* Promise 
     - pending
     - resolve
     - rejected
*/

/* exceptional handling... */

// let num2 = 2
// let num3  = 3

// try {
//     let num1 = num2 + num3
//     console.log({ num1 });
// } catch (error) {
//     // console.log("error is ", error)
//     console.log("error is ", error.message)
// }


let promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve([{ name: "css" }, { name: "html" }])
        // reject("server error")
    }, 3000)
})

console.log(promise1)

promise1
    .then((response) => {
        console.log({ response })
    })
    .catch((error) => {
        console.log({ error })
    })


console.log("do other task");
console.log("do other task - 1");
console.log("do other task - 2");



















// function Car(title) {
//     return { name: title }
// }

// function Car(title) {
//     this.title = title
// }

// class Car {
//     constructor(title) {
//         this.title = title
//     }
// }


// let car1 = new Car("tesla")
// let car2 = new Car("bmw")
// console.log({ car1 });
// console.log({ car2 });

// let car1 = {name:"testla"}
// let car2 = {name:"bmw"}
// let car3 = {name:"mercidez"}
