import React, { Component } from 'react'
import { Cabecalho } from '../../components/cabecalho'
import { ListaProfessores } from './listaProfessores'
import { FormProfessores } from './formProfessores'

export default class Professores extends Component {
  render() {
    return (
      <div>
        <Cabecalho
          titulo={'Professores'}
          subtitulo={'Conheça nossa equipe.'}
        />
        <FormProfessores />
        <ListaProfessores />

      </div>
    )
  }
}