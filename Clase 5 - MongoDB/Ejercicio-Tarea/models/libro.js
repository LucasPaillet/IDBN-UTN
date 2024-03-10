const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

moongose.connect('mongodb://localhost:27017/libreria')

const libroSchema = new moongose.Schema(
    {
        titulo: String,
        autor: String
    }, {collection: 'libros'}
)

const Libro = mongoose.model('Libro', libroSchema)

module.exports = Libro