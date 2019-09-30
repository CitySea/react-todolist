import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EditForm from '../components/edit-form'

const Edit = (props) => {
  const id = Number(props.match.params.id)
  const item = JSON.parse(localStorage.getItem('user'))[id]
  const [content, setContent] = useState(item)

  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <EditForm content={ content } getContent={ getContent } >
      <div className="btn-box">
        <p className="btn cancel" onClick={ () => props.history.push('/test1/index') }>取消</p>
        <p className="btn delete" onClick={ () => handleDelete(id, props) }>删除</p>
        <p className="btn" onClick={ () => handleEdit(content, id, props) }>修改</p>
      </div>
    </EditForm>
  )
}

const handleDelete = (id, props) => {
  const store = JSON.parse(localStorage.getItem('user'))

  store.splice(id, 1)
  localStorage.setItem('user', JSON.stringify(store))
  props.history.push('/test1/index')
}

const handleEdit = (val, id, props) => {
  const store = JSON.parse(localStorage.getItem('user'))

  store.splice(id, 1, val)
  localStorage.setItem('user', JSON.stringify(store))
  props.history.push('/test1/index')
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  history: PropTypes.object.isRequired
}

export default Edit
