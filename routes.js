var express = require('express');
var router  = express.Router();
var fs      = require('fs');
var path    = require("path");
var people  = require('./database');

router.get('/', function (req, res) {
  var html = fs.readFileSync('./index.html', 'utf8');
  res.send(html);
});

router.get('/scripts.js', function (req, res) {
  var string = fs.readFileSync('./scripts.js');
  res.send(string);
});

router.post('/people', function (req, res) {
  var newPerson = {name: req.body.name, amount: req.body.amount};
  people[people.length + 1] = newPerson;
  res.status(200).send(newPerson);
  console.log("Added new person:", req.body);
});

router.get('/people', function (req, res) {
  res.status(200).send(people);
});

router.get('/code/', function (req, res) {
  var js_path = `${__dirname}/scripts.js`;
  var js = fs.readFileSync(js_path, 'utf8');
  res.send({html: html, js: js})
});

module.exports = router;