import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const StickyElement = ({
  className = 'sticky-element',
  style = {
    bottom: 0,
    left: 0,
    right: 0,
  },
  children
}) => {
  return (
    <div
      style={style}
      className={className}>
        {children}
    </div>
  )
}

StickyElement.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default StickyElement