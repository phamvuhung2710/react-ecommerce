import React from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

const styledLoading = styled(LinearProgress)`
  position: fi
`

function Fallback(props) {
  return <LinearProgress />
}
export default Fallback
