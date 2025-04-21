const estudante = {
    nome: "José",
    idade: 32,
    cpf: "01238826753",
    turma: "JavaScript",
    telefone: ["4871264812748"],
    media : 7.5,
    estaAprovado : function (mediaBase){
        return this.media >= mediaBase ? true : false
    }
}
