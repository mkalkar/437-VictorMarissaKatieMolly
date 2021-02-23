// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   req.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006/');
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006/');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const http = require('http');
http.createServer(function (req, res) {
  console.log("in backend");
	res.writeHead(200, {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
	});
	res.end('HellO update\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');