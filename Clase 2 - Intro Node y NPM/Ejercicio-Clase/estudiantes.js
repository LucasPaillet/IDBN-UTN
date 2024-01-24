const readLineSync = require('readline-sync')

const registrarEstudiantes = () =>
{
    const cantidad = readLineSync.question('Ingrese la cantidad de estudiantes a registrar: ')
    const estudiantes = []

    for (let i = 0; i < cantidad; i++)
    {
        console.log('')
        const nombre = readLineSync.question(`Ingrese el nombre del estudiante ${i+1}: `)
        const edad = readLineSync.question(`Ingrese la edad del estudiante ${i+1}: `)

        const estudiante =
        {
            nombre:nombre,
            edad:edad
        }

        estudiantes.push(estudiante)
    }

    mostrarEstudiantes(estudiantes)
}

const mostrarEstudiantes = (estudiantes) =>
{
    console.log('')
    console.log('Iniciando muestra de estudiantes')
    console.log('')
    let i = 0
    for (const estudiante of estudiantes)
    {
        console.log(`Estudiante número ${i+1}
            Nombre: ${estudiante.nombre}
            Edad: ${estudiante.edad}`)
        i++
    }
    console.log('')
    console.log('Muestra finalizada')
    console.log('')
}

module.exports = {registrarEstudiantes}