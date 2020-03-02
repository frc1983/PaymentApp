var mongoose = require('mongoose');

var PaymentSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  includedAt: Date,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  value: Number
}, { timestamps: true });

PaymentSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj._id;
  delete obj.id;
  delete obj.__v;
  delete obj.updatedAt;
  delete obj.createdAt;
  return obj;
 }

var Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;