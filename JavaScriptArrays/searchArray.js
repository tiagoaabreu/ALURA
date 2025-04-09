const alunos = ["João", "Maria", "Pedro", "Ana"];

const medias = [10, 8, 7, 9];
//               []      []
const lista = [alunos, medias];

function exibeNotaAluno(aluno) {
  if (lista[0].includes(aluno)) {
    const indice = lista[0].indexOf(aluno);
    const mediaAluno = lista[1][indice];
    console.log(`A média do aluno ${aluno} tem a media ${mediaAluno}`);
  } else {
    console.log(`Aluno ${aluno} não encontrado`);
  }
}

exibeNotaAluno("João");

exibeNotaAluno("Tiago");
