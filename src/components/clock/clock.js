import React from 'react'

export default React.createClass({
  propTypes: {
    currentTime: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="clock">{this.props.currentTime}</div>
    )
  }
})