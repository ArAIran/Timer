const start = document.querySelector("#Start")
const stop = document.querySelector("#Stop")
const time = document.querySelector("#Time")
const reset = document.querySelector("#reset")

let counter = 0
let interval

start.addEventListener("click", function () {
    start.disabled = true
    time.textContent = counter++
    interval = setInterval(function () {
        time.textContent = counter++
    }, 1000)
})

stop.addEventListener("click", function () {
    clearInterval(interval)
    start.disabled = false
})

reset.addEventListener("click", function () {
    clearInterval(interval)
    counter = 0
    time.textContent = 0
    start.disabled = false
})