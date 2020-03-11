import React from 'react';
import './App.css';

import MenuSuperior from './components/MenuSuperior'
import Resumo from './components/Resumo'
import Consultas from './components/Consultas'
import Faturamento from './components/Faturamento'

function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="container-fluid">
        <Resumo />
        <Consultas />
        <Faturamento />
      </div>

    </div>
  );
}

export default App;
