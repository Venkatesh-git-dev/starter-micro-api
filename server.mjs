import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(process.env);
  res.end("<h1>hello mummy K.B.T.Sundari devi from Venkatesh!</h1>");
});

server.listen(process.env.PORT || 3000);
