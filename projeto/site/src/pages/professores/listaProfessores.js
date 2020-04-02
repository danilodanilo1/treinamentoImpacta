import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  listarProfessores,
  limpar
} from '../../actions/professores'




const ListaProfessores = props => {
  const { listarProfessores } = props

  useEffect(() => {
    listarProfessores();
    limpar();
  }, [listarProfessores][limpar]);

  const exibirLinhas = () => {

    const lista = props.lista || []
    console.log(lista)
    return lista.map(professor => (
      <tr>
        <td>{professor.nome}</td>
        <td>{professor.especialidade}</td>
        <td>{professor.certificacoes}</td>
        <td>{professor.contato}</td>
      </tr >
    ))

  }

  return (
    <div>
      <h3>Lista de Professores</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
            <th>certificações</th>
            <th>contato</th>
          </tr>
        </thead>
        <tbody>
          {exibirLinhas()}
        </tbody>
      </table>
    </div>
  )
}
const mapStoreToProps = store => ({
  lista: store.professores.lista

})

const mapActionToProps = dispatch => bindActionCreators({
  listarProfessores
}, dispatch)


const conectado = connect(mapStoreToProps, mapActionToProps)(ListaProfessores)
export { conectado as ListaProfessores }