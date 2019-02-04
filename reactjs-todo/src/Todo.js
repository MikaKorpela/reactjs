import React from 'react'
import PropTypes from 'prop-types'

// const Todo = ({ onClick, completed, text }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//   >
//     {text}
//   </li>
// )

function Todo({onTodoClick, completed, text})
{
  return (
    <li onClick={onTodoClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  );
}

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo