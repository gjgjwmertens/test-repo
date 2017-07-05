var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.set({             // set header for cross domain !!!! this is only required on the backend
  //   'Access-Control-Allow-Origin': '*'
  // })
  res.render('index', { title: 'Express' });
});

module.exports = router;
