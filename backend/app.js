// imports
const express = require('express');

const app = express();

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
