import React from 'react';

import './App.css';

import { Resultado } from './components/Resultado';
import { Votos } from './components/Votos';

function App() {
  return (
    <div>
      <Resultado /> <Votos />
    </div>
  );
}

export default App;
