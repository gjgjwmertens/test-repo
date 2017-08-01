var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource'); // response without a view
  res.render('foods', { title: 'Food' });
});

module.exports = router;
