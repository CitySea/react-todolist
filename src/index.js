import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import listContext from './context/index'
import { initList, listReducer } from './reducer/index'
import Home from './home'
import TestApp1 from './test1/App'
import TestApp1Show from './test1/show'
import TestApp1Edit from './test1/edit'
import TestApp2 from './test2/App'
import TestApp2Show from './test2/show'
import TestApp2Edit from './test2/edit'
import TestApp3 from './test3/App'
import TestApp3Show from './test3/show'
import TestApp3Edit from './test3/edit'
import './assets/css/reset.css'
import './assets/css/style.css'

const Routers = () => {
  const [state, dispatch] = useReducer(listReducer, initList)

  return (
    <Switch>
      <Route path='/' component={ Home } exact />
      <Route path='/test1/index' component={ TestApp1 } />
      <Route path='/test1/show' component={ TestApp1Show } exact />
      <Route path='/test1/show/:id' component={ TestApp1Edit } />
      <Route path='/test2/index' component={ TestApp2 } />
      <Route path='/test2/show' component={ TestApp2Show } exact />
      <Route path='/test2/show/:id' component={ TestApp2Edit } />
      <listContext.Provider value={{ state, dispatch }}>
        <Route path='/test3/index' component={ TestApp3 } />
        <Route path='/test3/show' component={ TestApp3Show } exact />
        <Route path='/test3/show/:id' component={ TestApp3Edit } />
      </listContext.Provider>
    </Switch>
  )
}

ReactDOM.render((
  <HashRouter>
    <Routers />
  </HashRouter>
), document.getElementById('root'))
