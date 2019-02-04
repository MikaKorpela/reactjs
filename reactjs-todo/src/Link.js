import React from 'react'
import PropTypes from 'prop-types'

function Link({ active, children, onFilterClick })
{
  return (
    <button onClick={onFilterClick} disabled={active} style={{marginLeft: '4px',}}>
      {children}
    </button>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onFilterClick: PropTypes.func.isRequired
}

export default Link