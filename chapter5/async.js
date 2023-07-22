console.log("start operation");

function sleep(millisecond){
    // let startTime = new Date().getTime();

    console.log("operation is running!");

    setTimeout(() => {
        console.log("Operation is done!!");
    }, millisecond);

    // while(new Date().getTime()  < startTime + millisecond){
    //     console.log("in progress");
    // }
    // console.log("Operation is done!!");
}

sleep(1000);

console.log("do something");