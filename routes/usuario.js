'use strict'

var express = require('express');
const { model } = require('mongoose');


var UsuarioController = require('../controller/usuario');

var router = express.Router();

// RUTAS PARA USUARIOS
router.get('/usuarios', UsuarioController.list);
router.get('/usuarios/:id', UsuarioController.find);
router.post('/usuarios/save', UsuarioController.save);

// EXPORTAR RUTA
module.exports = router;