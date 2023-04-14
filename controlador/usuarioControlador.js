const pool = require('./conexion')

const todos = (request, response) => {
  pool.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const obtenerPorId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM usuario WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const crear = (request, response) => {
  const { correo, telefono, contraseña, direccion, nombre,apellido } = request.body

  pool.query('INSERT INTO usuario (correo, telefono, contraseña, direccion, nombre, apellido) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', [correo, telefono, contraseña, direccion, nombre,apellido], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`usuario agregado con ID: ${results.rows[0].id}`)
  })
}

const actualizar = (request, response) => {
  //const id = parseInt(request.params.id)
  const { id, correo, telefono, contraseña, direccion, nombre,apellido } = request.body

  pool.query(
    'UPDATE usuario SET  correo= $1, telefono = $2 ,contraseña =$3,direccion=$4, nombre=$5 ,apellido=$6 WHERE id = $7',
    [correo, telefono, contraseña, direccion, nombre,apellido , id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`usuario actualizado con ID: ${id}`)
    }
  )
}

const eliminar = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM usuario WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Usuario eliminado con ID: ${id}`)
  })
}

module.exports = {
  todos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar,
}
