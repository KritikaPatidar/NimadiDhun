const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // E.g., Wedding, Baby Shower
  subcategories: [{ type: String }], // E.g., Haldi, Ganesh Pujan
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
