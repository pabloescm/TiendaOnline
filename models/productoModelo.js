const pool = require('./conexion')

const todos = (request, response) => {
    pool.query('SELECT * FROM producto', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const obtenerPorId = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const crear = (request, response) => {
    const { idCategoria, nombre,precio,descripcion,imagen } = request.body
  
    pool.query('INSERT INTO producto (id_categoria_producto, nombre,precio,descripcion,imagen_de_producto) VALUES ($1, $2,$3,$4,$5) RETURNING *', [idCategoria, nombre,precio,descripcion,imagen ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Producto agregado con ID: ${results.rows[0].id}`)
    })
  }

  const actualizar = (request, response) => {
    //const id = parseInt(request.params.id)
    const {id, nombre,precio,descripcion,imagen,idCategoria } = request.body
  
    pool.query(
      'UPDATE producto SET  nombre= $1, precio = $2 ,descripcion =$3,imagen_de_producto=$4,id_categoria_producto =$5 WHERE id = $6',
      [nombre,precio,descripcion,imagen,idCategoria,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Producto actualizado con ID: ${id}`)
      }
    )
  }

  const eliminar = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Producto eliminado con ID: ${id}`)
    })
  }

  module.exports = {
    todos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
  }
  