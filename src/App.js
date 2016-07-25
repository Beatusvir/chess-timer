// Modules
import React from 'react'
import TimerMixin from 'react-timer-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

// Components
import Player from './components/player/player'

// Code
import { timerTick, startMatch, playerClick, restartMatch, setStartingPlayer } from './actions/actions'

export const App = React.createClass({
  propTypes: {
    player1CurrentTime: React.PropTypes.string,
    player2CurrentTime: React.PropTypes.string,
    matchInProgress: React.PropTypes.bool
  },

  mixins: [TimerMixin, PureRenderMixin],

  setIsPlaying: function () {
    return true;
  },

  updateTimer: function () {
    if (this.props.matchInProgress) {
      this.props.dispatch(timerTick)
    }
  },

  componentDidMount: function () {
    this.timer = setInterval(this.updateTimer, 1000)
  },

  componentWillMount: function () {
    clearInterval(this.timer)
  },

  handlePlayerClick: function (e) {
    let id = e.currentTarget.id
    let player = id.substring(id.lastIndexOf('-') + 1)
    if (!this.props.matchInProgress) {
      return this.props.dispatch(setStartingPlayer(player))
    }
    this.props.dispatch(playerClick(player))
  },

  restartMatch: function () {
    this.props.dispatch(restartMatch)
  },

  render: function () {
    if (this.props.winner !== null) {
      return (
        <div className="result">
          <h1>{`Player ${this.props.winner} wins!`}</h1>
          <i
            className="fa fa-refresh button-start-over"
            onClick={this.restartMatch}
            title="Restart Match"
            />
        </div>
      )
    }
    return (
      <div className="chess-timer">
        <div className="player-container">
          <Player
            player={1}
            currentTime={this.props.remainingTimePlayer1}
            handleClick={this.handlePlayerClick}
            isActive={+this.props.activePlayer === 1}
            />
          <Player
            player={2}
            currentTime={this.props.remainingTimePlayer2}
            handleClick={this.handlePlayerClick}
            isActive={+this.props.activePlayer === 2}
            />
        </div>
        <i
          className="fa fa-refresh button-start-over"
          onClick={this.restartMatch}
          title="Restart Match"
          />
      </div>
    )
  }
})

const mapStateToProps = function (state) {
  return {
    remainingTimePlayer1: state.get('remainingTimePlayer1'),
    remainingTimePlayer2: state.get('remainingTimePlayer2'),
    matchInProgress: state.get('matchInProgress'),
    winner: state.get('winner'),
    activePlayer: state.get('activePlayer')
  }
}

export const AppContainer = connect(mapStateToProps)(App)