import * as React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './Componentes/Header';
import Main from './Componentes/Main';
export default function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
