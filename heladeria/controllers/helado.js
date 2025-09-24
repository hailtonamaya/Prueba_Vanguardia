const Helado = require("../models/helados");

const getMain = (req, res) => {
  try {
    res.send("API de Helados funcionando 🍦");
  } catch (error) {
    res.status(500).send(error);
  }
};

const createHelado = async (req, res) => {
  try {
    const { nombre, precio, sku, tipo } = req.body;

    if (!nombre || !precio || !sku || !tipo) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const nuevoHelado = new Helado({ nombre, precio, sku, tipo });
    await nuevoHelado.save();

    res.status(201).json(nuevoHelado);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: "El SKU ya existe" });
    }
    console.log("Error:", error);
    res.status(500).json({ error: "Error al crear helado", detalle: error });
  }
};

const getHelados = async (req, res) => {
  try {
    const helados = await Helado.find();
    res.json(helados);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener helados" });
  }
};

module.exports = {
  getMain,
  createHelado,
  getHelados
};
