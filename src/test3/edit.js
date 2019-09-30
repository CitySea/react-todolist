import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import listContext from '../context/index'
import EditForm from '../components/edit-form'

const Edit = (props) => {
  const { state, dispatch } = useContext(listContext)
  const id = Number(props.match.params.id)
  const [content, setContent] = useState(state[id])

  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <EditForm content={ content } getContent={ getContent } >
      <div className="btn-box">
        <p className="btn cancel" onClick={ () => props.history.push('/test3/index') }>取消</p>
        <p className="btn delete" onClick={ () => handleDelete(id, props, dispatch) }>删除</p>
        <p className="btn" onClick={ () => handleEdit(content, id, props, dispatch) }>修改</p>
      </div>
    </EditForm>
  )
}

const handleDelete = (id, props, dispatch) => {
  dispatch({
    type: 'del',
    id: id
  })

  props.history.push('/test3/index')
}

const handleEdit = (content, id, props, dispatch) => {
  dispatch({
    type: 'edit',
    id: id,
    item: content
  })

  props.history.push('/test3/index')
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
