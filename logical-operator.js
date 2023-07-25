

let person1 =
{
    age: 18,
    consent: false
}

let person2 =
{
    age: 20,
    consent: true
}

let person3 =
{
    age: 20,
    consent: true
}

let person4 =
{
    age: 15,
    consent: false
}

const checkCanMarry = (person) => {

    // if (person.age >= 20 || person.consent) {

    
    if (person.age >= 20 && person.consent) {
        // if(true && false  ){
        // if(false ){
        console.log("can marry");
    }
    else {
        console.log("cant marry");
    }
}

checkCanMarry(person1)
checkCanMarry(person2)
checkCanMarry(person3)
checkCanMarry(person4)


