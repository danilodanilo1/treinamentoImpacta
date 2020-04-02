import React from 'react';
import { Cabecalho } from '../../components/cabecalho';
import { ContatoAResponderLista } from './lista';


export const ResponderScreen = _ => (
  <div className="container">
    <Cabecalho titulo="Responder" subtitulo="Responder contatos" />
    <ContatoAResponderLista />
  </div>
);