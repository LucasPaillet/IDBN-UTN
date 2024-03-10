const { error } = require('console')
const express = require('express')
const route = express.Router()

let productos =
[
    {id: 1, nombre: "Producto 1", precio: 50},
    {id: 2, nombre: "Producto 2", precio: 100},
    {id: 3, nombre: "Producto 3", precio: 150},
]

route.get('/', (req, res, next) =>
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

route.get('/:id', (req, res, next) =>
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

route.post('/', (req, res, next) =>
{
    try
    {    
        const {nombre, precio} = req.body

        const nuevoProducto = 
        {
            id: productos.length + 1,
            nombre,
            precio,
        }

        productos.push(nuevoProducto)
        res.status(201).json(nuevoProducto)
    }
    catch (err)
    {
        next(err)
    }
})

route.put('/:id', (req, res, next) =>
{
    try
    {

    
        const id = parseInt(req.params.id)
        const {nombre, precio} = req.body

        const producto = productos.find((p) => p.id === id)

        if(!producto)
        {
            const error = new Error('Producto no encontrado')
            error.status = 404
            throw error 
        }
        else
        {
            producto.nombre = nombre || producto.nombre
            producto.precio = precio || producto.precio

            res.json(producto)
        }
    }
    catch (err)
    {
        next(err)
    }
})

route.delete('/:id', (req, res, next) =>
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
        else
        {
            const productoEliminado = productos.splice(indice, 1)
            res.json(productoEliminado)
        }
    }
    catch (err)
    {
        next(err)
    }
})

module.exports = route