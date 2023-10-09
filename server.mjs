import { createServer } from "node:http";

const server = createServer((req, res) => res.end("hello!"));

server.listen(process.env.PORT || 3000);
