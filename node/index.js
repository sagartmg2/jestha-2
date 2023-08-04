/*
    alt + shift + a


modules
    global module
        - http
    local module
    third party module

*/

// const fs = require("fs")
// fs.writeFileSync("custom.txt", "hello world")


// module.exports = login     // in auth.js page
// const login = require("./auth")
// const singup = require("./auth")
const auth = require("./auth")

console.log({ auth })


auth.login()
auth.singup()

const { singup, login } = require("./auth")

singup()
login()



// const todos = require("./todos")
// let { create, deleteTodo } = todos

/*  named import */
/* object de-structuring */
const { create, deleteTodo } = require("./todos")

// todos.create()
// todos.deleteTodo()
create()
deleteTodo()

const express = require('express')
const app = express()
