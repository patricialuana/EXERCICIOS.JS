const valores = [7.7, 8.9, 6.3, 9.2]// array separados por virgula
console.log(valores[0], valores[3])
console.log(valores[4]) // indice não existente
console.log(valores) // valores que estão dentro do array
console.log(valores.length) // quantidade de elementos dentro do array

valores.push({id: 3}, false, null, 'teste') // pode misturar coisas dentro de um array mas não é viavel
// valores, objeto, false, null, texto
console.log(valores)

console.log(valores.pop()) //vai imprimir apenas o ultimo valor do array

delete valores[0] //vai deletar o indice que desejar
console.log(valores)

console.log(typeof valores)