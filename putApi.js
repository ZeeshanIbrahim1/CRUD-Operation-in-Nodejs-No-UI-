function handlePutRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello, GET API!" }));
  }
  
  module.exports = handlePutRequest;