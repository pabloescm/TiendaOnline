const pool = require('./conexion')

const todos = (request, response) => {
  pool.query('SELECT * FROM orden', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const obtenerPorId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM orden WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const crear = (request, response) => {
  const {idUsuario,idFormadePago,fechaOrden} = request.body

  pool.query('INSERT INTO orden (id_usuario,id_forma_pago,fecha_orden) VALUES ($1,$2,$3) RETURNING *', [idUsuario,idFormadePago,fechaOrden], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`orden agregada con ID: ${results.rows[0].id}`)
  })
}

const actualizar = (request, response) => {
  //const id = parseInt(request.params.id)
  const {id,idUsuario,idFormadePago,fechaOrden} = request.body

  pool.query(
    'UPDATE orden SET  id_usuario= $1 ,id_forma_pago=$2, fecha_orden=$3 WHERE id = $4',
    [idUsuario,idFormadePago,fechaOrden, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`orden actualizada con ID: ${id}`)
    }
  )
}

const eliminar = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM orden WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`orden eliminada con ID: ${id}`)
  })
}

module.exports = {
  todos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
}
