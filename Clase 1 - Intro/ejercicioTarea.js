const calcularPromedio = (numeros) =>
{
    let promedio = 0
    let largo = numeros.length
    if (largo > 0)
    {
        let suma = 0
        for (let numero of numeros)
        {
            suma += numero
        }
        promedio = suma / largo
    }
    else
    {
        console.log('No se han pasado numeros como parametros. El promedio retornado sera null')
        promedio = null
    }
    
    return promedio
}

let array1 = []
let array2 = [5, 4, 3, 10, 15]

let promedio1 = calcularPromedio(array1)
console.log(`Primer calculo de promedio ${promedio1}`)

let promedio2 = calcularPromedio(array2)
console.log(`Primer calculo de promedio ${promedio2}`)