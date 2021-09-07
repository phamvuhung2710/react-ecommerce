 import React from 'react'
import PropTypes from 'prop-types'
import * as S from './popover.style'

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

function Popover({ active, children }) {
  return (
    <>
      {active && (
        <S.Drawer>
          {/* <S.PopoverArrow /> */}
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </>
  )
}

export default Popover
