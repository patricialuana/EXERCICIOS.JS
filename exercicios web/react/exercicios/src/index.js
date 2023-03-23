import React from 'react' //importando o react e react dom que já foram baixados no package json
import ReactDOM from 'react-dom' // os 2 são sempre necessários 

// esse import é o que vc vai mandar para o browser

//import Primeiro from './componentes/Primeiro'                     AULA 2 DO CURSO
//import BomDia from './componentes/BomDia'                         AULA 3 DO CURSO

//import { BoaTarde, BoaNoite } from './componentes/Multiplos'      AULA 4 DO CURSO        

// import Saudacao from './componentes/Saudacao'                    AULA 5 E 6 DO CURSO

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// renderização para nossa pagina

ReactDOM.render(
    <div> 
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" sobrenome="Silva"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>

    </div>
    , document.getElementById('root')) //esse id 'root' foi copiado do index.html

