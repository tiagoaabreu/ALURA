const estudante = {
    nome: "José",
    idade: 32,
    cpf: "01238826753",
    turma: "JavaScript",
    telefone: [],
    endereco :[{
        numero: '45',
        rua: 'Rua das Flores',
        complemento : 'Apto 101',
    }]
}

estudante.endereco.push({
    rua: "Abobora",
    numero : 71,
    complemento : "",
})

console.log(estudante.endereco) //
console.log(estudante.endereco[0]) 

const listaEnderecosComComplemento = estudante.endereco.filter(endereco => endereco.complemento)

console.log(listaEnderecosComComplemento) // [{rua: "Rua das Flores", numero: "45", complemento: "Apto 101"}]