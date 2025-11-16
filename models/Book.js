const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String, required: true },
  comments: { type: [String], default: [] }
});

module.exports = mongoose.model('Book', BookSchema);
