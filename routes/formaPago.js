var express = require('express');
var router = express.Router();
const pool = require('../controlador/conexion') // hago el import del objeto pool para poder utilizarlo para la consulta.
const {todos,obtenerPorId,actualizar,crear,eliminar} = require('../controlador/formaPagoControlador') //Importo las funciones de productoModelo que tienen las consultas a la base de datos.

// Ruta encargada de mostrar las formas de Pagos
router.get('/',todos);

// Ruta encargada de obtener una forma de Pago por id
router.get('/:id', obtenerPorId);


// Ruta encargada de agregar una forma de Pago
router.post('/', crear);

// Ruta encargada de eliminar un forma de Pago
router.delete('/:id',eliminar)

// Ruta encargada de actualizar un forma de Pago
router.put('/', actualizar)

module.exports = router;