const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    fond: { type: String, trim: true, required: true },
    payment: { type: Boolean, trim: true, required: true },
    bank: { type: String, trim: true},
    montant: { type: Number, trim: true },
    date: { type: String, trim: true },
    description: { type: String, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Form', formSchema);
