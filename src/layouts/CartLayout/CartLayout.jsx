import React from 'react'
import PropTypes from 'prop-types'
import Header from 'src/components/Header/Header'
// import HeaderCard from 'src/components/HeaderCard/HeaderCard'

CartLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function CartLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default CartLayout
