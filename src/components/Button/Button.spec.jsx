import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn()
    render(<Button text='Load more' disabled={false} onClick={fn} />)
    const button = screen.getByRole('button', { name: /load more/i })
    expect.assertions(1)
    expect(button).toBeInTheDocument()
  })
  it('should call function on button click', () => {
    const fn = jest.fn()
    render(<Button text='Load more' onClick={fn} disabled={false} />)

    const button = screen.getByRole('button', { name: /load more/i })
    userEvent.click(button)

    expect(fn).toHaveBeenCalled()
  })
  it('should be disabled when disabled is true', () => {
    const fn = jest.fn()
    render(<Button text='Load more' disabled={true} onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i })

    expect(button).toBeDisabled()
  })
  it('should be enable when disabled is false', () => {
    const fn = jest.fn()
    render(<Button text='Load more' disabled={false} onClick={fn} />)

    const button = screen.getByRole('button', { name: /load more/i })

    expect(button).toBeEnabled()
  })
  it('should match snapshot', () => {
    const fn = jest.fn()
    const { container } = render(
      <Button text='Load more' disabled={false} onClick={fn} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
