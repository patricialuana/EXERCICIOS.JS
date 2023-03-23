let isAtivo = false // variavel let foi alterada na linha 4
console.log(isAtivo) 

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //transformar um valor inteiro em Verdadeiro ou falso é só colocar negação duas vezes !! (2 pontos de exclamação)
console.log(!!isAtivo) // !! negação ele passa ser verdadeiro
console.log(!isAtivo) // uma negação ! só troca os valores de lugar

console.log('os verdadeiros...')
console.log(!!3) // numeros inteiros são verdadeiros
console.log(!!-1)
console.log(!!' ') //espaço vazio ou textos são verdadeiros
console.log(!!'texto')
console.log(!![]) // array representa valor verdadeiro
console.log(!!{}) // objeto é verdadeiro
console.log(!!Infinity) // infinity é verdadeiro
console.log(!!(isAtivo = true)) // indica que a a atribuição é true

console.log("os falsos...")
console.log(!!0) //zero é falso
console.log(!!'') //string vazia, sem espaço
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // indica que a a atribuição é false

console.log("pra finalizar") 
console.log(!!('' || null || 0 ||' ')) // puxa apenas o verdadeiro que é string com espaço

let nome= 'Lucas'
console.log(nome || 'desconhecido') // || significa ou