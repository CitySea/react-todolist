import React, { useState } from 'react';

const Show = (props) => {
  let [name, setName] = useState('');
  let [desc, setDesc] = useState('');
  let [status, setStatus] = useState(false);
  
  return (
    <div className="box">
      <div className="input-item last flex flex-center">
        <input type="text" placeholder="请输入姓名" value={ name } onChange={ (e) => setName(e.target.value) } />
      </div>
      <div className="input-item flex flex-center">
        <input type="text" placeholder="随便写写" value={ desc } onChange={ (e) => setDesc(e.target.value) } />
      </div>
      <div className="btn-box"><p className="btn" onClick={ (e) => handleAdd(e, name, desc, setStatus, props) }>添加</p></div>
      <p className="tiles" style={{display: status === true ? 'block' : 'none'}}>添加成功，1s后将为您跳转...</p>
    </div>
  )
}

const handleAdd = (e, name, desc, setStatus, props) => {
  let store = localStorage.getItem('user');

  if (name === '' || desc === '') {
    alert ('请先输入姓名或描述！');
    return false;
  }
  store = store === null ? [] : JSON.parse(store);
  store.push({name: name, desc: desc});
  localStorage.setItem('user', JSON.stringify(store));
  setStatus(true);
  setTimeout(()=>{
    props.history.push('/');
  }, 1000)
}

export default Show;