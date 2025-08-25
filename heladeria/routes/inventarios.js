const express = require("express");

const router = express.Router();

const { 
  getInventory, 
  getInventoryById, 
  createInventory, 
  updateInventory, 
  deleteInventory 
} = require("../controllers/inventario");


router.get("/obtenerInventario", getInventory);         // GET /inventory
router.get("/:id", getInventoryById);  // GET /inventory/:id
router.post("/", createInventory);     // POST /inventory
router.put("/:id", updateInventory);   // PUT /inventory/:id
router.delete("/:id", deleteInventory);// DELETE /inventory/:id

module.exports = router;