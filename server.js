const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url.includes('aloha'))
    res.end('ALOHA');
  else
    res.end('FLAG_HELLO_99');
});
server.listen(8080, function() {
console.log('Server running on port 8080');
});
