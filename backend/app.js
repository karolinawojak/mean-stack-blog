// imports
const express = require('express');

const parser = require("body-parser");

const app = express();

app.use(parser.json());

app.post("/api/posts", (request, response, next) => {
  const post = request.body;
  console.log();
  response.status(201).json({
    message: 'Success'
  });
});

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept');
  response.setHeader('Access-Control-Allow-Methods',
  'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

app.use('/entries', (request, response, next) => {
  const entries = [
    {
      id: '1',
      title: 'First title',
      content: 'First content'
    },
    {
      id: '2',
      title: 'Second title',
      content: 'Second content'
      },
  ];

  response.status(200).json({
    message: 'Posts fetched succesfully',
    entries: entries
  });
})

module.exports = app;
