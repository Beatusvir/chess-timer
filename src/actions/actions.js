export const RESTART_MATCH = 'RESTART_MATCH'

export const restartMatch = {
  type: RESTART_MATCH
}

export const START_MATCH = 'START_MATCH'

export const startMatch = {
  type: START_MATCH
}

export const END_MATCH = 'END_MATCH'

export const endMatch = function(winner){
  return {
    type: END_MATCH,
    winner
  }
}

export const TIMER_TICK = 'TIMER_TICK'

export const timerTick = {
  type: TIMER_TICK
}

export const PLAYER_CLICK = 'PLAYER_CLICK'

export const playerClick = function(player){
  return {
    type: PLAYER_CLICK,
    player
  }
}

export const SET_STARTING_PLAYER = 'SET_STARTING_PLAYER' 

export const setStartingPlayer = function(player){
  return {
    type: SET_STARTING_PLAYER,
    player
  }
}