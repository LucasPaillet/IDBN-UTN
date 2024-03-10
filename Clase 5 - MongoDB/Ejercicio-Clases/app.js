const express = require('express')
const app = express()
const routeVendedores = require('../Ejercicio-Clases/routes/vendedores')

const port = 3000
app.use(express.json())

app.use('/vendedores', routeVendedores)

app.listen(port, () =>
{
    console.log(`Server levantado en ${port}`)
})