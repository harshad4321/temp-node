var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    
  const person={name: 'harshad',admin:true}

  res.renser('index',{person})
});

module.exports = router;
