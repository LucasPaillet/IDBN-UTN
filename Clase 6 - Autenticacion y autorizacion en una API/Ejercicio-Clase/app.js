const express = require('express')
const productosRouter = require('./routes/productos')
const errorHandler = require('./middleware/errorHandler')
const { auth } = require('express-oauth2-jwt-bearer');

const app = express()

const jwtCheck = auth
(
    {
        audience: 'https://localhost:3000/productos',
        issuerBaseURL: 'https://dev-vmlfp0i6blanr4s6.us.auth0.com/',
        tokenSigningAlg: 'RS256'
    }
)

//Al agregarlo aca, todos los endpoints van a utilizar el check
app.use(jwtCheck)

app.use(express.json())

app.get('/', (req, res) =>
{
    res.send('API de productos')
})

app.use('/productos', productosRouter)

// Aca solo lo valido en este endpoint
// app.use('/productos', jwtCheck, productosRouter)

app.use(errorHandler)

const port = 3000
app.listen(port, () =>
{
    console.log(`Server levantado en ${port}`)
})