const http = require('http');
const port = process.env.PORT || 4015;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Mohit Rohilla  project has Successfully done You Did IT Very Good\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
