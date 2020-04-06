
let time = 30
let interval


// DOM loads, add event handler for start, reset buttons.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', startGame)
    document.getElementById('timer').textContent = time
    document.getElementById('prompt').textContent = "GET READY!!!"
})


//Start the Game
const startGame = () => {
    let score = 0
    clearInterval(interval)
    interval = setInterval(countdown, 1000)
    document.getElementById('start-button').textContent = 'Restart Game'
    document.getElementById('timer').textContent = time
    document.getElementById('score-out').textContent = score

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


// Function to add click event
const addGrabPotato = () => {
    let potato = document.querySelectorAll('#gameBox')
    // Loop through each
    for (let i = 0; i < potato.length; i++) {
        potato[i].addEventListener('click', grabPotato)
    }
}


// Function to remove click events
const removeGrabPotato = () => {
    let potato = document.querySelectorAll('#gameBox')
        // Loop through each
    for (let i = 0; i < potato.length; i++) {
        potato[i].removeEventListener('click', grabPotato)
    }   
}


// Game Over Function
const gameOver = () => {
    clearInterval(interval)
}


// Function to check hit




// Randomize pop-up time Function
const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
   

// Randomize hole Function
const randomHole = (holes) => {
    const x = Math.floor(Math.random() * holes.length)
    const hole = holes[x]
    if (hole == lastHole) {
        return randomHole(holes)
    }
    lastHole = hole
    return hole
}


// Surprise function
const surprise = () => {
    const randtime = randomTime(500, 1200)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if(!timeUp) surprise()
    }, randtime)
}
