const { getAllProductos, createProducto } = require('../../src/controllers/productoController')

const productoModel = require('../../src/models/productos')

jest.mock('../../src/models/productos')

describe('Producto Controller', () =>
{
    afterEach(() =>
    {
        jest.clearAllMocks()
    })


    test('getAllProductos deberia obtener todos los productos', async () =>
    {
        // Defino set de prueba
        const mockProductos =
        [
            {nombre: 'Producto 1', precio: 10},
            {nombre: 'Producto 2', precio: 20}
        ]

        // Al modelo, le asigno el mock
        productoModel.find.mockResolvedValue(mockProductos)

        // Simulo request y response
        const req = {}
        const res =
        {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await getAllProductos(req, res)

        // Defino que deberia recibir
        // El status debe ser 200
        expect(res.status).toHaveBeenCalledWith(200)
        // Debe devolver el set de prueba
        expect(res.json).toHaveBeenCalledWith(mockProductos)
        // Debe ejecutarse una sola vez
        expect(productoModel.find).toHaveBeenCalledTimes(1)
    })

    test('getAllProductos deberia manejar errores', async () =>
    {
        const errorMessage = 'Error al buscar'

        productoModel.find.mockRejectedValue(new Error(errorMessage))

        const req = {}
        const res =
        {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }

        await getAllProductos(req, res)

        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({ error: errorMessage })
        expect(productoModel.find).toHaveBeenCalledTimes(1)
    })

    test('createProducto deberia crear un nuevo producto', async() =>
    {
        const mockProductoData = {nombre: 'Nuevo Producto', precio: 15}
        const mockSavedProducto = {_id: '1', ...mockProductoData}

        productoModel.create.mockResolvedValue(mockSavedProducto)

        const req = {body: mockProductoData}
        const res =
        {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        }

        await createProducto(req, res)

        expect(res.status).toHaveBeenCalledWith(201)
        // Debe recibir el producto creado
        expect(res.json).toHaveBeenCalledWith(mockSavedProducto)
        expect(productoModel.create).toHaveBeenCalledTimes(1)
        // Debe recibir el set de datos
        expect(productoModel.create).toHaveBeenCalledWith(mockProductoData)
    })
})

