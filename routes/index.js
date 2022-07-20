var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  const values=['samad', 'shehin', 'afthab', 'sibin']

  const person={name:"samad", admin:false}

  res.render('index', {person});
  
});

module.exports = router;
