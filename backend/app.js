// imports
const express = require('express');

const app = express();

app.use((request, response, next) => {
  response.send('hello');
})

module.exports = app;
