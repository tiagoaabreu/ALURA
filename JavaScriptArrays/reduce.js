const salaJS = [7,8,9,10.5,6,7,8,9,10]
const salaJava = [9,1,2,3,4,5,6,7,8,9]
const salaPython = [3.6,5,3,6]

function calculoMedia(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0)
    media = soma / notas.length
    return media;
}



console.log(calculoMedia(salaJS));
console.log(calculoMedia(salaJava));
console.log(calculoMedia(salaPython));
