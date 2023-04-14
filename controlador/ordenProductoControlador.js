const pool = require('./conexion')

const todos = (request, response) => {
  pool.query('SELECT * FROM orden_producto', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const obtenerPorId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM orden_producto WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const crear = (request, response) => {
  const {idOrden,idProducto,cantidad,precioUnitario} = request.body

  pool.query('INSERT INTO orden_producto (id_orden,id_producto,cantidad,precio_unitario) VALUES ($1,$2,$3,$4) RETURNING *', [idOrden,idProducto,cantidad,precioUnitario], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`ordenProducto agregado con ID: ${results.rows[0].id}`)
  })
}

const actualizar = (request, response) => {
  //const id = parseInt(request.params.id)
  const {id,idOrden,idProducto,cantidad,precioUnitario} = request.body

  pool.query(
    'UPDATE orden_producto SET id_orden= $1,id_producto=$2,cantidad=$3,precio_unitario=$4 WHERE id = $5',
    [idOrden,idProducto,cantidad,precioUnitario, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`CategoriaProducto actualizado con ID: ${id}`)
    }
  )
}

const eliminar = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM orden_producto WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`CategoriaProducto eliminado con ID: ${id}`)
  })
}

module.exports = {
  todos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
}
