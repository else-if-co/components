import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Modal = ({
  title,
  subtitle,
}) => {
  return (
    <div>
      <div>Title: {title}</div>
      <div>Subtitle: {subtitle}</div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Modal