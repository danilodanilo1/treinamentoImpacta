import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper.min'
import 'font-awesome/css/font-awesome.min.css'
import { Menu } from './components/menu';
import Rotas from './components/rotas';








function App() {
  return (
    <div className="container">
      <Menu />
      <Rotas />
    </div>
  )
}

export default App;
