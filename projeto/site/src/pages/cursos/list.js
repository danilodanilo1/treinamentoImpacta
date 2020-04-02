import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  listarCursos,
  removerCurso,
  editarCurso
} from '../../actions/curso'

const CursosLista = props => {
  const { listarCursos, removerCurso, editarCurso } = props;

  useEffect(() => {
    listarCursos();
  }, [listarCursos]);

  const exibirLinhas = () => {
    const cursos = props.cursos || [];
    console.log(cursos)

    return cursos.map(curso => (
      <tr key={curso._id}>
        <td className="align-middle">{curso.codigo}</td>
        <td className="align-middle">{curso.descricao}</td>
        <td>
          <button className="btn btn-success mr-2"
            onClick={() => editarCurso(curso)}>
            <i className="fa fa-check"></i>
          </button>
          <button className="btn btn-danger"
            onClick={() => removerCurso(curso._id)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <h3>Lista de Cursos</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Ações</th>
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
  cursos: store.curso.lista
});

const mapActionsToProps = dispatch => bindActionCreators({
  listarCursos,
  removerCurso,
  editarCurso
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(CursosLista);

export { conectado as CursosLista };