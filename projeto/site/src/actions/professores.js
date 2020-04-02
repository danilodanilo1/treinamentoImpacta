import axios from 'axios';
const URL = 'http://localhost:3200/api/professores';



export const setNome = e => ({
  type: 'PROFESSORES_NOME',
  valor: e.target.value
})

export const setEspecialidade = e => ({
  type: 'PROFESSORES_ESPECIALIDADE',
  valor: e.target.value
})

export const setContato = e => ({
  type: 'PROFESSORES_CONTATO',
  valor: e.target.value
})

export const setCertificacoes = e => ({
  type: 'PROFESSORES_CERTIFICACOES',
  valor: e.target.value
})

export const limpar = e => {
  if (e !== null && e !== undefined) {
    e.preventDefault();
  }
}
export const listarProfessores = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL);
      return dispatch({
        type: 'PROFESSOR_LISTAR',
        valor: response.data
      });
    } catch (error) {
      console.log(error);

    }
  }
}

export const adicionar = (e, nome, especialidade, contato, certificacoes) => {
  console.log(e)
  return async dispatch => {
    if (e !== null && e !== undefined) {
      e.preventDefault();
    }

    try {
      e.preventDefault();
      await axios.post(URL, { nome, especialidade, contato, certificacoes });
      dispatch(limpar());



      dispatch(listarProfessores());
    } catch (error) {
      console.log(error);

    }
  }
}

