// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isRunning: false,
    timeElapsedinSeconds: 0,
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedinSeconds: prevState.timeElapsedinSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timerInterval = setInterval(this.updateTime, 1000)
    this.setState({isRunning: true})
  }

  onStoptimer = () => {
    clearInterval(this.timerInterval)
    this.setState({isRunning: false})
  }

  onResettimer = () => {
    clearInterval(this.timerInterval)
    this.setState({isRunning: false, timeElapsedinSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedinSeconds} = this.state
    const seconds = Math.floor(timeElapsedinSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedinSeconds} = this.state
    const minutes = Math.floor(timeElapsedinSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-cont">
        <div className="stopwatch-cont">
          <h1 className="hed1">Stopwatch</h1>
          <div className="timer-cont">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="para1">Timer</p>
            </div>
            <h1 className="hed2">{time}</h1>
            <div className="timer-buts">
              <button
                type="button"
                onClick={this.onStartTimer}
                disabled={isRunning}
                className="start-but but"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStoptimer}
                className="stop-but but"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResettimer}
                className="reset-but but"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
