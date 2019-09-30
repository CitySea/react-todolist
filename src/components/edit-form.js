import React from 'react'
import PropTypes from 'prop-types'

const EditForm = (props) => {
  return (
    <div className="box">
      <div className="input-item last flex flex-center">
        <input type="text" placeholder="请输入姓名" value={ props.content.name } onChange={ (e) => props.getContent(e.target.value, 'name') } />
      </div>
      <div className="input-item flex flex-center">
        <input type="text" placeholder="随便写写" value={ props.content.desc } onChange={ (e) => props.getContent(e.target.value, 'desc') } />
      </div>
      { props.children }
    </div>
  )
}

EditForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  getContent: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}

export default EditForm
