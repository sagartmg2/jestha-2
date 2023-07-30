
/*
 .forEach
 .map
 .filter
 */


let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria"
    },
    {
        "code": "as",
        "name": "American Samoa",
        "path": "americansamoa"
    }]

// for (let index = 0; index < countries.length; index++) {
//     console.log(  countries[index].name  )
// }


// countries.forEach((element) => { console.log(element.name) })




let numbers = [
    1, 3, 5, 6, 7, 8, 10
]


let numbersGreate5 = numbers.filter((number) => {
    if(number >5){
        return true
    }
    return undefined
})

console.log({numbersGreate5})