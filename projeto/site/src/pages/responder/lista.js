import React from 'react';
import dateformat from 'dateformat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  listarContatos,
  contatoRespondido,
  limparForm
} from '../../actions/contato';

class ContatoAResponderLista extends React.Component {

  componentDidMount() {
    this.props.limparForm();
    this.props.listarContatos();
  }

  exibirLinhas() {
    const contatos = this.props.contatos || [];

    return contatos.map(contato => (
      <tr key={contato._id}>
        <td className="align-middle">{dateformat(contato.data, 'dd/mm/yyyy')}</td>
        <td className="align-middle">{contato.nome}</td>
        <td className="align-middle">{contato.email}</td>
        <td className="align-middle">{contato.assunto}</td>
        <td>
          <button className="btn btn-success mr-2"
            onClick={() => this.props.contatoRespondido(contato._id)}>
            <i className="fa fa-check"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <h3>Lista de Contatos</h3>
        {this.props.msgSucesso ?
          <div className="alert alert-success mt-1" role="alert">
            <strong>Parabéns</strong> {this.props.msgSucesso}
          </div>
          : null
        }

        {this.props.msgErro ?
          <div className="alert alert-danger mt-1" role="alert">
            <strong>Ops!</strong> {this.props.msgErro}
          </div>
          : null
        }
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Data</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Assunto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.exibirLinhas()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStoreToProps = store => ({
  contatos: store.contato.lista,
  msgSucesso: store.contato.msgSucesso,
  msgErro: store.contato.msgErro
});

const mapActionsToProps = dispatch => bindActionCreators({
  listarContatos,
  contatoRespondido,
  limparForm
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(ContatoAResponderLista)

export { conectado as ContatoAResponderLista }