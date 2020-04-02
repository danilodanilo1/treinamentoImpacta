import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CursosScreen from '../pages/cursos'
import { ContatoScreen } from '../pages/contato'
import { ResponderScreen } from '../pages/responder'
import Professores from '../pages/professores'




export default class Rotas extends Component {
  render() {
    return (
      <Switch>
        <Route path='/cursos' component={CursosScreen} />
        <Route path='/contato' component={ContatoScreen} />
        <Route path='/responder' component={ResponderScreen} />
        <Route path='/professores' component={Professores} />
        <Route path='*' component={CursosScreen} />
      </Switch>
    )
  }
}