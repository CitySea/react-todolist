import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Show from './show';
import Edit from './edit';
import './assets/css/reset.css';
import './assets/css/style.css';


const Routers = () => (
  <Switch>
    <Route path='/' component={ Home } exact />
    <Route path='/show' component={ Show } exact />
    <Route path='/show/:id' component={ Edit } />
  </Switch>
)

ReactDOM.render((
  <HashRouter>
    <Routers />
  </HashRouter>
), document.getElementById('root'));