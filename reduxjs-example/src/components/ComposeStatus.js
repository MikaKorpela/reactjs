import React from 'react'
import PropTypes from 'prop-types'

const ComposeStatus = ({ onClick, isComposed}) => (
  <div
    onClick={onClick}
    style={{textDecoration: isComposed ? 'line-through' : 'none'}}
  >
    Composed
  </div>
)

ComposeStatus.propTypes = {
  onClick: PropTypes.func.isRequired,
  isComposed: PropTypes.bool.isRequired
}

export default ComposeStatus
