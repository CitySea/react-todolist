import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EditForm from '../components/edit-form'

const Show = (props) => {
  const [content, setContent] = useState({ name: '', desc: '' })
  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <EditForm content={ content } getContent={ getContent } >
      <div className="btn-box"><p className="btn" onClick={ () => handleAdd(content, props) }>添加</p></div>
    </EditForm>
  )
}

const handleAdd = (val, props) => {
  let store = localStorage.getItem('user')
  store = store === null ? [] : JSON.parse(store)
  store.push(val)
  localStorage.setItem('user', JSON.stringify(store))
  props.history.push('/test1/index')
}

Show.propTypes = {
  history: PropTypes.object.isRequired
}

export default Show
