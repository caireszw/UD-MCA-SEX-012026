let carro = ['Onix', 'Azul', '4 Rodas','Hatch','Chevrolet','68000km', 'Sem Sinistro', 'Popular', 'Manual', 
    'Chave Presencial', 'Bancos de Tecido', 'Vidros eletricos', 'Ano 2025', 'Pneus Westlake', 'Multimdia','Luz de milha', 
    'Farol Xenon', 'Suspençaõ Independente', 'Economico', 'Flex', '1.0 Turbo']
    let res = carro.length 
    console.log(res)

    // elementos na posição 0 7 11 15 18 20
    console.log(carro[0])
    console.log(carro[7])
    console.log(carro[11])
    console.log(carro[15]) 
    console.log(carro[18]) 
    console.log(carro[20]) 

    // Elemento penultima e ultima posição
    console.log(`O elemento da penultima posição é ${carro[19]} e o da ultima posição é ${carro[20]}`) 
    
    //Quantos elementos tem no array
    console.log(`Existem ${res} elementos no array`)

    // adicionando mais um elemento ao array
    carro.push('Blindado')
    console.log(carro)

    // usando o for 
    for (let i = 0; i < carro.length; i++) {
    console.log(carro[i])
    }

