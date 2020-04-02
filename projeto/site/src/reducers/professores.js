const INITIAL_STATE = {
  nome: '',
  especialidade: '',
  contato: '',
  certificacoes: '',
  lista: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PROFESSORES_NOME': return { ...state, nome: action.valor }
    case 'PROFESSORES_ESPECIALIDADE': return { ...state, especialidade: action.valor }
    case 'PROFESSORES_CONTATO': return { ...state, contato: action.valor }
    case 'PROFESSORES_CERTIFICACOES': return { ...state, certificacoes: action.valor }
    case 'PROFESSOR_LISTAR': return { ...state, lista: action.valor }
    default: return state;
  }
}