// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    setTimerValue: 25,
    startButton: true,
    minutes: 25,
    seconds: 0,
    resetValue: true,
  }

  componentDidMount() {}

  changescondes = () => {
    const {minutes, seconds} = this.state

    this.setState(prevState => ({seconds: prevState.seconds - 1}))

    if (parseInt(seconds) === 0) {
      this.setState(prevState => ({
        seconds: 59,
        minutes: prevState.minutes - 1,
      }))
    }
    if (minutes === 0 && seconds === 1) {
      clearInterval(this.id)
      this.setState(prevState => ({startButton: true}))
    }
  }

  changeButton = () => {
    const {startButton, minutes, setTimerValue} = this.state
    if (startButton === true) {
      if (minutes === 0) {
        this.setState({minutes: setTimerValue})
      }
      this.id = setInterval(this.changescondes, 1000)
    }
    if (startButton === false) {
      clearInterval(this.id)
    }
    this.setState(prevState => ({
      startButton: !prevState.startButton,
      resetValue: false,
    }))
  }

  decreamentMinute = () => {
    const {resetValue} = this.state
    {
      resetValue &&
        this.setState(prevState => ({
          minutes: prevState.minutes - 1,
          setTimerValue: prevState.setTimerValue - 1,
        }))
    }
  }

  increamentMinute = () => {
    const {resetValue} = this.state

    {
      resetValue &&
        this.setState(prevState => ({
          minutes: prevState.minutes + 1,
          setTimerValue: prevState.setTimerValue + 1,
        }))
    }
  }

  resetTimer = () => {
    clearInterval(this.id)
    this.setState(prevState => ({
      setTimerValue: 25,
      minutes: 25,
      seconds: 0,
      startButton: true,
      resetValue: true,
    }))
  }

  render() {
    const {setTimerValue, startButton, minutes, seconds} = this.state
    const minutesShow = minutes < 10 ? '0' + minutes : minutes
    const secondsShow = seconds < 10 ? '0' + seconds : seconds
    const timerStatus = startButton ? 'Paused' : 'Running'
    const startPauseBustonShow = startButton ? (
      <div className="button-start-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
          alt="play icon"
          className="start-button"
        />

        <button
          className="play-pause-icon-text buttn"
          onClick={this.changeButton}
        >
          Start
        </button>
      </div>
    ) : (
      <div className="button-start-text-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
          alt="pause icon"
          className="start-button"
        />

        <button
          className="play-pause-icon-text buttn"
          onClick={this.changeButton}
        >
          Pause
        </button>
      </div>
    )
    return (
      <div className="background-container">
        <h1 className="heading-digital">Digital Timer</h1>
        <div className="bottom-container-time-buttn">
          <div className="timer-display-container">
            <div className="time-minutes-conainer">
              <h1 className="heading-time-minutes">
                {minutesShow}:{secondsShow}
              </h1>
              <p className="para-time-minutes">{timerStatus}</p>
            </div>
          </div>
          <div className="side-icons-text-container">
            <div className="top-icons-text-container-play-reset">
              {startPauseBustonShow}
              <div className="button-start-text-container">
                <button className="buttn" onClick={this.resetTimer}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                    className="start-button"
                  />
                </button>
                <p className="play-pause-icon-text">Reset</p>
              </div>
            </div>
            <p className="set-timer-para">Set Timer limit</p>
            <div className="plus-minus-container">
              <button className="minus-buttn" onClick={this.decreamentMinute}>
                -
              </button>
              <p className="para-timer-set-tiem-dispaly">{setTimerValue}</p>
              <button className="minus-buttn" onClick={this.increamentMinute}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
