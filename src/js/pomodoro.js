
export class Pomodoro {
  constructor() {
    this.item = document.getElementById('app')
    this.interval = null
    this.minutes = 25
    this.seconds = 0
  }

  handleUpdateTimer = () => {
    this.seconds--
    if (this.seconds < 0) {
      this.seconds = 59
      this.minutes--
    }

    if (this.minutes === 0 && this.seconds === 0) {
      this.handleStopTimer()
      alert("Time's up!")
    }

    const minutesDisplay = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`
    const secondsDisplay = this.seconds < 10 ? `0${this.seconds}` : `${this.seconds}`
    this.item.textContent = `${minutesDisplay}:${secondsDisplay}`
  }

  handleResetTimer = () => {
    clearInterval(this.interval)
    this.minutes = 25
    this.seconds = 0
    this.handleUpdateTimer()
  }

  handleStopTimer = () => clearInterval(this.interval)

  handleStartTimer = () => {
    this.item.textContent = '25:00'
    this.interval = setInterval(this.handleUpdateTimer, 1000)
  }
}
