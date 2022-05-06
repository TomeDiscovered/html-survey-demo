const path = require('path');
const express = require('express');

module.exports = function(app){
  app.use(express.static(path.join(__dirname, "..", '/views')));

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "..", 'views/html/Questionnaire.html'));
  });

  app.get('/survey-results', function (req, res) {
    res.sendFile(path.join(__dirname, "..", 'views/html/Results.html'));
  });

  app.get('/survey-submit', function (req, res) {

  });
}
