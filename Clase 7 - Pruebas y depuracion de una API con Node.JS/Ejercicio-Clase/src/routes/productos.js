const express = require('express')
const route = express.Router()

const productoController = require('../controllers/productoController')

const { requiredScopes } = require('express-oauth2-jwt-bearer')

route.get('/', productoController.getAllProductos)
route.get('/:id', requiredScopes('read:productos'), productoController.getProductoID)
route.post('/', productoController.createProducto)
route.put('/', requiredScopes('write:productos'), productoController.updateProducto)
route.delete('/', requiredScopes('write:productos'), productoController.deleteProducto)

module.exports = route