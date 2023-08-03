function handleDelRequest(req, res,existingArray) {
  let body='';
  req.on('data', (chunk) => {
    body += chunk;
  });
  console.log("body in Del request:", body)

  req.on('end', () => {
    // try {
      const elementToRemove = JSON.parse(body);
      console.log(elementToRemove);
      existingArray = existingArray.filter(item => {
        return Object.keys(elementToRemove).every(key => {
          return item[key] !== elementToRemove[key];
        });
      });
      // let newgg = Object.keys(elementToRemove).forEach(element => {
      //   existingArray.forEach(item =>{
      //     if(element.data === item.data){
            
      //     }
      //   })
      // });s
      // existingArr = existingArray.filter(item => item.data !== elementToRemove); 
      this.existingArray = existingArray;
      res.end(JSON.stringify(existingArray, null, 2));
    // } catch (error) {
    //   res.writeHead(400, { 'Content-Type': 'text/plain' });
    //   res.end('Invalid JSON data');
    // }
  }
  );  
}
  
module.exports = handleDelRequest;