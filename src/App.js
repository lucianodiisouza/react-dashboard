import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import MenuSuperior from './components/MenuSuperior'
import Resumo from './components/Resumo'
import Consultas from './components/Consultas'
import Faturamento from './components/Faturamento'

function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route exact path="/"  component={Resumo} />
              <Route path="/consultas" component={Consultas} />
              <Route path="/faturamento" component={Faturamento} />
            </Switch>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
