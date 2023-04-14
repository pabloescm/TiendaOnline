var express = require('express');
var router = express.Router();
const pool = require('../controlador/conexion') // hago el import del objeto pool para poder utilizarlo para la consulta.
const {todos,obtenerPorId,actualizar,crear,eliminar} = require('../controlador/ordenControlador') //Importo las funciones de productoModelo que tienen las consultas a la base de datos.

// Ruta encargada de mostrar los ordenes
router.get('/',todos);

// Ruta encargada de obtener un orden por id
router.get('/:id', obtenerPorId);


// Ruta encargada de agregar un orden
router.post('/', crear);

// Ruta encargada de eliminar un orden
router.delete('/:id',eliminar)

// Ruta encargada de actualizar un orden
router.put('/', actualizar)

module.exports = router;