const restify = require('restify');

const server = restify.createServer({
  name: 'YourApp',
});

// Routes
function ping(req, res, next) {
  var timestamp = new Date().toISOString();
  var memMB = (process.memoryUsage().rss / (1024 * 1024)).toFixed(2);
  res.send({
    pong: timestamp,
    memMB: memMB
  });
  return next();
}

server.get('/ping', ping);

server.get(/.*/, restify.serveStatic({
  'directory': 'public',
  default: 'index.html'
}))

server.listen(8000, () => {
  console.log(`${server.name} listening at ${server.url}`);
})

module.exports = exports = server
