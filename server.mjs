import { createServer } from "node:http";
import { readFileSync } from "node:fs";

const html = readFileSync("index.html", "utf-8");

const server = createServer((req, res) => {
  console.log(process.env);
  res.statusCode = 200;
  res.end(html);
});

server.listen(process.env.PORT || 3000);
