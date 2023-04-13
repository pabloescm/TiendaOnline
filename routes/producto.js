var express = require('express');
var router = express.Router();
const pool = require('../models/conexion') // hago el import del objeto pool para poder utilizarlo para la consulta.
const {todos,obtenerPorId,actualizar,crear,eliminar} = require('../models/productoModelo') //Importo las funciones de productoModelo que tienen las consultas a la base de datos.

// Ruta encargada de mostrar los productos
router.get('/',todos);

// Ruta encargada de obtener un producto por id
router.get('/:id', obtenerPorId);


// Ruta encargada de agregar un producto
router.post('/agregar', crear);

// Ruta encargada de eliminar un producto
router.delete('/eliminar/:id',eliminar)

// Ruta encargada de actualizar un producto
router.put('/actualizar/', actualizar)

module.exports = router;