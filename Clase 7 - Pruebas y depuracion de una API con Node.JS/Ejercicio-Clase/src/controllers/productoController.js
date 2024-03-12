const Producto = require('../models/productos')

exports.getAllProductos = async (req, res) =>
{
    try
    {
        const productos = await Producto.find()
        res.status(200).json(productos)
    }
    catch (error)
    {
        res.status(500).json({ error: 'Error al buscar' })
    }
}

exports.createProducto = async (req, res) =>
{
    try
    {
        const nuevoProducto = await Producto.create(req.body)
        res.status(201).json(nuevoProducto)
    }
    catch (err)
    {
        res.status(500).json({ err: 'Error al crear'})
    }
}

exports.getProductoID = async (req, res) =>
{
    try
    {
        const producto = await Producto.findById(req.params.id)
        res.status(201).json(producto)
    }
    catch (err)
    {
        res.status(500).json({ err: 'Error al buscar'})
    }
}

exports.updateProducto = async (req, res) =>
{
    try
    {
        const productoUpdated = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        if(!productoUpdated)
        {
            res.status(404).json({ err: `No se pudo encontrar el producto ${req.params.id}`})    
        }
        res.status(200).json(productoUpdated)
    }
    catch (err)
    {
        res.status(500).json({ err: 'Error al actualizar'})
    }
}

exports.deleteProducto = async (req, res) =>
{
    try
    {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id)
        if(!productoEliminado)
        {
            return res.status(404).json({ error: `No se pudo encontrar el producto ${req.params.id}`})
        }
        res.status(201).json(productoEliminado)
    }
    catch (err)
    {
        res.status(404).json({ err: 'Error al eliminar'})
    }
}