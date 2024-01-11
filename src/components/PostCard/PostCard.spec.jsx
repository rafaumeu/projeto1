import { render, screen } from '@testing-library/react'
import React from 'react'

import { PostCard } from '.'
import { postCardPropsMock } from './mock'

const props = postCardPropsMock
describe('<PostCard  />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />)
    expect(screen.getByAltText(props.title)).toHaveAttribute('src', props.cover)
    expect(screen.getByRole('heading', props.title)).toBeInTheDocument()
    expect(screen.getByText(props.body)).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
