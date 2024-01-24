const Chance = require('chance')

const chance = new Chance()

const nombreRandom = chance.name()
const edadRandom = chance.age()
const correoRandom = chance.email()

console.log(`Nombre aleatorio ${nombreRandom}`)
console.log(`Edad aleatorio ${edadRandom}`)
console.log(`Correo aleatorio ${correoRandom}`)