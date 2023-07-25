let user = {
    name: "ram",
    email: "ram@ram.com",
    password: "ram-password"
}



const checkPassword = (password) => {
    if(user.password === password  ){
        console.log("logged in ..");
    }else{
        console.log("inavlid credent...");
    }
}


/* OUTPUT */
checkPassword("Ram-password")  // arguement //  user logged in 
checkPassword("ram-wrong-password")  //  Invalid Credentials


