import { Map } from 'immutable'
import {
  START_MATCH, END_MATCH, TIMER_TICK, PLAYER_CLICK, RESTART_MATCH, SET_STARTING_PLAYER
} from '../actions/actions'

const initialState = Map({
  activePlayer: null,
  remainingTimePlayer1: '4:00',
  remainingTimePlayer2: '4:00',
  winner: null,
  matchInProgress: false
})

function timerTick(state) {
  var activePlayer = state.get('activePlayer')
  var timePlayer1 = state.get('remainingTimePlayer1')
  var timePlayer2 = state.get('remainingTimePlayer2')
  if (+activePlayer === 1) {
    timePlayer1 = newTime(timePlayer1)
    if (timePlayer1 === '0:00') {
      return state.merge(Map({
        remainingTimePlayer1: '4:00',
        remainingTimePlayer2: '4:00',
        matchInProgress: false,
        activePlayer: 1,
        winner: 2
      }))
    }
    return state.merge(Map({
      remainingTimePlayer1: timePlayer1
    }))
  } else {
    timePlayer2 = newTime(timePlayer2)
    if (timePlayer2 === '0:00') {
      return state.merge(Map({
        remainingTimePlayer1: '4:00',
        remainingTimePlayer2: '4:00',
        matchInProgress: false,
        activePlayer: 1,
        winner: 1
      }))
    }
    return state.merge(Map({
      remainingTimePlayer2: timePlayer2
    }))
  }
}

function newTime(time) {
  var minutes = +time.substr(0, 1)
  var seconds = +time.substr(2, 2)

  if (seconds > 0) {
    seconds = seconds - 1
    seconds = seconds <= 9 ? '0' + seconds : seconds
    return `${minutes}:${seconds}`
  } else {
    seconds = +59
    if (minutes > 0) {
      minutes = minutes - 1
      return `${minutes}:${seconds}`
    } else {
      return '00:00'
    }
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RESTART_MATCH:
      return state.merge(initialState)
    case START_MATCH:
      return state.merge(Map({ matchInProgress: true }))
    case END_MATCH:
      return state.merge(Map({ matchInProgress: false, winner: action.winner }))
    case TIMER_TICK:
      var newState = timerTick(state)
      return state.merge(newState)
    case PLAYER_CLICK:
      return state.merge(Map({ activePlayer: +action.player === 1 ? 2 : 1 }))
    case SET_STARTING_PLAYER:
      return state.merge(Map({ matchInProgress: true, activePlayer: action.player }))
    default:
      return state;
  }
}