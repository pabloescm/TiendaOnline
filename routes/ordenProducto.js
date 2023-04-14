var express = require('express');
var router = express.Router();
const pool = require('../controlador/conexion') // hago el import del objeto pool para poder utilizarlo para la consulta.
const {todos,obtenerPorId,actualizar,crear,eliminar} = require('../controlador/ordenProductoControlador') //Importo las funciones de productoModelo que tienen las consultas a la base de datos.

// Ruta encargada de mostrar las ordenes de Producto 
router.get('/',todos);

// Ruta encargada de obtener una orden de Producto  por id
router.get('/:id', obtenerPorId);


// Ruta encargada de agregar una orden de Producto 
router.post('/', crear);

// Ruta encargada de eliminar una orden de Producto 
router.delete('/:id',eliminar)

// Ruta encargada de actualizar una orden de Producto 
router.put('/', actualizar)

module.exports = router;