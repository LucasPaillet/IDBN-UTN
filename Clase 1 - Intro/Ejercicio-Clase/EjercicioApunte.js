let arrayEstudiantes = []
console.log('Bienvenido al registro de estudiantes!')
console.log('')

let cantidad = parseInt(prompt('Ingrese la cantidad'))
for (let i = 0; i < cantidad; i++)
{
    let nombre = prompt(`Ingrese el nombre del estudiante ${i+1}`)
    let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i+1}`))
    const estudiante = 
    {
        nombre: nombre,
        edad: edad,
    }
    arrayEstudiantes.push(estudiante)
    
}

console.log('')
console.log('Registro finalizado, mostrando resultados...')
for (let i = 0; i < arrayEstudiantes.length; i++)
{
    console.log(`Estudiante numero ${i+1}
        Nombre: ${arrayEstudiantes[i].nombre}
        Edad: ${arrayEstudiantes[i].edad}`)
}

console.log('')
console.log('Gracias por utilizar nuestro servicio')
console.log('Programa finalizado')