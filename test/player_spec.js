import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import { renderIntoDocument, scryRenderedDOMComponentsWithClass, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils'
import Player from '../src/components/player/player'

describe('player component', function(){
  it('renders an active player element', function(){
    const component = renderIntoDocument(
      <Player
        currentTime="4:00"
        isActive={true}
        player={1}
        />
    )

    const playerComponent = scryRenderedDOMComponentsWithClass(component,'player active')

    expect(playerComponent.length).to.equal(1)
    expect(playerComponent)
  })
  it('renders an inactive player element', function(){
    const component = renderIntoDocument(
      <Player
        currentTime="4:00"
        isActive={false}
        player={1}
        />
    )

    const playerComponent = scryRenderedDOMComponentsWithClass(component,'player not-active')

    expect(playerComponent.length).to.equal(1)
  })
})