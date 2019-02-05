import React from 'react'
import PropTypes from 'prop-types'

function Todo({onTodoClick, onDeleteClick, completed, text, misc})
{
  return (
    <div style={{float: 'left', width: '100%'}}>
      <div style={{float: 'left', width: '25%'}}>
        <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
      </div>
      <div style={{float: 'left', width: '25%'}}>
        <span>{misc}</span>
      </div>
      <div style={{float: 'left', width: '25%'}}>
        <button onClick={onTodoClick}>Toggle</button>
      </div>
      <div style={{float: 'left', width: '25%'}}>
        <button onClick={onDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo