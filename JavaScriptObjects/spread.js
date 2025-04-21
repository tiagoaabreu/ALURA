const estudante = {
    nome: "José",
    idade: 32,
    cpf: "01238826753",
    turma: "JavaScript",
    telefone: [],
    enderecos :[{
        numero: '45',
        rua: 'Rua das Flores',
        complemento : 'Apto 101',
    },
    {
        rua: "Abobora",
        numero : 71,
        complemento : "",
    }
    ]
}

function exibirTelefones (telefone1,telefone2){
    console.log(`Ligar para ${telefone1}`)
    console.log(`e o telefone 2 é ${telefone2}`)
}

exibirTelefones(...estudante.telefone)