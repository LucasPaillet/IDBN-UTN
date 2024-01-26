const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) =>
{
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.end('{"mensaje": "Keonda"}')
})

server.listen(port, hostname, () =>
{
    console.log('Server levantado')
})