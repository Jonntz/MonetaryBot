const run = require('./puppeteer');
const cron = require('node-cron');

const task = cron.schedule('55 18 * * *', () => {
    console.log('running a task every minute');
    run();
}, {
    timezone: "America/Sao_Paulo"
});

task.start()