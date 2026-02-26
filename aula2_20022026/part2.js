let onix = {
    nome:'Onix Lt' ,
    cor: 'Azul' ,
    preco: 'R$75.000',
    estoque: '1 '
}

console.log(onix.nome) // acessar  nome objeto
console.log(onix['preco']) // acessar preço do objeto 

onix.estoque = '80'// atualização de estoque 
console.log(onix.estoque) //mostrar o estoque 

console.log(onix) // imprimir as propriedades no console