const Inventory = require("../models/inventario");

// GET - todos
const getInventory = async (request, response) => {
  try {
    const items = await Inventory.find();
    response.json(items);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

// GET - uno por id
const getInventoryById = async (request, response) => {
  try {
    const item = await Inventory.findById(request.params.id);
    if (!item) return response.status(404).json({ error: "No encontrado" });
    response.json(item);
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

// POST - crear
const createInventory = async (request, response) => {
  try {
    const nuevo = new Inventory(request.body);
    const saved = await nuevo.save();
    response.json(saved);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};

// PUT - actualizar (reemplazar todo el doc)
const updateInventory = async (request, response) => {
  try {
    const updated = await Inventory.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (!updated) return response.status(404).json({ error: "No encontrado" });
    response.json(updated);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};

// DELETE - eliminar
const deleteInventory = async (request, response) => {
  try {
    const deleted = await Inventory.findByIdAndDelete(request.params.id);
    if (!deleted) return response.status(404).json({ error: "No encontrado" });
    response.json({ message: "Eliminado correctamente" });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
};

module.exports = {
    getInventory,
    getInventoryById,
    createInventory,
    updateInventory,
    deleteInventory
};