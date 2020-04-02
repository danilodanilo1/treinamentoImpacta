const INITIAL_STATE = {
  _id: '',
  codigo: 0,
  descricao: '',
  cargaHoraria: 0,
  preco: 0,
  categoria: 'INFORMATICA',
  lista: [],
  msgSucess: '',
  msgErro: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CURSO_LIMPAR_FORM': return { ...INITIAL_STATE, lista: state.lista }
    case 'CURSO_LISTAR': return { ...state, lista: action.valor }
    case 'CURSO_MSG_SUCESSO': return { ...state, msgSucess: action.valor }
    case 'CURSO_MSG_ERRO': return { ...state, msgErro: action.valor }
    case 'CURSO_ATUALIZA_CODIGO': return { ...state, codigo: action.valor }
    case 'CURSO_ATUALIZA_DESCRICAO': return { ...state, descricao: action.valor }
    case 'CURSO_ATUALIZA_CARGA_HORARIA': return { ...state, cargaHoraria: action.valor }
    case 'CURSO_ATUALIZA_PRECO': return { ...state, preco: action.valor }
    case 'CURSO_ATUALIZA_CATEGORIA': return { ...state, categoria: action.valor }
    case 'CURSO_SELECIONAR_EDICAO': return {
      ...state,
      _id: action.valor._id,
      codigo: action.valor.codigo,
      descricao: action.valor.descricao,
      cargaHoraria: action.valor.cargaHoraria,
      preco: action.valor.preco,
      categoria: action.valor.categoria,
    }
    default: return state;
  }
}