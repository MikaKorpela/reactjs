import React from 'react'
import PropTypes from 'prop-types'
import Duck from './Duck.js'

const AllDucks = ({ ducks, onUpdateClick, onDeleteClick }) => (
  <table>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </tr>
    {ducks.map(duck =>
      <Duck key={duck.id} {...duck} onUpdateClick={() => onUpdateClick(duck.id)} onDeleteClick={() => onDeleteClick(duck.id)} />
    )}
  </table>
)

TodoList.propTypes = {
  ducks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default AllDucks