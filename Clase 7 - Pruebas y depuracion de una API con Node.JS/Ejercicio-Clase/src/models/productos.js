const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/empresa')

const productoSchema = new mongoose.Schema(
    {
        nombre: String,
        precio: Number,
    }, {collection: 'productos'}
)

const Producto = mongoose.model('Producto', productoSchema)

module.exports = Producto