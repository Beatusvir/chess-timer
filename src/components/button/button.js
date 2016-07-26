import React from 'react'

export default ({handleClick, player, pressed}) => {
  const pressedClass = pressed ? 'pressed' : 'not-pressed'
  return (
    <button
      id={`button-player-${player}`}
      className={`button-player ${pressedClass}`}
      onClick={() => handleClick(player)}
      />
  )
}