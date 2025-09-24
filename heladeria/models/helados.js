const mongoose = require("mongoose");

const heladoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  sku: { type: String, required: true, unique: true },
  tipo: { type: String, enum: ["galleta waffle", "vaso"], required: true }
}, { collection: "helados" }); 

module.exports = mongoose.model("Helado", heladoSchema);
