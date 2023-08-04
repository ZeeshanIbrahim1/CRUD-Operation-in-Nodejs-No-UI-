const http = require('http');
let array = [
  {"id":1,
   "name" :"ZEON"        
},{
  "id":2,
  "name":"raze"
}
];

function handleGetRequest(req,res,array){
  res.end(JSON.stringify(array,null,2));
}

function handlePostRequest(req, res,array) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      array.push(data); // Add the new data to the existing array
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(array, null, 2));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      console.log("error :" ,  error)
      res.end('Invalid JSON data');
    }
  }
  );
}

function handlePutRequest(req, res,array) {
  let body = ''
  req.on("data", (chunk)=>{
    body += chunk;
  })
  req.on("end",()=>{
    try {
      console.log("in try of put method")
      let parsedString = JSON.parse(body);
      array = parsedString;
      res.end(JSON.stringify(array,null,2))
    } catch (error) {
      res.end("Error in PUT method")
    }
  })
}

function handleDelRequest(req, res, array) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const elementToRemove = JSON.parse(body);
      console.log("remove this element:",elementToRemove);
      const newArray = array.filter((item) => {
        // Here, we compare each object's properties with elementToRemove
        for (key in elementToRemove) {
          if (item[key] === elementToRemove[key]) {
            return false; // If the properties match, exclude the element from the new array
          }
        }
        return true; // Include the element in the new array if properties don't match
      });
      array.splice(0, array.length, ...newArray);
      res.end(JSON.stringify(array, null, 2));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid JSON data');
    }
  });
}

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write("<h1>CRUD OPERATIONS</h1>");
  } else if (req.method === 'GET' && req.url === "/api/get") {
    handleGetRequest(req, res , array);
  } else if (req.method === 'POST' && req.url === "/api/post" ) {
    handlePostRequest(req, res, array);
  } else if (req.method === 'DELETE' && req.url === "/api/delete" ) {
    handleDelRequest(req, res, array);
  } else if (req.method === 'PUT' && req.url === "/api/put" ) {
    handlePutRequest(req, res,array);
  } else {
    res.end("Invalid Method or URL");
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});