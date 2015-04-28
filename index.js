var app = require('./Server/server.js');

var port     = process.env.PORT || 8080;

app.listen(port);