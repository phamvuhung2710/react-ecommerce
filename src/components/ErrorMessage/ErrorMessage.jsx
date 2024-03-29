import React from 'react'
import PropTypes from 'prop-types'
import { Message } from './errorMessage.style'

function ErrorMessage({ errors, name }) {
  const error = errors[name]
  return <Message>{error && error.message}</Message>
}

ErrorMessage.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string
}

export default ErrorMessage
