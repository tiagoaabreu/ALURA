const estudante = require('./JSON/aluno.json');

const stringEstudante = JSON.stringify(estudante);  

const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante)

