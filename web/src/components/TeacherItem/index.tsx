import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/66795134?s=460&v=4" alt=""/>
            <div>
            <strong>Luis Moraes</strong>
            <span>Química</span>
            </div>
        </header>

        <p>
        Dev. buscando constante evolução para desenvolver sistemas capazes de resolver problemas do mundo real com objetivo de gerar valor para pessoas e empresas.
        </p>
        <footer>
          <p>
            Preço/hora 
            <strong>R$ 20,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato      
          </button>
        </footer>     
      </article>
    )
}

export default TeacherItem