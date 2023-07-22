//error object

const error = new Error("Some went wrong!");

// console.log(error.stack)
// console.log(error.message)


// throw new Error("I am error Object")

const {CustomError} = require("./CustomError.js");

// throw new CustomError("This is a custom error");


// handle exception using try and catch

try{
doSomething();
}
catch(e){
console.log("Error occurred");
console.log(e);
}


function doSomething(){
    const data =fetch("localhost : 300/api")
    // console.log("I am from doSomething Function");
}