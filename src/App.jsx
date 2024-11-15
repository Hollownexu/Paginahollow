import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaInicio from './inicio/index';
import PaginaKnight from './knight/index';
import PaginaAvispon from './avispon/index';
import PaginaObjetos from './objetos/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/knight" element={<PaginaKnight />} />
        <Route path="/avispon" element={<PaginaAvispon />} />
        <Route path="/objetos" element={<PaginaObjetos />} />
      </Routes>
    </Router>
  );
}

export default App;
