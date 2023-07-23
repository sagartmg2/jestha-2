// function sum(num1, num2) {
//     console.log(`sum of ${num1} and ${num2} is ${num1 + num2}`)
// }

/* arrow function  */

let sum = (num1, num2, ...rest) => {
    console.log({ rest })
    console.log(`sum of ${num1} and ${num2} is ${num1 + num2}`)
}

/* 10+ 2+3+4 = outpt */




sum(10, 2, 3, 4, 5, 6, 7)