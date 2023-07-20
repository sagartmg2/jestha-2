/* calcualate difference of two numbers */
/* 
    10 - 5 = 5
    100 - 5 = 95
    0 - 5 = -5
*/




// console.log("10 - 10", "=", 0)
// console.log("100 - 6", "=", 95)
// console.log("0 - 5", "=", -5)

/* DRY - donot reapeat yourself  // re-use codes*/

function calculateDiff(number1, number2) {
    console.log(`${number1} - ${number2}`, "=", (number1 - number2))
}

calculateDiff(100, 5)
calculateDiff(30, 20)
