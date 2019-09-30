import React, { useState } from 'react'
import PropTypes from 'prop-types'
import EditForm from '../components/edit-form'

const Edit = (props) => {
  const id = Number(props.match.params.id)
  let store = []
  if (props.location.state) {
    if (props.location.state.list) {
      store = JSON.parse(props.location.state.list)
    }
  }
  const [content, setContent] = useState(store[id])

  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <EditForm content={ content } getContent={ getContent } >
      <div className="btn-box">
        <p className="btn cancel" onClick={ () => props.history.replace({ pathname: '/test2/index', state: { list: JSON.stringify(store) } }) }>取消</p>
        <p className="btn delete" onClick={ () => handleDelete(id, props, store) }>删除</p>
        <p className="btn" onClick={ () => handleEdit(content, id, props, store) }>修改</p>
      </div>
    </EditForm>
  )
}

const handleDelete = (id, props, store) => {
  const list = store

  list.splice(id, 1)
  props.history.replace({
    pathname: '/test2/index',
    state: {
      list: JSON.stringify(list)
    }
  })
}

const handleEdit = (val, id, props, store) => {
  const list = store

  list.splice(id, 1, val)
  props.history.replace({
    pathname: '/test2/index',
    state: {
      list: JSON.stringify(list)
    }
  })
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      list: PropTypes.string
    })
  }),
  history: PropTypes.object.isRequired
}

export default Edit
