const estudante = require ('./JSON/estudantes.json')

function buscaInformacao(lista,chave,valor){   
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInformacao(estudante,'nome','Izaak')

console.log(estudanteEncontrado)
