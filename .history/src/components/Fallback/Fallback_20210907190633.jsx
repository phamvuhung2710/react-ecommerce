import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledLoading = styled(LinearProgress)`
  position: fixed !important;
  top: 0px;
  left: 0;
  right: 0;
  margin-top: 10px;
  background-color: #00aefd !important;
  z-index: 9999999;
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
