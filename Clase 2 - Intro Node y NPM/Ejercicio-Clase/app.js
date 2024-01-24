const { multiplicar, sumar } = require("./calculadora")
const {registrarEstudiantes} = require("./estudiantes")

console.log('')
console.log('Manejo de módulos de calculadora')

let resultado1 = sumar(4, 5)

console.log(`El resultado de la suma es ${resultado1}`)

let resultado2 = multiplicar(4, 5)

console.log(`El resultado de la multiplicación es ${resultado2}`)
console.log('')

console.log('Manejo de módulos de estudiantes')
console.log('')
registrarEstudiantes()