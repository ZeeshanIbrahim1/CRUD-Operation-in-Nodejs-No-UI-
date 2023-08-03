const http = require('http');
const handleGetRequest = require('./getApi');
const handlePostRequest = require('./postApi');
const handleDelRequest = require('./DelApi');
const handlePutRequest = require('./putApi');
const array = require('./data')

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    // Handle client request here
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>CRUD OPERATIONS</h1>");
  } else if (req.method === 'GET' ) {
    handleGetRequest(req, res , array);
  } else if (req.method === 'POST' ) {
    handlePostRequest(req, res, array);
  } else if (req.method === 'DELETE' ) {
    handleDelRequest(req, res, array);
  } else if (req.method === 'PUT' ) {
    handlePutRequest(req, res,array);
  } else {
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});