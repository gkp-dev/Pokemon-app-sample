import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import SinglePokemon from './pages/SinglePokemon';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/pokemon/:id" exact component={SinglePokemon} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

