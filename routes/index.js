var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET lovelsit page. */
router.get('/lovelist', function(req, res, next) {
  res.render('lovelist', { title: 'Lovelist' });
});

module.exports = router;
