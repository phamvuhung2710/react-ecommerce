import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

const StyledLoading = styled(LinearProgress)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
`

function Fallback(props) {
  return <StyledLoading color="secondary" />
}
export default Fallback
