import React from 'react'

// Components
import Button from  '../button/button'
import Clock from  '../clock/clock'

export default ({ currentTime, handleClick, isActive, player }) => {
  return (
    <div className={`player ${isActive ? 'active' : 'not-active'}`}>
      <Button handleClick={handleClick} player={player} pressed={isActive}/>
      <Clock currentTime={currentTime}/>
      <h4 className="player-name">{`Player ${player} ${isActive ? '(Playing)' : ''} `}</h4>
    </div>
  )
}