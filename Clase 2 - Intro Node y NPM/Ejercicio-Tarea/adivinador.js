const readLineSync = require('readline-sync')

const adivinarNumero = () =>
{
    let numeroUsuario = readLineSync.question('Ingrese un número: ')
    const numeroSecreto = Math.floor(Math.random() * 100) + 1
    let diferencia = numeroSecreto - numeroUsuario
    let intentos = 1

    while (numeroUsuario != numeroSecreto)
    {
        if (diferencia > 0)
        {
            if (diferencia >= 60)
            {
                console.log(`${numeroUsuario} esta a más de 60 unidades de distancia (friísimo, segui subiendo)`)
            }else if (diferencia >= 40)
            {
                console.log(`${numeroUsuario} esta a más de 40 unidades de distancia (frio, segui subiendo)`)
            }else if (diferencia >= 20)
            {
                console.log(`${numeroUsuario} esta a más de 20 unidades de distancia (fresquito, segui subiendo)`)
            }else if (diferencia >= 10)
            {
                console.log(`${numeroUsuario} esta a más de 10 unidades de distancia (tibio, segui subiendo un poquito)`)
            }else if (diferencia >= 5)
            {
                console.log(`${numeroUsuario} solo está a más de 5 unidades (caliente, no subas tantoo)`)
            }else if ((diferencia < 5) && (diferencia > 1))
            {
                console.log(`${numeroUsuario} a menos de 4 unidades (hirviendo, casi ni subas)`)
            }else if (diferencia == 1)
            {
                console.log(`${numeroUsuario} subi uno y listo!`)
            }
        }
        else
        {
            diferencia *= -1
            if (diferencia >= 60)
            {
                console.log(`${numeroUsuario} esta a más de 60 unidades de distancia (friísimo, segui bajando)`)
            }else if (diferencia >= 40)
            {
                console.log(`${numeroUsuario} esta a más de 40 unidades de distancia (frio, segui bajando)`)
            }else if (diferencia >= 20)
            {
                console.log(`${numeroUsuario} esta a más de 20 unidades de distancia (fresquito, segui bajando)`)
            }else if (diferencia >= 10)
            {
                console.log(`${numeroUsuario} esta a más de 10 unidades de distancia (tibio, segui bajando un poquito)`)
            }else if (diferencia >= 5)
            {
                console.log(`${numeroUsuario} solo está a más de 5 unidades (caliente, no bajes tantoo)`)
            }else if ((diferencia < 5) && (diferencia > 1))
            {
                console.log(`${numeroUsuario} a menos de 4 unidades (hirviendo, casi ni bajes)`)
            }else if (diferencia == 1)
            {
                console.log(`${numeroUsuario} baja uno y listo!`)
            }
        }
        console.log('')
        numeroUsuario = readLineSync.question('Ingrese otro número: ')
        console.log('')
        diferencia = numeroSecreto - numeroUsuario
        intentos += 1
    }
    console.log(`Felicidades!! El número secreto era ${numeroSecreto} y lo adivinaste en ${intentos} intentos`)
    console.log('Finalizando programa')

}

module.exports = {adivinarNumero}