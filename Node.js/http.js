const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
server.listen(8000, function() {
  console.log(8000, arguments);
});
server.listen(8001, function() {
  console.log(8001, arguments);
});
