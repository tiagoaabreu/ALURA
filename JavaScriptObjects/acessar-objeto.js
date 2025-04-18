const objPessoa = {
  nome: "José",
  idade: 32,
  cpf: "123.456.789-00",
  turma: "javascript",
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
  return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(objPessoa, "cpf"));
console.log(exibeInfoEstudante(objPessoa, "nome"));

