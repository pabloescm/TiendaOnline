const pool = require('./conexion')

const todos = (request, response) => {
  pool.query('SELECT * FROM forma_pago', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const obtenerPorId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM forma_pago WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const crear = (request, response) => {
  const {tipoDePago} = request.body

  pool.query('INSERT INTO forma_pago (tipo_de_pago) VALUES ($1) RETURNING *', [tipoDePago], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`forma de pago agregada con ID: ${results.rows[0].id}`)
  })
}

const actualizar = (request, response) => {
  //const id = parseInt(request.params.id)
  const {id,tipoDePago} = request.body

  pool.query(
    'UPDATE forma_pago SET tipo_de_pago= $1 WHERE id = $2',
    [tipoDePago, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`forma de pago actualizada con ID: ${id}`)
    }
  )
}

const eliminar = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM forma_pago WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`forma de pago eliminada con ID: ${id}`)
  })
}

module.exports = {
  todos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
}
