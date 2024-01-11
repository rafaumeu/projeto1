import P from 'prop-types'
import React from 'react'
import './styles.css'
const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      type='search'
      value={searchValue}
      className='text-input'
      placeholder='Type your search'
      onChange={handleChange}
    />
  )
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}
export default TextInput
