const estudanteReprovou = (notaFinal, faltas) => {
  if (notaFinal < 7 && faltas > 4) {
    return true;
  } else {
    return false;
  }
};

console.log(estudanteReprovou(6, 5));

console.log(estudanteReprovou(7, 5));

const ExibeNome = (nome) => nome;
// Arrow function pode ser usando dessa forma para ser mais compacto caso a função seja somente uma linha
