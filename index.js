const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/hello.html'));
});

app.get('/hello_js', function(req, res) {
  res.sendFile(path.join(__dirname, '/hello.js'));
});

app.get('/hello.wasm', function(req, res) {
  res.sendFile(path.join(__dirname, '/hello.wasm'));
});


app.listen(port);
console.log('Server started at http://localhost:' + port);