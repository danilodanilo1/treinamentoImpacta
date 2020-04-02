import dateformat from 'dateformat'

const INITIAL_STATE = {
  data: dateformat(new Date(), 'yyyy-mm-dd'),
  nome: '',
  email: '',
  assunto: '',
  msgSucesso: null,
  msgErro: null,
  lista: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CONTATO_ATUALIZA_DATA': return { ...state, data: action.valor }
    case 'CONTATO_ATUALIZA_NOME': return { ...state, nome: action.valor }
    case 'CONTATO_ATUALIZA_EMAIL': return { ...state, email: action.valor }
    case 'CONTATO_ATUALIZA_ASSUNTO': return { ...state, assunto: action.valor }
    case 'CONTATO_LIMPAR_FORM': return INITIAL_STATE;
    case 'CONTATO_MSG_SUCESSO': return { ...state, msgSucesso: action.valor }
    case 'CONTATO_MSG_ERRO': return { ...state, msgErro: action.valor }
    case 'CONTATO_LISTAR': return { ...state, lista: action.valor }
    default: return state;
  }
}