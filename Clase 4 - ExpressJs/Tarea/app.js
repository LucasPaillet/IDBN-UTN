const express = require('express')
const app = express()
const routeLibros = require('./routes/libros')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())

app.use('/libros', routeLibros)
app.use(errorHandler)

const port = 3000

app.listen(port, () =>
{
    console.log(`Server levantado en ${port}`)
})