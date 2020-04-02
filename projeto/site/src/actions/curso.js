import axios from 'axios';
const URL = 'http://localhost:3200/api/cursos';

export const listarCursos = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL);
      return dispatch({
        type: 'CURSO_LISTAR',
        valor: response.data
      });
    } catch (error) {
      console.log(error);
      return dispatch(showErrorMsg('Erro ao listar cursos'));
    }
  }
}

const showSuccessMsg = msg => ({
  type: 'CURSO_MSG_SUCESSO',
  valor: msg
})

const showErrorMsg = msg => ({
  type: 'CURSO_MSG_ERRO',
  valor: msg
})

export const removerCurso = (_id) => {
  return async dispatch => {
    try {
      if (window.confirm('Confirma a remoção do curso selecionado?')) {
        await axios.delete(URL + '/' + _id);
        dispatch(listarCursos());
        return dispatch(showSuccessMsg('Curso deletado com sucesso'));
      }
    } catch (error) {
      console.log(error);
      return dispatch(showErrorMsg('Erro ao deletar curso'));
    }
  }
}

export const editarCurso = curso => ({
  type: 'CURSO_SELECIONAR_EDICAO',
  valor: curso
})

export const setCodigo = e => ({
  type: 'CURSO_ATUALIZA_CODIGO',
  valor: e.target.value
});

export const setDescricao = e => ({
  type: 'CURSO_ATUALIZA_DESCRICAO',
  valor: e.target.value
});

export const setCargaHoraria = e => ({
  type: 'CURSO_ATUALIZA_CARGA_HORARIA',
  valor: e.target.value
});

export const setPreco = e => ({
  type: 'CURSO_ATUALIZA_PRECO',
  valor: e.target.value
});

export const setCategoria = e => ({
  type: 'CURSO_ATUALIZA_CATEGORIA',
  valor: e.target.value
});

export const limpar = e => {
  if (e !== null && e !== undefined) {
    e.preventDefault();
  }

  return { type: 'CURSO_LIMPAR_FORM' }
}

export const adicionar = (e, _id, codigo, descricao, cargaHoraria, preco, categoria) => {

  return async dispatch => {
    if (e !== null && e !== undefined) {
      e.preventDefault();
    }

    if (codigo === 0 || codigo === undefined
      || descricao === '' || descricao === undefined
      || cargaHoraria === 0 || cargaHoraria === undefined
      || preco === 0 || preco === undefined
      || categoria === '' || categoria === undefined) {

      return dispatch(showErrorMsg('favor preencher todos os campos.'));
    }

    if (cargaHoraria < 4) {
      return dispatch(showErrorMsg('carga horária não pode ser menor que 4.'));
    }

    if (preco < 0) {
      return dispatch(showErrorMsg('preço não pode ser menor que zero.'));
    }

    try {
      let msg = ''
      if (_id && _id !== '') {
        await axios.put(URL + '/' + _id, { _id, codigo, descricao, cargaHoraria, preco, categoria });
        msg = 'Curso atualizado com sucesso.';
      } else {
        await axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria });
        msg = 'Curso cadastrado com sucesso.';
      }

      dispatch(limpar());
      dispatch(listarCursos());
      return dispatch(showSuccessMsg(msg));
    } catch (error) {
      console.log(error);

      let msgErro
      if (_id && _id !== '') {
        msgErro = 'atualizar';
      } else {
        msgErro = 'cadastrar';
      }

      return dispatch(showErrorMsg(`Ocorreu erro ao ${msgErro} Curso, tente novamente ou entre em contato.`));
    }
  }
}