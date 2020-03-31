import React, { Component } from 'react'
import { Cabecalho } from '../../components/cabecalho'
import CursoCadastro from './cadastro'

export default class CursosScreen extends Component {




  render() {
    return (
      <div>
        <Cabecalho
          titulo="Cursos"
          subtitulo="cadastro de cursos"
        />
        <CursoCadastro />

      </div>
    )
  }
}