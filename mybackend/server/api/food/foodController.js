var Food = require('./foodModel');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Food.findById(id)
    .populate('author categories')
    .exec()
    .then(function(food) {
      if (!food) {
        next(new Error('No food with that id'));
      } else {
        req.food = food;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Food.find({})
    .populate('author categories')
    .exec()
    .then(function(foods){
      res.json(foods);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var food = req.food;
  res.json(food);
};

exports.put = function(req, res, next) {
  var food = req.food;

  var update = req.body;

  _.merge(food, update);

  food.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newFood = req.body;

  Food.create(newFood)
    .then(function(food) {
      res.json(food);
    }, function(err) {
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.food.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
