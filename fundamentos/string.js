const escola = "Cod3r"
// o indice do charAt comeca a contar a partir do zero
console.log(escola.charAt(4))// vai imprimir o valor r pois pedi o indice 4
console.log(escola.charAt(5)) //não vai achar nenhum valor pois não temos indice 5 na palavra Cod3r
console.log(escola.charCodeAt(3)) // vai buscar um valor na tabela UniCode
console.log(escola.indexOf('3')) // vai buscar em que indice o digito mencionado (3) se encontra

console.log(escola.substring(1)) // imprime a partir do indice que vc quiser
console.log(escola.substring(0,3)) // imprime do indice 0 ao 3

console.log('Escola '.concat(escola).concat('!')) //juntar string ou numero com uma constante mais um string
console.log(escola.replace(3, 'e')) // substitui o indice 3 por e ou pelo que vc definir 
console.log('Ana, Maria, Pedro'.split(',')) // separa com virgula dentro de um array