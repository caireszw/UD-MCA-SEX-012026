let carros = [
   { nome: 'Onix', preco:'R$75.000', estoque: 5},
   { nome: 'Bmw120i', preco:'R$80.000', estoque: 1},
   { nome: 'Polo', preco: 'R$95.000', estoque: 3},
   { nome: 'Gol', preco: 'R$15.000', estoque: 1},
   { nome: 'Nivus', preco: 'R$105.000', estoque: 10},
   { nome: 'Jetta', preco: 'R$80.000', estoque: 1},
   { nome: 'Golf', preco: 'R$190.000', estoque: 2},
   { nome: 'Taos', preco: 'R$115.000', estoque: 15},
   { nome: 'Corolla', preco: 'R$130.000', estoque: 7},
   { nome: 'Virtus', preco: 'R$75.000', estoque: 4},
]

console.log(`O preço do carro ${carros[2].nome} é ${carros[2].preco}`) // Preço do segundo objeto
console.log(`O nome do terceiro objeto é ${carros[3].nome}`) // Nome do terceiro objeto
let res = carros.length // descobrir quantos itens tem no array
console.log(`Existem ${res} itens no array`) // mostrar no console quantos itens tem no array
console.log(carros) // imprimir objetos no console 

var soma = 0 // soma do estoque 
for(var i = 0; i<carros.length; i++ ){
    soma+= carros[i]['estoque']
}
   console.log(`A soma de todos os carro no estoque é ${soma}`) // exibir no console a soma

   console.log (`O objeto de maior estoque é o ${carros[7].nome} com ${carros[7].estoque} unidades em estoque`) // qual objeto possui o maior estoque 