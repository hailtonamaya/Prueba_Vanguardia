const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  item: { type: String, required: true },
  qty: { type: Number, required: true },
  tags: { type: [String], default: [] },
  size: {
    h: Number,
    w: Number,
    uom: String
  }
}, { collection: "inventory" }); 

module.exports = mongoose.model("inventario", InventorySchema);
