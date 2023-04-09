import '../css/index.css'
import { initClock } from './clock'
import { Pomodoro } from './pomodoro'
import { stopPomodoro } from './templateHTML'

const pomodoro = new Pomodoro()

const init = (btn1, btn2, btn3) => {
  initClock()
  let clock = setInterval(initClock, 1000)
  const boxButton = document.querySelector('.container-button')
  document.addEventListener('click', (e) => {
    if (e.target.matches(btn2)) {
      boxButton.removeChild(document.querySelector(btn3))
      initClock()
      pomodoro.handleStopTimer()
      clock = setInterval(initClock, 1000)
    }
    if (e.target.matches(btn1)) {
      clearInterval(clock)
      if (!document.querySelector(btn3)) {
        document.querySelector(btn1).insertAdjacentHTML('afterend', stopPomodoro)
      }
      pomodoro.handleStartTimer()
    }
    if (e.target.matches(btn3)) {
      pomodoro.handleStopTimer()
    }
  })
}

init('#pomodoro', '#currentTime', '#stop-pomodoro')
