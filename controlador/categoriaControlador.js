const pool = require('./conexion')

const todos = (request, response) => {
  pool.query('SELECT * FROM categoria_producto', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const obtenerPorId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM categoria_producto WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const crear = (request, response) => {
  const {categoria} = request.body

  pool.query('INSERT INTO categoria_producto (nombre_de_categoria) VALUES ($1) RETURNING *', [categoria], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`categoria agregado con ID: ${results.rows[0].id}`)
  })
}

const actualizar = (request, response) => {
  //const id = parseInt(request.params.id)
  const {id,categoria} = request.body

  pool.query(
    'UPDATE categoria_producto SET  nombre_de_categoria= $1 WHERE id = $2',
    [categoria, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Categoria actualizado con ID: ${id}`)
    }
  )
}

const eliminar = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM categoria_producto WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Categoria eliminado con ID: ${id}`)
  })
}

module.exports = {
  todos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
}
