function handleDelRequest(req, res) {
  const parsedUrl = new url.URL(req.url, `http://${req.headers.host}`);
  const queryParams = parsedUrl.searchParams;
  console.log(queryParams);
  // Get a specific query parameter by name
  const name = queryParams.get('name');
  const age = queryParams.get('age');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: "Hello, GET API!" }));
  }
  
module.exports = handleDelRequest;