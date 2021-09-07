import React from 'react'
import Header from 'src/components/Header/Header'
import PropTypes from 'prop-types'

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default MainLayout
