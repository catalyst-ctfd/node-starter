const http = require('http');

const server = http.createServer((req, res) => {
  // Extract the domain name from the request headers
  const host = req.headers.host;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (host && host.includes('aloha')) {
    res.end('ALOHA');
  }
  else {
    res.end('HELLO_WORLD');
  }
});
server.listen(8080, function() {
console.log('Server running on port 8080');
});
