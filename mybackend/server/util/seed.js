var User = require('../api/user/userModel');
var Food = require('../api/food/foodModel');
var Category = require('../api/category/categoryModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Xoko', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var categories = [
  {name: 'intros'},
  {name: 'angular'},
  {name: 'UI/UX'}
];

var foods = [
  {name: 'BarI', brand: '1'},
  {name: 'BarIII', brand: '3'},
  {name: 'BarII', brand: '2'}
];

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Category, Food]
    .map(function(model) {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
}

var createUsers = function(data) {

  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

var createCategories = function(data) {
  var promises = categories.map(function(category) {
    return createDoc(Category, category);
  });

  return Promise.all(promises)
    .then(function(categories) {
      return _.merge({categories: categories}, data || {});
    });
};

var createFoods = function(data) {
  var addCategory = function(food, category) {
    food.categories.push(category);

    return new Promise(function(resolve, reject) {
      food.save(function(err, saved) {
        return err ? reject(err) : resolve(saved)
      });
    });
  };

  var newFoods = foods.map(function(food, i) {
    food.author = data.users[i]._id;
    return createDoc(Food, food);
  });

  return Promise.all(newFoods)
    .then(function(savedFoods) {
      return Promise.all(savedFoods.map(function(food, i){
        return addCategory(food, data.categories[i])
      }));
    })
    .then(function() {
      return 'Seeded DB with 3 Foods, 3 Users, 3 Categories';
    });
};

cleanDB()
  .then(createUsers)
  .then(createCategories)
  .then(createFoods)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
