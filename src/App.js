// Modules
import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

// Components
import Player from './components/player/player'

// Code
import {
  timerTick,
  startMatch,
  playerClick,
  restartMatch,
  setStartingPlayer
} from './actions/actions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  setIsPlaying() {
    return true;
  }

  updateTimer() {
    if (this.props.matchInProgress) {
      this.props.dispatch(timerTick)
    }
  }

  handlePlayerClick(player) {
    if (!this.props.matchInProgress) {
      this.timer = setInterval(() => {
        this.updateTimer()
      }, 1000)
      return this.props.dispatch(setStartingPlayer(player))
    }
    this.props.dispatch(playerClick(player))
  }

  restartMatch() {
    clearInterval(this.timer)
    this.props.dispatch(restartMatch)
  }

  render() {
    if (this.props.winner !== null) {
      return (
        <div className="result">
          <h1>{`Player ${this.props.winner} wins!`}</h1>
          <i
            className="fa fa-refresh button-start-over"
            onClick={this.restartMatch.bind(this) }
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
            handleClick={this.handlePlayerClick.bind(this) }
            isActive={+this.props.activePlayer === 1}
            />
          <Player
            player={2}
            currentTime={this.props.remainingTimePlayer2}
            handleClick={this.handlePlayerClick.bind(this) }
            isActive={+this.props.activePlayer === 2}
            />
        </div>
        <i
          className="fa fa-refresh button-start-over"
          onClick={this.restartMatch.bind(this) }
          title="Restart Match"
          />
      </div>
    )
  }
}

App.propTypes = {
  player1CurrentTime: PropTypes.string,
  player2CurrentTime: PropTypes.string,
  matchInProgress: PropTypes.bool
}

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