var express = require('express');
var router = express.Router();
const pool = require('../controlador/conexion') // hago el import del objeto pool para poder utilizarlo para la consulta.
const {todos,obtenerPorId,actualizar,crear,eliminar} = require('../controlador/categoriaControlador') //Importo las funciones de productoModelo que tienen las consultas a la base de datos.

// Ruta encargada de mostrar los categorias
router.get('/',todos);

// Ruta encargada de obtener un categoria por id
router.get('/:id', obtenerPorId);


// Ruta encargada de agregar un categoria
router.post('/', crear);

// Ruta encargada de eliminar un categoria
router.delete('/:id',eliminar)

// Ruta encargada de actualizar un categoria
router.put('/', actualizar)

module.exports = router;