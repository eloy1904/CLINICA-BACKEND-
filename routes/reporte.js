'use strict'

var express = require('express');


var reporteController = require('../controller/reporte');

var router = express.Router();


router.get('/reportes/pagosReport',reporteController.pagosReport);


module.exports = router;