const express = require('express')
const router = express.Router()
const { requiredScopes } = require('express-oauth2-jwt-bearer')

const Libro = require('../models/libros')

router.get('/', requiredScopes('read:libros'), async (req, res) =>
{
    try
    {
        const libro = await Libro.find()
        res.json(libro)
    }
    catch (error)
    {
        res.status(500).json({ error: 'No se pudieron obtener los libros'})
    }
})

router.get('/:id', requiredScopes('read:libros'), async (req, res) =>
{
    try
    {
        const libro = await Libro.findById(req.params.id)
        res.json(libro)
    }
    catch (error)
    {
        res.status(500).json({ error: `No se pudo obtener el libro ${req.params.id}`})
    }
})

router.post('/', requiredScopes('write:libros'), async (req, res) =>
{
    try
    {
        const nuevolibro = new Libro(req.body)
        await nuevolibro.save()
        res.json(nuevolibro)
    }
    catch (error)
    {
        res.status(500).json({ error: 'No se pudo crear el libro'})
    }
})

router.put('/:id', requiredScopes('write:libros'), async (req, res) =>
{
    try
    {
        const libro = await Libro.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true
            })
        res.json(libro)
    }
    catch (error)
    {
        res.status(500).json({ error: 'No se pudo actualizar el libro'})
    }
})

router.delete('/:id', requiredScopes('write:libros'), async (req, res) =>
{
    try
    {
        const libro = await Libro.findByIdAndDelete(req.params.id)
        res.json(libro)
    }
    catch (error)
    {
        res.status(500).json({ error: 'No se pudo eliminar el libro'})
    }
})

module.exports = router