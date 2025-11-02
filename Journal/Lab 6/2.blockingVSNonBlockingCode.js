
const fs = require('fs');

console.log("Start Reading File (Blocking)");
const data = fs.readFileSync('bigfile.txt', 'utf8');
console.log("File Data Length:", data.length);
console.log("End Reading File (Blocking)");

console.log("\nStart Reading File (Non-Blocking)");
fs.readFile('bigfile.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log("File Data Length:", data.length);
});
console.log("End Reading File (Non-Blocking)");
