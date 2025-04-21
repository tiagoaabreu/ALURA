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

const chavesObjetos = Object.keys(estudante)

console.log(chavesObjetos)

if (!chavesObjetos.includes("endereco")) {
    console.error("A chave endereco não existe")
}