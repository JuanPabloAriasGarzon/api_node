const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');


router.get("/usuarios/todos",UsuarioController.obtenerUsuarios);
router.get("/usuarios/buscar/:id",UsuarioController.obtenerUsuariosporid);
router.post("/usuarios/crear",UsuarioController.crearUsuarios);

module.exports = router;