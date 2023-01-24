class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTimeCallback()
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime/360)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value = String(value)
    if (value.length == 1){
      return '0' + value
    }
    else if (value.length == 2){
      return value
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }

  getCentiseconds(){
    return this.currentTime%60
  }
}
