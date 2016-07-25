import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument, scryRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils'
import Clock from '../src/components/clock/clock'

describe('clock component', function(){
  it('renders a clock element with correct timing', function(){
    const component = renderIntoDocument(
      <Clock
        currentTime="4:00"
        />
    )

    const clockComponent = scryRenderedDOMComponentsWithClass(component, 'clock')

    expect(clockComponent.length).to.equal(1)
    expect(clockComponent[0].textContent).to.equal('4:00')
  })
})