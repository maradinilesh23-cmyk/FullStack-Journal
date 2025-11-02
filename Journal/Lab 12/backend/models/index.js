const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("lab12db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch(err => console.error("Database connection failed:", err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Student = require("./student")(sequelize, DataTypes);

module.exports = db;
