import axios from 'axios';
import { limpar } from './curso';
const URL = 'http://localhost:3200/api/contato';

export const setData = e => ({
  type: 'CONTATO_ATUALIZA_DATA',
  valor: e.target.value
});

export const setNome = e => ({
  type: 'CONTATO_ATUALIZA_NOME',
  valor: e.target.value
});

export const setEmail = e => ({
  type: 'CONTATO_ATUALIZA_EMAIL',
  valor: e.target.value
});

export const setAssunto = e => ({
  type: 'CONTATO_ATUALIZA_ASSUNTO',
  valor: e.target.value
});

export const limparForm = e => {
  if (e) e.preventDefault();
  return { type: 'CONTATO_LIMPAR_FORM' }
}

export const adicionar = (e, data, nome, email, assunto) => {
  return async (dispatch) => {
    if (e) e.preventDefault();

    if (data === '' || data === undefined
      || nome === '' || nome === undefined
      || email === '' || email === undefined
      || assunto === '' || assunto === undefined) {

      return dispatch({
        type: 'CONTATO_MSG_ERRO',
        valor: 'Favor preencher todos os campos'
      });
    }

    try {
      await axios.post(URL, { data, nome, email, assunto });
      dispatch(limparForm());
      return dispatch({
        type: 'CONTATO_MSG_SUCESSO',
        valor: 'Contato enviado com sucesso, aguarde retorno por email'
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: 'CONTATO_MSG_ERRO',
        valor: 'Erro ao enviar contato, tente novamente'
      });
    }
  }
}

export const listarContatos = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL);
      return dispatch({
        type: 'CONTATO_LISTAR',
        valor: response.data
      })
    } catch (error) {
      console.log(error)
      return dispatch({
        type: 'CONTATO_MSG_ERRO',
        valor: 'Erro ao listar contatos, tente novamente'
      });
    }
  }
}

export const contatoRespondido = _id => {
  return async dispatch => {
    try {
      if (window.confirm('O Contato selecionado foi realmente respondido?')) {
        await axios.delete(URL + '/' + _id)
        dispatch(listarContatos());
        return dispatch({
          type: 'CONTATO_MSG_SUCESSO',
          valor: 'Contato respondido com sucesso'
        });
      }
    } catch (error) {
      console.log(error)
      return dispatch({
        type: 'CONTATO_MSG_ERRO',
        valor: 'Erro ao deletar contato, tente novamente'
      });
    }
  }
}