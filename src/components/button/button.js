import React from 'react'

export default React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func,
    pressed: React.PropTypes.bool
  },

  render: function () {
    const pressedClass = this.props.pressed ? 'pressed' : 'not-pressed'
    return (
      <button 
        id={`button-player-${this.props.player}`} 
        className={`button-player ${pressedClass}`} 
        onClick={this.props.handleClick}
      />  
    )
  }
})