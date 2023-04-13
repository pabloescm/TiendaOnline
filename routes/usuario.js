var express = require('express');
var router = express.Router();


// Ruta encargada de mostrar los usuarios
router.get('/', function (req, res) {
    res.send('Mis usuarios');
});


// Ruta encargada de agregar un usuario
router.post('/agregar', function (req, res) {
    res.send(req.body);
    //res.send('Agregar producto');
    console.log('usuario agregado');
});

// Ruta encargada de eliminar un usuario
router.delete('/eliminar/:id', function (req, res) {
    res.send('Eliminar usuario');
});

// Ruta encargada de actualizar un usuario
router.put('/actualizar/:id', function (req, res) {
    res.send('Actualizar usuario');
});

module.exports = router;