import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Clock from '../src/components/clock/clock'

describe('clock component', () => {
  it('renders a clock element with correct timing', () => {
    const component = shallow(
      <Clock currentTime="4:00" />
    )

    expect(component.find('.clock').length).to.equal(1)
    expect(component.find('.clock').childAt(0).text()).to.equal('4:00')      
  })
})