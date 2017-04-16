var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* GET lovelsit page. */
router.get('/lovelist/:token', function(req, res, next) {
  res.render('lovelist', { title: 'Lovelist', token: req.params.token });
});

router.post('/login', function(req, res, next){
  var username_or_email = req.body.username_or_email;
  var password = req.body.password;
  request.post('https://dev.prelo.id/api/auth/login', {form:{'username_or_email':username_or_email, 'password':password}}, function (error, response, body) {
    var result = JSON.parse(body)
    // console.log(body);
    // console.log(result._data.token);
    // console.log(response.statusCode);
    if(response.statusCode == '200'){
      res.redirect('/lovelist/'+result._data.token)
      // res.render('lovelist', { title: 'Lovelist' });
    }
    else {
      res.render('index', { title: 'Login', error_message: result._message });
    }
  });
  // res.render('lovelist', { title: 'Lovelist' });
});

module.exports = router;
