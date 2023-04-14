var express = require('express');
var router = express.Router();
const pool = require('../controlador/conexion') // hago el import del objeto pool para poder utilizarlo para la consulta.
const {todos,obtenerPorId,actualizar,crear,eliminar} = require('../controlador/usuarioControlador') //Importo las funciones de usuarioControlador que tienen las consultas a la base de datos.

// Ruta encargada de mostrar los usuarios
router.get('/',todos);

// Ruta encargada de obtener un usuario por id
router.get('/:id', obtenerPorId);


// Ruta encargada de agregar un usuario
router.post('/', crear);

// Ruta encargada de eliminar un usuario
router.delete('/:id',eliminar)

// Ruta encargada de actualizar un usuario
router.put('/', actualizar)

module.exports = router;