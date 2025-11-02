const { Sequelize } = require('sequelize');

// Database credentials
const dbName = "tybca";
const dbUser = "root";
const dbPassword = "";

// Create Sequelize instance
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'mysql',
});

// Test connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err.message);
    })
    .finally(() => {
        // Close connection
        sequelize.close()
            .then(() => console.log('Connection closed successfully.'))
            .catch(err => console.error('Error closing the connection:', err.message));
    });
