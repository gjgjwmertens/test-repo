var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  brand: {
    type: String,
    required: true
  },
  // array of ids from the users
  author: {type: Schema.Types.ObjectId, ref: 'user'},
  // ingredients: [{type: Schema.Types.ObjectId, ref: 'ingredient'}],
  categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});

module.exports = mongoose.model('food', FoodSchema);
