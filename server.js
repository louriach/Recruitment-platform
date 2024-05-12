const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  // Serve HTML file
  if (req.url === '/' || req.url === '/index.html') {
    const htmlFilePath = path.join(__dirname, 'index.html');
    fs.readFile(htmlFilePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // Serve CSS file
  else if (req.url === '/styles.css') {
    const cssFilePath = path.join(__dirname, 'styles.css');
    fs.readFile(cssFilePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading styles.css');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  }
  // Serve JSON file
  else if (req.url === '/questions.json') {
    const jsonFilePath = path.join(__dirname, 'questions.json');
    fs.readFile(jsonFilePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading questions.json');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
