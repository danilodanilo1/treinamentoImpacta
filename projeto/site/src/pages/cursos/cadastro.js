import React from 'react';
import { CursoForm } from './form';
import { CursosLista } from './list';
import { connect } from 'react-redux';

class CursoCadastro extends React.Component {
  render() {
    return (
      <div>
        {this.props.msgSucesso ?
          <div className="alert alert-success" role="alert">
            <strong>Parabéns</strong> {this.props.msgSucesso}
          </div>
          : null
        }

        {this.props.msgErro ?
          <div className="alert alert-danger" role="alert">
            <strong>Ops!</strong> {this.props.msgErro}
          </div>
          : null
        }
        <div className="row border-bottom">
          <div className="col-md-6">
            <CursoForm />
          </div>
          <div className="col-md-6">
            <CursosLista />
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  msgSucesso: store.curso.msgSucess,
  msgErro: store.curso.msgErro
})

const conectado = connect(mapStoreToProps, null)(CursoCadastro);
export { conectado as CursoCadastro };