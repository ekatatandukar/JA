import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('placeholder test', () => {
    render(<Home />)

    expect(true).toBeTruthy()
  })
})
