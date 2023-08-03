function handlePostRequest(req, res,existingArray) {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
  
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        existingArray.push(data); // Add the new data to the existing array
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(existingArray, null, 2));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid JSON data');
      }
    }
    );
  }
  
  module.exports = handlePostRequest;