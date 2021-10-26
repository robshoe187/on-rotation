const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Album'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
