import * as ActionTypes from './types'

export const restartMatch = {
  type: ActionTypes.RESTART_MATCH
}

export const startMatch = {
  type: ActionTypes.START_MATCH
}

export const endMatch = (winner) => {
  return {
    type: ActionTypes.END_MATCH,
    winner
  }
}

export const timerTick = {
  type: ActionTypes.TIMER_TICK
}

export const playerClick = (player) => {
  return {
    type: ActionTypes.PLAYER_CLICK,
    player
  }
}

export const setStartingPlayer = (player) => {
  return {
    type: ActionTypes.SET_STARTING_PLAYER,
    player
  }
}