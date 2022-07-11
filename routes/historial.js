'use strict'

var express = require('express');
const { model } = require('mongoose');


var HistorialController = require('../controller/historial');

var router = express.Router();

// RUTAS PARA PRODUCTOS
router.get('/historial', HistorialController.list);
router.get('/historial/:id', HistorialController.find);
router.post('/historial/save', HistorialController.save);

// EXPORTAR RUTA
module.exports = router;