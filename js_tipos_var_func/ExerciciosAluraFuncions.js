/*
Exercicio numero 1:

saudacao = (nome) => `Saudação ${nome} um prazer te ver aqui!`;

console.log(saudacao("João"));
*/

/*

const verificarIdade = (idade) => {
  if (idade >= 18) return "Usuario maior de idade, permitido!";
  else return "Usuario menor de idade, não permitido";
};

console.log(verificarIdade(20));

*/

/*
function verificaPalindromo(string) {
  const stringInvertida = string.split("").reverse().join("");
  return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("ara")); // true
console.log(verificaPalindromo("Frase")); // false

*/

/*

EXERCICIO 4


compararNumeros = (a, b, c) => {
  if (a > b && a > c) {
    return "O maior número é o primeiro";
  } else if (b > a && b > c) {
    return "O maior número é o segundo";
  } else {
    return "O maior número é o terceiro";
  }
};

console.log(compararNumeros(10, 20, 30));


*/

calculaPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
  return `O resultado da potencia de ${base} elevado a ${expoente} é ${resultado}`;
};

const resultado = calculaPotencia(10, 3);

console.log(resultado);
