const express = require('express')
const route = express.Router()
const { requiredScopes } = require('express-oauth2-jwt-bearer')

let productos = 
[
    {
        id: 1,
        nombre: 'Producto 1',
        precio: 11
    },
    {
        id: 2,
        nombre: 'Producto 1',
        precio: 20
    },
    {
        id: 3,
        nombre: 'Producto 1',
        precio: 6
    }
]

route.get('/', requiredScopes('read:productos'), (req, res, next) =>
{
    try
    {
        res.json(productos)
    }
    catch (err)
    {
        next(err)
    }
})

route.get('/:id', requiredScopes('read:productos'), (req, res, next) =>
{
    try
    {
        const id = parseInt(req.params.id)
        const producto = productos.find((p) => p.id === id)

        if(!producto)
        {
            const error = new Error('Producto no encontrado')
            error.status = 404
            throw error
        }

        res.json(producto)
    }
    catch (err)
    {
        next(err)
    }
})

route.post('/', requiredScopes('write:productos'), (req, res, next) =>
{
    try
    {

        const {nombre, precio} = req.body

        const nuevoProducto =
        {
            id: productos.length + 1,
            nombre,
            precio
        }

        productos.push(nuevoProducto)
        res.json(nuevoProducto)
    }
    catch (err)
    {
        next(err)
    }
})

route.put('/', requiredScopes('write:productos'), (req, res, next) =>
{
    try
    {

        const {nombre, precio} = req.body

        const producto = productos.find((p) => p.id === id)

        if(!producto)
        {
            const error = new Error('Producto no encontrado')
            error.status = 404
            throw error
        }

        producto.nombre = nombre || producto.nombre
        producto.precio = precio || producto.precio

        res.json(producto)
    }
    catch (err)
    {
        next(err)
    }
})

route.delete('/', requiredScopes('write:productos'), (req, res, next) =>
{
    try
    {

        const id = parseInt(req.params.id)
        const indice = productos.findIndex((p) => p.id === id)

        if(indice === -1)
        {
            const error = new Error('Producto no encontrado')
            error.status = 404
            throw error
        }

        const productoEliminado = productos.splice(indice, 1)
        res.json(productoEliminado)
    }
    catch (err)
    {
        next(err)
    }
})

module.exports = route