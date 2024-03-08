const libros = require('../bd/bd-libros')
const express = require('express')
const route = express.Router()
const joi = require('joi')

const libroSchema = 
    joi.object(
        {
            titulo: joi.string().required().label('Titulo'),
            autor: joi.string().required().label('Autor')
        }
    )

route.get('/', (req, res, next) =>
{
    try
    {
        res.json(libros)
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
        const libro = libros.find((p) => p.id === id)

        if(!libro)
        {
            const error = new Error('Libro no encontrado')
            error.status = 404
            throw error
        }
        res.json(libro)
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
        const {error, value} = libroSchema.validate(req.body)
        if(error)
        {
            const errorValidacion = new Error('Esquema incorrecto')
            errorValidacion.status = 400
            errorValidacion.details = error.details.map(detail => detail.message)
            throw errorValidacion
        }
        const {titulo, autor} = value

        const nuevoLibro = 
        {
            id: libros.length + 1,
            titulo,
            autor,
        }

        libros.push(nuevoLibro)
        res.status(201).json(nuevoLibro)
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

        const {error, value} = libroSchema.validate(req.body)
        if(error)
        {
            const errorValidacion = new Error('Esquema incorrecto')
            errorValidacion.status = 400
            errorValidacion.details = error.details.map(detail => detail.message)
            throw errorValidacion
        }

        const {titulo, autor} = value

        const libro = libros.find((p) => p.id === id)

        if(!libro)
        {
            const error = new Error('Libro no encontrado')
            error.status = 404
            throw error 
        }
        else
        {
            libro.titulo = titulo || libro.titulo
            libro.autor = autor || libro.autor

            res.json(libro)
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
        const indice = libros.findIndex((p) => p.id === id)

        if(indice === -1)
        {
            const error = new Error('Libro no encontrado')
            error.status = 404
            throw error 
        }
        else
        {
            const libroEliminado = libros.splice(indice, 1)
            res.json(libroEliminado)
        }
    }
    catch (err)
    {
        next(err)
    }
})

module.exports = route