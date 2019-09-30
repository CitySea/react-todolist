import React, { Fragment, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import listContext from '../context/index'
import EditForm from '../components/edit-form'

function App () {
  const { state, dispatch } = useContext(listContext)
  const [popupStatus, setStatus] = useState(false)
  const [id, setId] = useState(0)
  const [content, setContent] = useState({ name: '', desc: '' })
  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <Fragment>
      <div className="box">
        <p className="small-title" style={{ display: state.length === 0 ? 'block' : 'none' }}>请先添加用户</p>
        <ul className="list">
          {
            state.map((item, index) => {
              return (
                <li className="flex flex-center" key={ index }>
                  <span>{ item.name }</span>
                  <Link to={{ pathname: `/test3/show/${index}` }}><i className="icon-pencil"></i></Link>
                  <i className="icon-pencil" onClick={ () => showPopup(Number(index), state, setId, setContent, setStatus) }></i>
                </li>
              )
            })
          }
        </ul>
        <p className="footer flex">
          <Link to="/" className="btn">返回首页</Link>
          <Link to={{ pathname: '/test3/show' }}><i className="icon-plus"></i></Link>
        </p>
      </div>
      {
        popupStatus === true
          ? <div className="popup">
            <EditForm content={ content } getContent={ getContent } >
              <div className="btn-box">
                <p className="btn cancel" onClick={ () => setStatus(false) }>取消</p>
                <p className="btn" onClick={ () => handleEdit(content, id, setStatus, dispatch)}>修改</p>
              </div>
            </EditForm>
          </div>
          : ''
      }
    </Fragment>
  )
}

const showPopup = (id, state, setId, setContent, setStatus) => {
  setId(id)
  setContent(state[id])
  setStatus(true)
}

const handleEdit = (content, id, setStatus, dispatch) => {
  dispatch({
    type: 'edit',
    id: id,
    item: content
  })
  setStatus(false)
}

export default App
