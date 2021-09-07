import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledLoading = styled(LinearProgress)`
  /* position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  background-color: #00aefd !important;
`

function Fallback(props) {
  const loading = useSelector(state => state.app.loading)

  if (loading > 0) {
    return <StyledLoading color="secondary" />
  }

  // return null
  return <StyledLoading color="secondary" />
}
export default Fallback
