const mongoose = require("mongoose");

const { Schema } = mongoose;

const albumSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  artist: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  ratings: [
    {
      type: Number,
      min: 0,
      default: 0,
    },
  ],
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
