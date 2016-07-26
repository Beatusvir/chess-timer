import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Player from '../src/components/player/player'

describe('player component', () => {
  it('renders an active player element', () => {
    const component = shallow(
      <Player
        currentTime="4:00"
        isActive={true}
        player={1}
        />
    )

    expect(component.find('.active').length).to.equal(1)
  })
  it('renders an inactive player element', () => {
    const component = shallow(
      <Player
        currentTime="4:00"
        isActive={false}
        player={1}
        />
    )

    expect(component.find('.not-active').length).to.equal(1)
  })
})