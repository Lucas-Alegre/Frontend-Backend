import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../src/Componentes/Nav/Nav';
import LandingPage from '../src/Componentes/LandingPage/LandingPage';
import Home from '../src/Componentes/Home/Home';
import TurismoCreate from '../src/Componentes/TurismoCreate/TurismoCreate';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Nav} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/otrohome" component={Home} />
        <Route exact path="/TurismoCreate" component={TurismoCreate} />
        <h1>Henry Countries</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
