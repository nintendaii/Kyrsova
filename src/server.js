const http = require('http');

const CONSTANTS = require('./const');
const config = require('./config');
const connect = require('./db');

(async () => {
  const app = require('./app');
  connect.func();

  const httpServer = http.createServer(app);

  httpServer.listen(config.PORT, config.HOST);
})();
