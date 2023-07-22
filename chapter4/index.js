const path = require("path");

const filePath = "./Files/sample.txt"

//dirname
// console.log(path.dirname(filePath))
// console.log(__dirname)
// //basename
// console.log(path.basename(filePath))
// console.log(__filename)
// //extension
// console.log(path.extname(filePath))
// console.log()

// const sampleFile = 'sample.txt';

// console.log(path.join(path.dirname(filePath),sampleFile));

const fs = require("fs");

const fsPromise = require("fs").promises;

// console.log(fs)


// // reading from a file - Async
// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) throw new Error("Something went wrong");
//     console.log(data.toString())
// })

// try {
//     const data = fs.readFileSync(path.join(__dirname, "Files", "sample.txt"), "utf-8");
//     console.log(data)
// } catch (err) {
//     console.log(err)
// }



// const fileReading = async () => {
//     try {
//         const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
//         console.log("FS Promises:",data)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// fileReading();

// ! Write in file chin chin

const txtFile = path.join(__dirname, "Files", "text.txt");

const content = "I love this nodejs tutorial series chin chin";


// fs.writeFile(txtFile, content, (err) => {
//     if (err) throw new Error("Something went wrong");
//     console.log("Write Operation Completed Successfully!!");
//     fs.readFile(txtFile, "utf-8", (err, data) => {
//         if (err) throw new Error(err);
//         console.log(data);
//     })
// })


const writingInFile = async () => {
    try {
        // fs.promises.writeFile(txtFile, "\n It's Awesome!",{flag:"a+"});
        fs.promises.writeFile(txtFile,"\n We have given new name to the file!",{flag:"a+"});
        // fs.promises.writeFile(txtFile, content);
        //await fsPromise.appendFile(txtFile, "\n this is file appender");
       await fs.promises.rename(txtFile,path.join(__dirname,"Files","newText.txt"))
        const data =await fsPromise.readFile(path.join(__dirname,"Files","newText.txt"));
        console.log(data.toString())
    } catch (err) {
        console.log(err)
    }
}

writingInFile();