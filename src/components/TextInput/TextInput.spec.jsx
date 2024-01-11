import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import TextInput from '.'

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn()
    render(<TextInput searchValue={'testando'} handleChange={fn} />)
    const input = screen.getByPlaceholderText(/type your search/i)
    expect(input).toBeInTheDocument()
    expect(input.value).toBe('testando')
  })
  it('should call hadleChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<TextInput searchValue={'um valor qualquer'} handleChange={fn} />)
    const input = screen.getByPlaceholderText(/type your search/i)

    const value = 'o valor'

    userEvent.type(input, value)
    expect(input.value).toBe('um valor qualquer')
    expect(fn).toHaveBeenCalledTimes(value.length)
  })
  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(
      <TextInput searchValue={''} handleChange={fn} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
