import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'

function UnauthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()
  if (authenticated) {
    return <Redirect to={path.home} />
  }
  return <>{children}</>
}

UnauthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default UnauthenticatedGuard
