// console.log("This is nodejs Tutorial for beginners");
// console.log("This is the first tutorial on nodejs");
// console.log("This is the first tutorial on nodejs");
// console.log("This is the first tutorial on nodejs");

// process.exit(1)

// process.exitCode = 0;

// const _ = require("lodash");

// const arr = [1,4,5,19];

// console.log(_.last(arr))


// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text: "I am learning NPM module",
//     e:"00",
//     t:"U"
// }));


const {ford,tesla} = require("./car.js");
console.log(JSON.stringify(ford,null,2))
console.log(JSON.stringify(tesla,undefined,2))