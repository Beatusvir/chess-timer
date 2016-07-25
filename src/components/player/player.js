import React from 'react'

// Components
import Button from  '../button/button'
import Clock from  '../clock/clock'

const Player = React.createClass({
  propTypes: {
    currentTime: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    isActive: React.PropTypes.bool,
    player: React.PropTypes.number
  },

  render: function () {
    const activeClass = this.props.isActive ? 'active' : 'not-active'
    return (
      <div className={`player ${activeClass}`}>
        <Button handleClick={this.props.handleClick} player={this.props.player} pressed={this.props.isActive}/>
        <Clock currentTime={this.props.currentTime}/>
        <h4 className="player-name">{`Player ${this.props.player} ${this.props.isActive ? '(Playing)' : ''} `}</h4>
      </div>
    )
  }

})

export default Player