const http = require('http');
const handleGetRequest = require('./getApi');
const handlePostRequest = require('./postApi');
const handleDeleteRequest = require('./DelApi');
const handlePutRequest = require('./putApi');

let array = [
    {id:1,name:"Google",age:20},
    {id:2,name:"Meta",age:12},
    {id:3,name:"OpenAI",age:20},
    {id:4,name:"X",age:12},
];

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
    handleDeleteRequest(req, res);
  } else if (req.method === 'PUT' ) {
    handlePutRequest(req, res);
  } else {
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});