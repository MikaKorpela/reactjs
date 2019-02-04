import React from 'react'
import PropTypes from 'prop-types'

function DeleteButton({onDeleteClick})
{
  return (
    <li onClick={onDeleteClick}>
      Delete
    </li>
  );
}

DeleteButton.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
}

export default DeleteButton