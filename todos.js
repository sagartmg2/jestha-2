
/* 
    block comment     alt + shift + a

        Do something nice for someone I care about is completed...
        Memorize the fifty states and their capital is pending..
        Watch a classic movi is pending...
        Contribute code is pending...

*/





let todos = [
    {
        "id": 1,
        "todo": "Do something nice for someone I care about",
        "completed": true,
        "userId": 26
    },
    {
        "id": 2,
        "todo": "Memorize the fifty states and their capitals",
        "completed": false,
        "userId": 48
    },
    {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": false,
        "userId": 4
    },
    {
        "id": 4,
        "todo": "Contribute code or a monetary donation to an open-source software project",
        "completed": false,
        "userId": 48
    },
    {
        "id": 5,
        "todo": "Solve a Rubik's cube",
        "completed": false,
        "userId": 31
    },
    {
        "id": 6,
        "todo": "Bake pastries for me and neighbor",
        "completed": false,
        "userId": 39
    },
    {
        "id": 7,
        "todo": "Go see a Broadway production",
        "completed": false,
        "userId": 32
    },
    {
        "id": 8,
        "todo": "Write a thank you letter to an influential person in my life",
        "completed": true,
        "userId": 13
    },
    {
        "id": 9,
        "todo": "Invite some friends over for a game night",
        "completed": false,
        "userId": 47
    },
    {
        "id": 10,
        "todo": "Have a football scrimmage with some friends",
        "completed": false,
        "userId": 19
    },
    {
        "id": 11,
        "todo": "Text a friend I haven't talked to in a long time",
        "completed": false,
        "userId": 39
    },
    {
        "id": 12,
        "todo": "Organize pantry",
        "completed": true,
        "userId": 39
    },
    {
        "id": 13,
        "todo": "Buy a new house decoration",
        "completed": false,
        "userId": 16
    },
    {
        "id": 14,
        "todo": "Plan a vacation I've always wanted to take",
        "completed": false,
        "userId": 28
    },
    {
        "id": 15,
        "todo": "Clean out car",
        "completed": false,
        "userId": 33
    },
    {
        "id": 16,
        "todo": "Draw and color a Mandala",
        "completed": true,
        "userId": 24
    },
    {
        "id": 17,
        "todo": "Create a cookbook with favorite recipes",
        "completed": false,
        "userId": 1
    },
    {
        "id": 18,
        "todo": "Bake a pie with some friends",
        "completed": false,
        "userId": 1
    },
    {
        "id": 19,
        "todo": "Create a compost pile",
        "completed": true,
        "userId": 5
    },
    {
        "id": 20,
        "todo": "Take a hike at a local park",
        "completed": true,
        "userId": 43
    },
    {
        "id": 21,
        "todo": "Take a class at local community center that interests you",
        "completed": false,
        "userId": 22
    },
    {
        "id": 22,
        "todo": "Research a topic interested in",
        "completed": false,
        "userId": 4
    },
    {
        "id": 23,
        "todo": "Plan a trip to another country",
        "completed": true,
        "userId": 37
    },
    {
        "id": 24,
        "todo": "Improve touch typing",
        "completed": false,
        "userId": 45
    },
    {
        "id": 25,
        "todo": "Learn Express.js",
        "completed": false,
        "userId": 49
    },
    {
        "id": 26,
        "todo": "Learn calligraphy",
        "completed": false,
        "userId": 50
    },
    {
        "id": 27,
        "todo": "Have a photo session with some friends",
        "completed": false,
        "userId": 14
    },
    {
        "id": 28,
        "todo": "Go to the gym",
        "completed": false,
        "userId": 15
    },
    {
        "id": 29,
        "todo": "Make own LEGO creation",
        "completed": false,
        "userId": 30
    },
    {
        "id": 30,
        "todo": "Take cat on a walk",
        "completed": false,
        "userId": 15
    },
    {
        "id": 30,
        "todo": "Take cat on a walk",
        "completed": true,
        "userId": 15
    }
]

// function printTodo(index) {
//     // let output = ` - ${todos[index].todo} is `
//     let output = " "
//     if (todos[index].completed) {
//         output = output + " completed"
//     } else {
//         output += " pending"
//     }
//     console.log(output)
// }


const printTodo = (index ) => {
    // let output = ` - ${todos[index].todo} is `
    let output = " "
    if (todos[index].completed) {
        output = output + " completed"
    } else {
        output += " pending"
    }
    console.log(output)
}

// printTodo(0)
// printTodo(1)
// printTodo(2)
// printTodo(3)


for (let index = 0; index < todos.length; index++) {
    printTodo(index)
}


// printTodo(1)
// printTodo(2)
// printTodo(3)
// printTodo(4)
// printTodo(5)


// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)


/* operators  + - * / and operands 

    Arthematic operator  +  -  /  % *
        modulous - % 

    Assignment operators
     = 

    comparision operators
    logical  operators

*/

let number1 = 100
let number2 = 50

// number1 = number1 + number2
number1 += number2

// console.log({ number1 })


let count = 0
// count += 1
// count++
++count
// console.log({ count })


/* Conditional statements */

let willRain = false
let hasProbability = false

if (willRain) {
    console.log("take umbrella")
} else {

    if (hasProbability) {
        console.log("you may need it.");
    } else {
        console.log("no need.");
    }
}


if (willRain) {
    console.log("take umbrella")
} else {

    if (hasProbability) {
        console.log("you may need it.");
    } else {
        console.log("no need.");
    }

}







