import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import EditForm from '../components/edit-form'

function App () {
  const store = localStorage.getItem('user')
  const [list, setList] = useState(store === null ? [] : JSON.parse(store))
  const [popupStatus, setStatus] = useState(false)
  const [id, setId] = useState(0)
  const [content, setContent] = useState({})

  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <Fragment>
      <div className="box">
        <p className="small-title" style={{ display: list.length === 0 ? 'block' : 'none' }}>请先添加用户</p>
        <ul className="list">
          {
            list.map((item, index) => {
              return (
                <li className="flex flex-center" key={ index }>
                  <span>{ item.name }</span>
                  <Link to={ `/test1/show/${index}` }><i className="icon-pencil"></i></Link>
                  <i className="icon-pencil" onClick={ () => showPopup(Number(index), list, setId, setContent, setStatus) }></i>
                </li>
              )
            })
          }
        </ul>
        <p className="footer flex">
          <Link to="/" className="btn">返回首页</Link>
          <Link to="/test1/show"><i className="icon-plus"></i></Link>
        </p>
      </div>
      {
        popupStatus === true
          ? <div className="popup">
            <EditForm content={ content } getContent={ getContent } >
              <div className="btn-box">
                <p className="btn cancel" onClick={ () => setStatus(false) }>取消</p>
                <p className="btn" onClick={ () => handleEdit(content, id, list, setList, setStatus)}>修改</p>
              </div>
            </EditForm>
          </div>
          : ''
      }
    </Fragment>
  )
}

// 显示弹窗
const showPopup = (id, list, setId, setContent, setStatus) => {
  setId(id)
  setContent(list[id])
  setStatus(true)
}

// 修改
const handleEdit = (content, id, list, setList, setStatus) => {
  const newList = list
  newList.splice(id, 1, content)

  setList(newList)
  localStorage.setItem('user', JSON.stringify(newList))
  setStatus(false)
}

export default App
