import React from 'react'
import PropTypes from 'prop-types'
import * as S from './select.style'

Select.propTypes = {
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

function Select({
  onChange,
  value = '',
  title,
  options = [],
  titleValue = '',
  ...props
}) {
  const handleChange = event => {
    const value = event.target.value
    onChange && onChange(value)
  }
  return (
    <S.CustomSelect>
      {/* <S.Select onChange={handleChange} value={value} {...props}>
        <option disabled value={titleValue}>
          {title}
        </option>
        {options.map(({ name, value }, index) => (
          <option value={value} key={index}>
            {name}
          </option>
        ))}
      </S.Select> */}

      <div className="dropdown" id="lightdropdown">
        <div className="dropdown-select">
          <span className="dropdown-selected">Option A</span>
          <i className="fa fa-angle-down dropdown-caret" />
        </div>
        <ul className="dropdown-list">
          <li className="dropdown-item" data-value="Option A">
            Option A
          </li>
          <li className="dropdown-item" data-value="Option B">
            Option B
          </li>
          <li className="dropdown-item" data-value="Option C">
            Option C
          </li>
        </ul>
      </div>
    </S.CustomSelect>
  )
}

export default Select
