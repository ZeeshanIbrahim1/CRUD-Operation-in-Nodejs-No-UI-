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
      array.push(data); 
      res.end(JSON.stringify(array, null, 2));
    } catch (error) {
      console.log("error :" ,  error)
      res.end('Invalid JSON data');
    }
  }
  );
}

function handlePutRequest(req, res, array) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const newData = JSON.parse(body);
      const userToUpdate = array.find((user) => user.id === newData.id);
      if (userToUpdate) {
        console.log("User to update : " , userToUpdate);
        userToUpdate.name = newData.name;
        res.end(JSON.stringify(array,null,2));
      } else {
        res.end('User not found.');
      }
    } catch (error) {
      res.end('Error processing request.');
    }
  });
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
        for (key in elementToRemove) {
          if (item[key] === elementToRemove[key]) {
            return false;
          }
        }
        return true;
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