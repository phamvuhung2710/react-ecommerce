import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { path } from 'src/constants/path'
import { useAuthenticated } from 'src/hooks/useAuthenticated'

function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()
  if (!authenticated) {
    return <Redirect to={path.login} />
  }
  return <>{children}</>
}

AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default AuthenticatedGuard
