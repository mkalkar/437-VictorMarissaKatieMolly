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