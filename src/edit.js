import React, { useState } from 'react';

const Edit = (props) => {
  let id = Number(props.match.params.id);
  let item = JSON.parse(localStorage.getItem('user'))[id];
  let [user, setUser] = useState(item);
  
  return (
    <div className="box">
      <div className="input-item last flex flex-center">
        <input type="text" placeholder="请输入姓名" value={ user.name } onChange={ (e) => handleChange(e.target.value, user, setUser, 'name') } />
      </div>
      <div className="input-item flex flex-center">
        <input type="text" placeholder="随便写写" value={ user.desc } onChange={ (e) => handleChange(e.target.value, user, setUser, 'desc') } />
      </div>
      <div className="btn-box">
        <p className="btn small cancel" onClick={ () => props.history.push('/')}>取消</p>
        <p className="btn small delete" onClick={ () => handleCancel(id, props)}>删除</p>
        <p className="btn small" onClick={ () => handleEdit(user, id, props) }>修改</p>
      </div>
    </div>
  )
}

const handleChange = (val, item, setUser, type) => {
  const newVal  = Object.assign({}, item, { [type]: val} );

  setUser(newVal);
}

const handleCancel = (id, props) => {
  let store = JSON.parse(localStorage.getItem('user'));

  store.splice(id, 1);
  localStorage.setItem('user', JSON.stringify(store));
  props.history.push('/');
}

const handleEdit = (val, id, props) => {
  let store = JSON.parse(localStorage.getItem('user'));

  store.splice(id, 1, val);
  localStorage.setItem('user', JSON.stringify(store));
  props.history.push('/');
}

export default Edit;