let valor // valor não atribuido vai gerar Undefined
console.log(valor)
// console.log(valor2) // vai gerar um erro is not undefined - valor não existe

valor = null //é diferente do Undefined pois null não aponta para nenhum local de memória
console.log(valor)

// console.log(valor.tostring())  vai gerar um erro, não devemos acessar um valor Null

const produto = {}
console.log(produto.preco) // nesse caso vai ser Undefined pois o preco não foi definido/atribuido
console.log(produto) // objeto {}

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, deixa o Java atribuir o que realmente é undefined
console.log(!!produto.preco) //boolean
console.log(produto)

produto.preco = null // sem preço ou preço zero
console.log(!!produto.preco)
console.log(produto)