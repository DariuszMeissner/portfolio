import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    position: 'absolute',
    zIndex: 3,
    top: 0
  }
}

const Overlay = ({ children }) => {
  return (
    <div className="overlay" style={style.container}>
      {children}
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.node.isRequired
}

export default Overlay
