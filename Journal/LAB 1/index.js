const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node.js Server!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
