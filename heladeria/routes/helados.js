var router = require('express').Router();

const heladosCtrl = require('../controllers/helado');

router.get('/main', heladosCtrl.getMain);

module.export = router;