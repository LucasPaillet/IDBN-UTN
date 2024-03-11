const express = require('express')
const librosRouter = require('./routes/libros')
const errorHandler = require('./middleware/errorHandler')
const {auth} = require('express-oauth2-jwt-bearer')

const autenticacion = auth(
    {
        audience: 'https://localhost:3000/libros',
        issuerBaseURL: 'https://dev-vmlfp0i6blanr4s6.us.auth0.com/',
        tokenSigningAlg: 'RS256'
    }
)

const app = express()
app.use(express.json())

app.use('/libros', autenticacion, librosRouter)

app.use(errorHandler)

const port = 3000
app.listen(port, () =>
{
    console.log(`Server levantado en ${port}`)
})