import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(process.env);
  res.end("hello mummy K.B.T.Sundari devi from Venkatesh!");
});

server.listen(process.env.PORT || 3000);
