const express = require('express')
const app = express()
const routeLibros = require('./routes/libro')

const port = 3000
app.use(express.json())
const errorHandler = require('./middleware/errorHandler')

app.use('/libros', routeLibros)

app.use(errorHandler)

app.listen(port, () =>
{
    console.log(`Server levantado en ${port}`)
})