const router = require("express").Router();
const heladosCtrl = require("../controllers/helado");

router.get("/main", heladosCtrl.getMain);

router.post("/crear", heladosCtrl.createHelado);

router.get("/", heladosCtrl.getHelados);

module.exports = router;
