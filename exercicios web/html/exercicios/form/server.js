const express = require('express') //estou importando uma requisição express
const app = express() //renomeei a constante de app para receber express
const bodyParser = require('body-parser') //body-parser vai pegar dados do require

app.use(bodyParser.urlencoded({ extended: true})) //bodyParser ele interpreta 

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário incluído com sucesso!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns, usuário alterado com sucesso!</h1>')
})

app.listen(3003)