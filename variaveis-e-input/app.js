const readLine = require('readLine').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input
    console.log(`A idade do usuario é: ${leituraDeCampo}`)
})
