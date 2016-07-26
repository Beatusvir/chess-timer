import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Button from '../src/components/button/button'

describe('button component', () => {
  it('renders a button element pressed', () => {
    const component = shallow(<Button pressed={true} />)

    expect(component.find('.pressed').length).to.equal(1)
  })
  it('renders a button element not-pressed', () => {
    const component = shallow(<Button pressed={false} />)

    expect(component.find('.not-pressed').length).to.equal(1)
  })
})