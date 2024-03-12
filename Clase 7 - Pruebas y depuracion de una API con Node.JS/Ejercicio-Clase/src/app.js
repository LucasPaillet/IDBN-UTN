const express = require('express')
const productosRouter = require('./routes/productos')
const errorHandler = require('./middlewares/errorHandler')

const { auth } = require('express-oauth2-jwt-bearer')

const autenticacion = auth(
    {
        audience: 'http://localhost:3000/api/productos',
        issuerBaseURL: 'https://dev-vmlfp0i6blanr4s6.us.auth0.com/',
        tokenSigningAlg: 'RS256'
    }
)

const app = express()
app.use(express.json())

app.get('/', (req, res) =>
{
    res.send('API de productos')
})
app.use('/api/productos', productosRouter)

app.use(errorHandler)


const port = 3000
app.listen(port, () =>
{
    console.log(`Server levantado en ${port}`)
})

module.exports = app