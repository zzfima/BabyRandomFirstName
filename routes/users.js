const { query } = require('express');
var express = require('express');
var router = express.Router();
var origins = require('../data/enums/origins')
var genders = require('../data/enums/genders')
var baby_name = require('../helpers/baby_name')

/* GET random boy name by origin */
router.get('/random_boy', function (req, res, next) {
  var country = req.query['origin']
  var boy = baby_name.get_random_boy_name(country)
  res.send(boy);
});

/* GET random girl name by origin */
router.get('/random_girl', function (req, res, next) {
  var country = req.query['origin']
  var girl = baby_name.get_random_girl_name(country)
  res.send(girl);
});

/* GET list of origins */
router.get('/origins', function (req, res, next) {
  res.send(Object.values(origins));
});

/* GET list of genders */
router.get('/genders', function (req, res, next) {
  res.send(Object.values(genders));
});

/* GET welcome */
router.get('/', function (req, res, next) {
  res.send("Welcome to Random baby names by country of origin and gender.");
});

module.exports = router;