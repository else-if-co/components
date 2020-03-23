import { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import PropTypes from 'prop-types'
import './styles.css'

const Modal = ({
  title,
  subtitle,
}) => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {title}
      {subtitle}
      Count: {counter}

      <button
        onClick={() => setCounter(counter + 1)}>
          Add
      </button>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Modal