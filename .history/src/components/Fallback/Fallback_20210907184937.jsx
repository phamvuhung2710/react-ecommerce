import React from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from '@material-ui/core'

const styledLoading = styled(LinearProgress)

function Fallback(props) {
  return <LinearProgress />
}
export default Fallback
