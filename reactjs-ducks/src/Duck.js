import React from 'react'
import PropTypes from 'prop-types'

function Duck({onDeleteClick, firstName, lastName})
{
  return (
    <tr>
      <td>
        {firstName}
      </td>
      <td>
        {lastName}
      </td>
      <td>
        <button className="w3-btn w3-blue w3-ripple">
          <span className="glyphicon glyphicon-pencil"/>
        </button>
        <button className="w3-btn w3-red w3-ripple" onClick={onDeleteClick}>
          <span className="glyphicon glyphicon-trash"/>
        </button>
      </td>
    </tr>
  );
}

Duck.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired
}

export default Duck