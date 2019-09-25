// imports
const express = require('express');

const app = express();

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
