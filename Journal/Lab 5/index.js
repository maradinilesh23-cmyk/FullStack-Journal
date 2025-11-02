const fs = require('fs');
const http = require('http');
const https = require('https');

// --- 1️ Readable & Writable Streams ---
const readable = fs.createReadStream('input.txt', 'utf8');
const writable = fs.createWriteStream('output.txt');
readable.pipe(writable); // Copies content from input.txt → output.txt

// --- 2️ Standard Streams ---
process.stdout.write("What is your name? ");
process.stdin.on('data', (input) => {
    console.log("Hello, " + input.toString().trim() + "!");
    process.exit();
});

const server = http.createServer((req, res) => {
    if (req.url === '/') res.end(' Welcome to Home Page!');
    else if (req.url === '/about') res.end(' About Us Page');
    else if (req.url === '/headers') {
        console.log("Request Headers:", req.headers);
        res.end(' Check console for headers!');
    } else res.end(' Page Not Found');
});

server.listen(3000, () => console.log('HTTP Server: http://localhost:3000'));

const gateway = http.createServer((req, res) => {
    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        path: '/todos/1',
        method: 'GET'
    };

    const proxy = https.request(options, (proxyRes) => {
        let data = '';
        proxyRes.on('data', chunk => data += chunk);
        proxyRes.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        });
    });

    proxy.on('error', (err) => res.end('Error in gateway: ' + err.message));
    proxy.end();
});

gateway.listen(5000, () =>
    console.log('Gateway Server: http://localhost:5000')
);
