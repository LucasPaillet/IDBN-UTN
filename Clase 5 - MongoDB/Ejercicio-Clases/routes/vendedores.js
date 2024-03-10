const express = require('express')
const router = express.Router()

const vendedor = require('../models/vendedor')
const Vendedor = require('../models/vendedor')

router.get('/', async (req, res) =>
{
    try
    {
        const vendedores = await vendedor.find()
        res.json(vendedores)
    }
    catch (err)
    {
        res.status(500).json({ error: 'No se pudieron obtener los vendedores'})
    }
})

router.post('/', async (req, res) =>
{
    try
    {
        const nuevoVendedor = new vendedor(req.body)
        await nuevoVendedor.save()
        res.json(nuevoVendedor)
    }
    catch (err)
    {
        res.status(500).json({ error: 'No se pudo crear el vendedor'})
    }
})

router.put('/:id', async (req, res) =>
{
    try
    {
        const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true
            })
        res.json(vendedor)
    }
    catch (err)
    {
        res.status(500).json({ error: 'No se pudo actualizar el vendedor'})
    }
})

router.delete('/:id', async (req, res) =>
{
    try
    {
        const vendedor = await Vendedor.findByIdAndDelete(req.params.id)
        res.json(vendedor)
    }
    catch (err)
    {
        res.status(500).json({ error: 'No se pudo eliminar el vendedor'})
    }
})

module.exports = router