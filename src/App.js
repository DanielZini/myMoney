import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movimentacoes from './pages/Movimentacoes';

import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/movimentacoes/:data' component={Movimentacoes} />
      </div>
    </Router>
  );
}

export default App;