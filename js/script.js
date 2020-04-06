
let time = 30
let interval
let score = 0
let popUpTimer = null
let potato = null
let lastPotatoNumber = null
let potatoImg = document.getElementsByClassName('potato')

// DOM loads, add event handler for start, reset buttons.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', startGame)
    document.getElementById('timer').textContent = time
    document.getElementById('score-out').textContent = score
    document.getElementById('prompt').textContent = "GET READY!!!"
})


//Start the Game
const startGame = () => {
    let score = 0
    clearInterval(time)
    clearInterval(interval)
    interval = setInterval(countdown, 1000)
    document.getElementById('start-button').textContent = 'Restart Game'
    document.getElementById('timer').textContent = time
    document.getElementById('score-out').textContent = score
    popUp()
    grabPotato()
    grab()
    randomPotato()
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
    document.getElementsByClassName('potato').style.visibility = "visible"
    popUpTimer = setTimeout(() => {
        document.getElementsByClassName('potato').style.visibility = "hidden"
        if ( timeUp === false) {
            popUp()
        }
    }, time)
}


// Grab potato function
const grab = () => {
    document.getElementsByClassName('potato').style.visibility = "hidden"
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
const randomPotato = () => {
    let x = Math.floor(Math.random() * lastPotatoNumber)
    var potato
    if (x === lastPotatoNumber) {
        return randomPotato()
    }
    lastPotatoNumber = x
    return potato
}


// Function to add click event
const grabPotato = () => {
    let potatoImg = document.querySelectorAll('.potato')
    // Loop through each
    for (let i = 0; i < potatoImg.length; i++) {
        potatoImg[i].addEventListener('click', grabPotato)
    }
}


// Function to remove click events
const removeGrabPotato = () => {
    let potatoImg = document.querySelectorAll('.potato')
        // Loop through each
    for (let i = 0; i < potatoImg.length; i++) {
        potatoImg[i].removeEventListener('click', removeGrabPotato)
    }   
}


// Game Over Function
const gameOver = () => {
    clearInterval(interval)
    clearInterval(popUpTimer)
    timeUp = true
    removeGrabPotato()
}