// function handleGetRequest(req, res, array) {
//   const [path, queryString] = req.url.split('?');
//   const queryParams = {};
//   if (queryString) {
//     const pairs = queryString.split('&');
//     for (pair of pairs) {
//       const [key, value] = pair.split('=');
//       queryParams[key] = decodeURIComponent(value);
//     }
//   }
//   console.log('Query Parameters:', queryParams);
//   console.log('Path:', path);
//   let newObj = [];
//   if (req.url === "/api/get") {
//     // res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(array, null, 2));
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       let item = array[i];
//       let isMatch = true;
//       console.log("QUery Parmas", queryParams)
//       for (let key in queryParams) {
//         if (item[key] != queryParams[key]) {
//           isMatch = false;
//           break; // No need to check further properties for this item
//         }
//       }
//       if (isMatch) {
//         console.log("Heavy if")
//         newObj.push(item);
//       }
//     }
//     res.end(JSON.stringify(newObj, null, 2));
// }
// }

// function handleGetRequest(req,res,array){
    // req.on('data',() => {
    //     console.log("In try of GET API");
    //     res.end(JSON.stringify(array,null,2));
    //   });
    // req.on('end',()=>{
    //   console.log("In 'req.end' ");
    // })
    // res.end(JSON.stringify(array,null,2));

// }

// module.exports = handleGetRequest;