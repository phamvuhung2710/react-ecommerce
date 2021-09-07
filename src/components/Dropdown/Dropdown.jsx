import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './dropdown.style'
import useOutsideClick from 'src/hooks/useOutSideClick'

Dropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  titleValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

function Dropdown({
  onChange,
  value = '',
  title,
  options = [],
  titleValue = '',
  name = '',
  className,
  ...props
}) {
  const handleChange = value => {
    onChange && onChange(value)
  }

  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => setIsActive(isActive => !isActive)

  const selectRef = useRef(null)
  useOutsideClick(selectRef, () => {
    setIsActive(false)
  })

  const formatValueSelected = value => {
    if (name === 'month') {
      return value !== '' ? value + 1 : title
    }

    if (value === 'price:asc') {
      return 'Giá: Thấp đến cao'
    }

    if (value === 'price:desc') {
      return 'Giá: Cao đến thấp'
    }

    return value ? value : title
  }

  return (
    <S.Dropdown className={className}>
      <S.DropdownSelect onClick={handleToggle} ref={selectRef}>
        <S.DropdownSelected>{formatValueSelected(value)}</S.DropdownSelected>
        {isActive ? (
          <S.DropdownCaret src="/img/icons8-sort-up-64.png" />
        ) : (
          <S.DropdownCaret src="/img/icons8-sort-down-64.png" />
        )}
        {isActive && (
          <S.DropdownList>
            {options.map(option => (
              <S.DropdownItem
                key={option.value}
                onClick={() => handleChange(option.value)}
              >
                {option.name}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        )}
      </S.DropdownSelect>
    </S.Dropdown>
  )
}

export default Dropdown
