// Aluno: Renzo Gomes Avance
// Matéria: Engenharia de Software

function conversosNumerosRomanos(numero) {
    const legendaRomano = [
        { numeroNormal: 1000, numeroRomano: 'M' },
        { numeroNormal: 900, numeroRomano: 'CM' },
        { numeroNormal: 500, numeroRomano: 'D' },
        { numeroNormal: 400, numeroRomano: 'CD' },
        { numeroNormal: 100, numeroRomano: 'C' },
        { numeroNormal: 90, numeroRomano: 'XC' },
        { numeroNormal: 50, numeroRomano: 'L' },
        { numeroNormal: 40, numeroRomano: 'XL' },
        { numeroNormal: 10, numeroRomano: 'X' },
        { numeroNormal: 9, numeroRomano: 'IX' },
        { numeroNormal: 5, numeroRomano: 'V' },
        { numeroNormal: 4, numeroRomano: 'IV' },
        { numeroNormal: 1, numeroRomano: 'I' }
    ];

    let resultado = '';
    while (numero > 0) {
        for (const { numeroNormal, numeroRomano } of legendaRomano) {
            while (numero >= numeroNormal) {
                resultado += numeroRomano;
                numero -= numeroNormal;
            }
        }
    }
    return resultado;
}

// troque o valor de numero para alterar o resultado no console log
const numero = 167; 

console.log(`A conversão de ${numero} para algarismos romanos é ${conversosNumerosRomanos(numero)}`);
