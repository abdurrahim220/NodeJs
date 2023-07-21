const x = 2;
const y = 3;

console.log(x, y);

//%s format varaible to string
//%d for integer
//%i
//%o

// console.log("I am %s and my age is %d","Md Abdur Rahim",25);

// console.clear();

// console.count("I am Rahim")
// console.count("I am Rahim")
// console.count("I am Rahim")
// console.countReset("I am Rahim")
// console.count("Rafik")
// console.count("Rafik")
// console.countReset("Rafik")
// console.count("Rafik")
// console.count("I am Rahim")

// const function1 =()=> console.trace();

// const function2 =()=>function1();


// function2();


// const sum = () => console.log(`ths sum of 2 and 3 is : ${x + y}`);

// const multiply = () => console.log(`The multiplication of x and y is : ${x * y}`);

// const measureTime = () => {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");


//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// }

// measureTime();


const progressBar = require("progress");

const bar = new progressBar("downloading [:bar] :rate/bps : percent :etas", {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, (100));

const chalk = require("chalk");

console.log(chalk.red("This is nodejs tutorial"))