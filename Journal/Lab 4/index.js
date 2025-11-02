const fs = require("fs");
const { add } = require("./math");

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);


function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("✅ Data fetched!"), 1000);
    });
}

function logToFile(message) {
    return new Promise((resolve, reject) => {
        fs.writeFile("output.txt", message, (err) => {
            if (err) reject("❌ Error writing file!");
            else resolve("📄 File written successfully!");
        });
    });
}

fetchData()
    .then((msg) => {
        console.log(msg);
        const result = add(a, b);
        console.log(`Sum of ${a} and ${b} is: ${result}`);
        return logToFile(`Sum: ${result} at ${new Date()}`);
    })
    .then((status) => console.log(status))
    .catch((err) => console.log("Error:", err))
    .finally(() => console.log("✨ Task Completed!"));

fs.readFile("output.txt", "utf8", (err, data) => {
    if (!err) console.log("File Content:", data);
});
