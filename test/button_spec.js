import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument, scryRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils'
import Button from '../src/components/button/button'

describe('button component', function(){
  it('renders a button element pressed', function(){
    const component = renderIntoDocument(
      <Button
        pressed={true}
        />
    )

    const buttonComponent = scryRenderedDOMComponentsWithClass(component, 'button-player pressed')

    expect(buttonComponent.length).to.equal(1)
  })
    it('renders a button element not-pressed', function(){
    const component = renderIntoDocument(
      <Button
        pressed={false}
        />
    )

    const buttonComponent = scryRenderedDOMComponentsWithClass(component, 'button-player not-pressed')

    expect(buttonComponent.length).to.equal(1)
  })
})