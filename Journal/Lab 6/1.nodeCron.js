
const cron = require('node-cron');

// Runs every 5 seconds
cron.schedule('*/5 * * * * *', () => {
    console.log("Cron Job Executed at:", new Date().toLocaleTimeString());
});
