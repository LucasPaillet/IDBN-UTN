const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

moongose.connect('mongodb://localhost:27017/empresa')

const vendedorSchema = new moongose.Schema(
    {
        nombre: String,
        producto: String,
        email: String
    }, {collection: 'vendedores'}
)

const Vendedor = mongoose.model('Vendedor', vendedorSchema)

module.exports = Vendedor