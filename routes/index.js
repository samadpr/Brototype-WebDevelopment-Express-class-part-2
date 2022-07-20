var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  const values=['samad', 'shehin', 'afthab', 'sibin']

  const person={name:"samad", comments:{comment:"This is a sample comment", date:"04-08-2022"}}

  res.render('index', {person});
  //res.render('index', { title: 'My Website' ,Name:'samadpr'});
});

module.exports = router;
