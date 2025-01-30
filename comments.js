// Create web server
// Create a web server that listens for requests on port 3000 and serves up the comments.html file.
// When the server receives a request, it should log the HTTP method of the request and the URL of the request to the console.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  const stream = fs.createReadStream(path.join(__dirname, 'comments.html'));
  stream.pipe(res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});