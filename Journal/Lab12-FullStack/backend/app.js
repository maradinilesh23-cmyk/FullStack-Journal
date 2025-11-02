const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);

sequelize.sync().then(() => {
  console.log("Database synced successfully.");
  app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
}).catch(err=>{
  console.error("Sequelize sync error:", err);
});
