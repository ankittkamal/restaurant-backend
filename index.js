const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("swiggy.json");
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.listen(port);
