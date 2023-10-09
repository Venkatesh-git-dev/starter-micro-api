import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(process.env);
  res.end("hello!");
});

server.listen(process.env.PORT || 3000);
