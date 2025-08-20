require('dotenv').config();

var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.getIndex);

router.get('/about', indexCtrl.getAbout);

router.get('/api/data', indexCtrl.getApiData);

router.get('/api/user/:id', indexCtrl.getApiUser);

router.post('/api/save', indexCtrl.postApiSave);


module.exports = router;
