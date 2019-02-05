import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
    {todos.map(todo =>
      <Todo key={todo.id} {...todo} onTodoClick={() => onTodoClick(todo.id)} onDeleteClick={() => onDeleteClick(todo.id)} />
    )}
  </table>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    misc: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default TodoList