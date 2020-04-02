import { combineReducers } from 'redux';
import contatoReducer from './contato';
import cursoReducer from './curso';
import professoresReducer from './professores';

const reducers = combineReducers({
  contato: contatoReducer,
  curso: cursoReducer,
  professores: professoresReducer
});

export default reducers;