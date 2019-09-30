import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import EditForm from '../components/edit-form'
import listContext from '../context/index'

const Show = (props) => {
  const { dispatch } = useContext(listContext)
  const [content, setContent] = useState({ name: '', desc: '' })
  const getContent = (val, type) => {
    const newVal = Object.assign({}, content, { [type]: val })

    setContent(newVal)
  }

  return (
    <EditForm content={ content } getContent={ getContent } >
      <div className="btn-box"><p className="btn" onClick={ () => handleAdd(content, dispatch, props) }>添加</p></div>
    </EditForm>
  )
}

const handleAdd = (val, dispatch, props) => {
  dispatch({
    type: 'add',
    item: val
  })
  props.history.push('/test3/index')
}

Show.propTypes = {
  history: PropTypes.object.isRequired
}

export default Show
