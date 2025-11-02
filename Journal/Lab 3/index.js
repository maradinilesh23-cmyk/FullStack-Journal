// index.js
// 🌈 Async Playground - Demonstrating Event Loop, Callbacks, Errors & Events

import chalk from "chalk";
import { EventEmitter } from "events";

console.clear();
console.log(chalk.cyan.bold("\n🚀 Welcome to Async Playground\n"));

// ---------- EVENT LOOP DEMO ----------
console.log(chalk.yellow.bold("📍 Event Loop Execution Order:\n"));

console.log("Start");

setTimeout(() => {
  console.log(chalk.green("setTimeout → Executes after current call stack"));
}, 0);

setImmediate(() => {
  console.log(chalk.magenta("setImmediate → Executes after I/O events"));
});

process.nextTick(() => {
  console.log(chalk.blue("nextTick → Runs before next event loop phase"));
});

Promise.resolve().then(() =>
  console.log(chalk.cyan("Promise → Microtask after nextTick"))
);

console.log("End");

// ---------- CALLBACK DEMO ----------
console.log(chalk.yellow.bold("\n📍 Callback Functions:\n"));

function callbackFunction() {
  console.log(chalk.green("Callback function called!"));
}

function greetUser(name, callback) {
  console.log(chalk.cyan(`Hi ${name}`));
  callback();
}

greetUser("John", callbackFunction);

// ---------- ERROR HANDLING ----------
console.log(chalk.yellow.bold("\n📍 Exception Handling:\n"));

function divide(a, b, callback) {
  if (b === 0) {
    callback("❌ Cannot divide by zero");
  } else {
    console.log(chalk.green(`✅ Result: ${a / b}`));
  }
}

function errorCallback(errorMessage) {
  console.log(chalk.red(errorMessage));
}

divide(10, 2, errorCallback);
divide(8, 0, errorCallback);

try {
  let result = 10 / a; // 'a' is undefined -> will throw
  console.log(result);
} catch (error) {
  console.log(chalk.red("⚠️ Something went wrong (caught by try-catch)"));
}

// ---------- DATE DEMO ----------
let date = new Date();
console.log(chalk.cyan.bold("\n📅 Current Date & Time: ") + chalk.white(date));

// ---------- EVENT EMITTER DEMO ----------
console.log(chalk.yellow.bold("\n📍 Event Emitters:\n"));

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(chalk.green(`👋 Hello, ${name}!`));
});

emitter.emit("greet", "Alice");

emitter.once("once_event", () => {
  console.log(chalk.magenta("✨ This will run only once."));
});

emitter.emit("once_event");
emitter.emit("once_event");

console.log(chalk.blue.bold("\n✅ Async Playground Completed!\n"));
