const http = require('http');

const server = http.createServer((req, res) => {
  // Extract the domain name from the request headers
  const host = req.headers.host;
  const hello = 'SEVMTE9fV09STEQ=';
  const aloha = 'QUxPSEFfR1JFRVRJTkc='
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (host && host.includes('aloha')) {
    res.end(Buffer.from(aloha, 'base64').toString('utf-8'));
  }
  else {
    res.end(Buffer.from(hello, 'base64').toString('utf-8'));
  }
});
server.listen(8080, function() {
console.log('Server running on port 8080');
});
