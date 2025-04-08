const alunos = ["João", "Maria", "Pedro", "Ana"];

const medias = [10, 8, 7, 9];
//               []      []
const lista = [alunos, medias];

console.log(`
  a aluna da posição 1 é ${lista[0][1]}
  a nota dessa aluna é ${lista[1][1]}
  `);
