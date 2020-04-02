import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  setNome,
  setEspecialidade,
  setContato,
  setCertificacoes,
  adicionar
} from '../../actions/professores'





const FormProfessores = props => {
  const {
    nome, setNome,
    especialidade, setEspecialidade,
    contato, setContato,
    certificacoes, setCertificacoes,
    adicionar

  } = props

  return (
    <div>
      <h3>Cadastre-se em nosso time.</h3>
      <form>
        <div className="form-group row">
          <label htmlFor="nome"
            className="col-sm-3 col-form-label">Nome:</label>
          <div className="col-sm-9">
            <input type="text"
              className="form-control" id="nome"
              value={nome}
              onChange={setNome} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="especialidade"
            className="col-sm-3 col-form-label">Especialidade:</label>
          <div className="col-sm-9">
            <input type="text"
              className="form-control" id="especialidade"
              value={especialidade}
              onChange={setEspecialidade} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="contato"
            className="col-sm-3 col-form-label">Contato:</label>
          <div className="col-sm-9">
            <input type="contato"
              className="form-control" id="contato"
              value={contato}
              onChange={setContato} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="certificacoes"
            className="col-sm-3 col-form-label">Certificações:</label>
          <div className="col-sm-9">
            <textarea className="form-control"
              id="certificacoes" rows="5"
              value={certificacoes}
              onChange={setCertificacoes} />
          </div>
        </div>
        <div className="form-group row">
          <button className="btn btn-primary ml-3 mb-3"
            onClick={(e) => adicionar(e, nome, especialidade, contato, certificacoes)}
          >
            Adicionar
                    </button>
          <button className="btn btn-secondary ml-3 mb-3"
          // onClick={'limparForm'}
          >
            Limpar
                    </button>
        </div>
      </form>
    </div>
  )
}

const mapStoreToProps = store => ({
  nome: store.professores.nome,
  especialidade: store.professores.especialidade,
  contato: store.professores.contato,
  certificacoes: store.professores.certificacoes
})

const mapActionToProps = dispatch => bindActionCreators({
  setNome,
  setEspecialidade,
  setContato,
  setCertificacoes,
  adicionar
}, dispatch)

const conectado = connect(mapStoreToProps, mapActionToProps)(FormProfessores);
export { conectado as FormProfessores }