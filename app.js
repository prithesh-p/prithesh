const http = require('http');
const port = 8080;

const requestHandler = (req, res) => {
  res.end('Hello from DevOps Pipeline 🚀');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

