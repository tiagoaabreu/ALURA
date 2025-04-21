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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !=='function'){
        const texto = `a chave ${chave} tem o valor de ${estudante[chave]}`
        console.log(texto)
    }
}    