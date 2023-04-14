const express = require('express')
const productoRoutes = require('./routes/producto')
const usuarioRoutes = require('./routes/usuario')
const categoriaRoutes = require('./routes/categoria')
const ordenProductoRoutes = require('./routes/ordenProducto')
const ordenRoutes = require('./routes/ordenes')
const formaPago = require('./routes/formaPago')

var bodyParser = require('body-parser')
const app = express()
const port = 3000

// app.use(express.json())//ayuda a node a reconocer objetos tipo JSON.
// app.use(express.text())//ayuda a node a reconocer texto plano.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/productos', productoRoutes); //le indico a la app las rutas de los productos.
app.use('/usuarios', usuarioRoutes); //le indico a la app las rutas de los productos.
app.use('/categorias', categoriaRoutes); //le indico a la app las rutas de los productos.
app.use('/ordenProductos', ordenProductoRoutes); //le indico a la app las rutas de los productos.
app.use('/ordenes', ordenRoutes); //le indico a la app las rutas de los productos.
app.use('/formaPagos', formaPago); //le indico a la app las rutas de los productos.

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})