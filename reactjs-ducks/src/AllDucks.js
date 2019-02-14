import React from 'react'
import PropTypes from 'prop-types'
import Duck from './Duck.js'

const AllDucks = ({ ducks, onDeleteClick }) => (
  <table  className="w3-table w3-bordered w3-striped">
    <tbody>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
      {ducks.map(duck =>
        <Duck key={duck.id} {...duck} onDeleteClick={() => onDeleteClick(duck.id)} />
      )}
    </tbody>
  </table>
)

AllDucks.propTypes = {
  ducks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default AllDucks