const alunos = ["João", "Maria", "Pedro", "Ana"];

const medias = [10, 8, 7, 9];
//               []      []
const lista = [alunos, medias];

function exibeNotaAluno(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista;
    const indice = alunos.indexOf(aluno);
    const mediaAluno = medias[indice];
    console.log(`A média do aluno ${aluno} tem a media ${mediaAluno}`);
  } else {
    console.log(`Aluno ${aluno} não encontrado`);
  }
}

exibeNotaAluno("João");
exibeNotaAluno("Tiago");
