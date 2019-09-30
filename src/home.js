import React from 'react'
import { Link } from 'react-router-dom'

function App () {
  const list = [
    { name: '采用localStorage传值', url: '/test1/index' },
    { name: '采用url传值', url: '/test2/index' },
    { name: '采用useContext，useReducer', url: '/test3/index' }
  ]
  return (
    <div>
      <p className="show-title">这次主要在纠结页面间的传值，后面用了useReducer，就没用reduex。</p>
      <ul className="flex show-select">
        {
          list.map((item, index) => {
            return (
              <li key={ index }><Link to={ item.url }>{ item.name }</Link></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
