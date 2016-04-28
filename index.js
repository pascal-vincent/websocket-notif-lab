const express = require('express');
const app = express();

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// if cloud9 port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(server_port, function () {
  console.log('Test app started!');
});
