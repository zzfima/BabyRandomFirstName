var express = require('express');
var router = express.Router();
var map_names = require('../data/names_by_origin/map_names')
var countries = require('../data/enums/countries_of_origin')

/* GET origins */
router.get('/', function (req, res, next) {
  res.send(Object.values(countries));
});

module.exports = router;
