let matriculaAtiva = true;

function verificaMatriculaAtiva() {
  if (matriculaAtiva === true) {
    return matriculaAtiva
      ? "matrícula ativa no sistema"
      : "matrícula não está ativa";
  }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'
