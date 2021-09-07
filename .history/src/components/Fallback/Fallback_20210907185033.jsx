import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

const styledLoading = styled(LinearProgress)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
`

function Fallback(props) {
  return <LinearProgress />
}
export default Fallback
