const estudantes = require('./JSON/estudantes.json')

function orderna(lista,propriedade){
    return lista.sort((a ,b)=>{
        if(a[propriedade] < b[propriedade]){
            return -1
        }
        if(a[propriedade] > b[propriedade]){
            return 1
        }
        return 0
    })
}