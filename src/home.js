import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  let store = localStorage.getItem('user');
  const [list, setList] = useState(store === null ? [] : JSON.parse(store));
  
  return (
    <div className="box">
      <p className="small-title" style={{display: list.length === 0 ? 'block' : 'none'}}>请先添加用户</p>
      <ul className="list">
        {
          list.map((item, index) => {
            return (
              <li className="flex flex-center" key={ index }>
                <span>{ item.name }</span><Link to={ `/show/${ index }` }><i className="icon-pencil"></i></Link>
              </li>
            )
          })
        }
        </ul>
        <p className="footer"><Link to="/show"><i className="icon-plus"></i></Link></p>
    </div>
  )
}

export default App;