
let time = 30
let interval
let score = 0
let popUpTimer = null
let potato = null
let lastPotatoNumber = null
let potatoImg = document.getElementsByClassName('potato')
let timeUp = false

// DOM loads, add event handler for start, reset buttons.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', startGame)
    document.getElementById('timer').textContent = time
    document.getElementById('score-out').textContent = score
    document.getElementById('prompt').textContent = "Click Start and Grab the Potatoes!"
})


//Start the Game
const startGame = () => {
    let score = 0
    timeUp = true
    clearInterval(time)
    clearInterval(interval)
    interval = setInterval(countdown, 1000)
    document.getElementById('start-button').textContent = 'Restart Game'
    document.getElementById('timer').textContent = time
    document.getElementById('score-out').textContent = score
    randomPotato(potatoes)
    popUp()
    grabPotato()
    grab()
}


// Countdown function
const countdown = () => {
    console.log("countdown", time)
    time--
    document.getElementById('prompt').textContent = "Get the Potatoes!"
    document.getElementById('timer').textContent = time
    if (time == 0) {
        document.getElementById('prompt').textContent = "GAME OVER!"
        gameOver()
        }
    }


// Pop up function
const popUp = () => {
    let minUpTime = 1200
    let maxUpTime = 2500
    let time = randomTime(minUpTime, maxUpTime)
    randomPotato()
    potatoes = document.getElementsByClassName('potato')
    document.getElementsByClassName('potato')
    if (potatoes) {
        for (let i = 0; i < potatoes.length; i++) {
            if (timeUp === false) {
                potatoes[i].style.visibility = "visible"
            }
        }
    }
    popUpTimer = setTimeout(() => {
        document.getElementsByClassName('potato')
        if (potatoes) {
            for (let i = 0; i < potatoes.length; i++) {
                potatoes[i].style.visibility = "hidden"
            }
        }
        if (timeUp === false) {
            popUp()
        }
    }, time)
}


// Grab potato function
const grab = () => {
    potatoes = document.querySelectorAll('.potato')
    if (potatoes) {
        for (let i = 0; i < potatoes.length; i++) {
           potatoes[i].addEventListener('click', grab)
        }
    }
    score++
    document.getElementById('score-out')
}


// Randomize pop-up time Function
let min = 1200
let max = 2500
const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
   

// Randomize potato to display Function
const randomPotato = (potatoes) => {
    let x = Math.floor(Math.random() * lastPotatoNumber)
    let potato = potatoes * (x)
    if (x === lastPotatoNumber) {
        return randomPotato(potatoes)
    }
    lastPotatoNumber = x
    return potato
}


// Function to add click event
const grabPotato = () => {
    let potatoImg = document.getElementsByClassName('.potato')
    // Loop through each
    for (let i = 0; i < potatoImg.length; i++) {
        potatoImg.addEventListener('click', grab)
    }
}


// Function to remove click events
const removeGrabPotato = () => {
    let potatoImg = document.getElementsByClassName('.potato')
        // Loop through each
    for (let i = 0; i < potatoImg.length; i++) {
        potatoImg.removeEventListener('click', removeGrabPotato)
    }   
}


// Game Over Function
const gameOver = () => {
    clearInterval(interval)
    clearInterval(popUpTimer)
    timeUp = true
    //removeGrabPotato()
}