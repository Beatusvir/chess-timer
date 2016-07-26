import { expect } from 'chai'
import { Map } from 'immutable'
import reducer from '../src/reducers/reducer'
import {
  START_MATCH,
  END_MATCH,
  TIMER_TICK }
from '../src/actions/types'

describe('reducer', () => {
  it('sets initial state', () => {
    const action = { type: 'SET_STATE' }
    const nextState = reducer(undefined, action)

    expect(nextState.toJS()).to.deep.equal({
      activePlayer: null,
      remainingTimePlayer1: '4:00',
      remainingTimePlayer2: '4:00',
      winner: null,
      matchInProgress: false
    })
  })

  it('handles start of the match', () => {
    const action = { type: START_MATCH }
    const nextState = reducer(undefined, action)

    expect(nextState.toJS()).to.deep.equal({
      activePlayer: null,
      remainingTimePlayer1: '4:00',
      remainingTimePlayer2: '4:00',
      winner: null,
      matchInProgress: true
    })
  })

  it('handles end of the match', () => {
    const action = { type: END_MATCH, winner: 1 }
    const nextState = reducer(undefined, action)

    expect(nextState.toJS()).to.deep.equal({
      activePlayer: null,
      remainingTimePlayer1: '4:00',
      remainingTimePlayer2: '4:00',
      winner: 1,
      matchInProgress: false
    })
  })

  it('handles timer tick when both @ 4:00', () => {
    const action = { type: TIMER_TICK }
    var currentState = Map({
      activePlayer: 1,
      remainingTimePlayer1: '4:00',
      remainingTimePlayer2: '4:00',
      winner: null,
      matchInProgress: true
    })
    var nextState = reducer(currentState, action)

    expect(nextState.toJS()).to.deep.equal({
      activePlayer: 1,
      remainingTimePlayer1: '3:59',
      remainingTimePlayer2: '4:00',
      winner: null,
      matchInProgress: true
    })
  })

  it('handles timer tick when a time is 0:01', () => {
    const action = { type: TIMER_TICK }
    var currentState = Map({
      activePlayer: 2,
      remainingTimePlayer1: '4:00',
      remainingTimePlayer2: '0:01',
      winner: null,
      matchInProgress: true
    })
    var nextState = reducer(currentState, action)

    expect(nextState.toJS()).to.deep.equal({
      activePlayer: 1,
      remainingTimePlayer1: '4:00',
      remainingTimePlayer2: '4:00',
      winner: 1,
      matchInProgress: false
    })
  })

})

