const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

//primeira expressao: executada apenas uma vez
//segunda expressao: verifica se a condicao é verdadeira
//terceira expressao: incrementa ou decrementa o valor da variavel de controle

for (let indice = 0; indice < notas.length; indice++) {
  console.log(`Índice: ${indice}, Nota: ${notas[indice]}`);
}
