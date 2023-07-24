// function sum(num1, num2) {
//     console.log(`sum of ${num1} and ${num2} is ${num1 + num2}`)
// }

/* arrow function  */

const sum = (num1, num2, ...rest) => {

    // console.log(`sum of ${num1} and ${num2} is ${num1 + num2}`)
    console.log(rest) //  [30, 401,2, 3,4,5,100 ]
    let finalSum = 0
    finalSum += num1
    finalSum += num2

    for (let index = 0; index < rest.length; index++) {
        // add array data to above result
        // console.log( rest[index] )
        finalSum += rest[index]
    }

    console.log({ finalSum })


}






/* 10+ 2+3+4 = outpt */




// sum(10, 2)
sum(10, 10, 30, 401, 2, 3, 4, 5, 100)