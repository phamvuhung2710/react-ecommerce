import React from 'react'
import PropTypes from 'prop-types'

RegisterLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function RegisterLayout({ children, title }) {
  return (
    <div>
      {/* <HeaderRegister title={title} /> */}
      {children}
    </div>
  )
}

export default RegisterLayout
