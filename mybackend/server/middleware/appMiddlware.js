var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
// setup global middleware here

module.exports = function(app) {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
