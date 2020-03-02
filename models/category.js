var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  name: String
}, {timestamps: true});

CategorySchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createdAt;
  return obj;
 }

module.exports = mongoose.model('Category', CategorySchema);