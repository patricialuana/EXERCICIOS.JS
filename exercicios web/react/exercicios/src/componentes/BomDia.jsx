// no exemplo abaixo eu poderia colocar o h1 e o h2 dentro de uma div, porém no html gerado
// eu não quero elementos envolvendo o h1 e o h2, então faço dessa forma:

import React from 'react' //importo o fragment junto com o react e faço dessa forma:
//export default props => 
//<React.Fragment> 
//<h1>Bom dia {props.nome}!</h1>
//<h2>Até breve!</h2>
//</React.Fragment>

// outra possibilidade é colocar dentro de um array separado por virgula
// usa-se key (chave) quando vc quer colocar elementos dentros de um array []
export default props => [
<h1 key='h1'>Bom dia {props.nome}!</h1>,
<h2 key='h2'>Até breve!</h2>
]


