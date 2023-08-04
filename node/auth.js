const bcrypt = require('bcrypt')


const login = () => {
    /* validation check */
    /* DB: email check  */
    /* DB: password check */
    /* create token  */
    console.log("loogged in ");
}

const singup = () => {
    /* validation check */
    /* DB: user alaredy exists ?  */
    /* DB: user create  */
    bcrypt.hash("password", 10, function (err, hash) {
        // Store hash in your password DB.
        console.log("user created... ", hash);
    });
}

/* default export  */
// module.exports = login
// module.exports = singup



/* named export */
module.exports = {
    "login": login,
    singup
}