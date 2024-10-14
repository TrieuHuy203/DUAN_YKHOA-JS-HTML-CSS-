const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n Hoi dan it vơi Eric");
});

server.listen(port, hostname, () => {
  // Sử dụng backticks `` để log thông tin chính xác
  console.log(`Server running at http://${hostname}:${port}/`);
});
