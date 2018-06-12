import React from 'react'
import PropTypes from 'prop-types'

const Song = ({ onClick, isComposed, name }) => (
  <div
    onClick={onClick}
    style={{textDecoration: isComposed ? 'line-through' : 'none'}}
  >
    {name}
  </div>
)

Song.propTypes = {
  onClick: PropTypes.func.isRequired,
  isComposed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Song
