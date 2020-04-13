// Global variables
let time = 30
let interval
let score = 0
let potatoes = []
let potatoImg = document.getElementsByClassName('potato')
let prompt = document.getElementById('prompt')
let timer = document.getElementById('timer')
let start = document.getElementById('start-button')
let scoreBoard = document.getElementById('score-out')
let box = document.querySelectorAll('.box')
let timeUp = false

// DOM loads, add event handler for start, reset buttons.
document.addEventListener('DOMContentLoaded', () => {
    start.addEventListener('click', playGame)
    timer.textContent = time
    scoreBoard.textContent = score
    prompt.textContent = "Click Start and Grab the Potatoes!"
})


// Function to start the game
const playGame = () => {
    clearInterval(time)
    clearInterval(interval)
    interval = setInterval(countdown, 1000)
    // Reset the text of the start button to reset
    start.textContent = 'Restart Game'
    // Show the score
    scoreBoard.textContent = score
    randomPotato(potatoImg)
    popUp()
    // grabPotato()
    // grab()
}


// Countdown function
const countdown = () => {
    // Timer decreases
    time--
    // Change text in text box
    prompt.textContent = "Get the Potatoes!"
    // Update the timer
    timer.textContent = time
    // When time is up, run game over function
    if (time == 0) {
        prompt.textContent = "GAME OVER!"
        gameOver()
    }
}


// // Pop up function
// const popUp = () => {
//     let minUpTime = 1200
//     let maxUpTime = 2500
//     let popTime = randomTime(minUpTime, maxUpTime)
//     randomPotato()
//     if (potatoes) {
//         for (let i = 0; i < potatoes.length; i++) {
//             if (timeUp === false) {
//                 potatoes[i].hidden = "false"
//             }
//         }
//     }
// }


const popUp = (randomTime) => {
    setTimeout(() => {
       randomPotato(potatoImg)
    }, randomTime)
}

// Grab potato function
const grab = () => {
    let potatoes = document.querySelectorAll('.potato')
    if (potatoes) {
        for (let i = 0; i < potatoes.length; i++) {
           potatoes[i].addEventListener('click', grab)
        }
    }
    score++
}


// Randomize pop-up time Function
let min = 1200
let max = 2500
const randomTime = (min, max) => {
    return Math.round(Math.random() * (max - min) + min)
}
   

// Randomize potato to display Function
const randomPotato = () => {
    box.forEach(className => {
        className.classList.remove('potatoImg')
    })
    let position = Math.floor(Math.random() * 12) 
        position.classList.add('potatoImg')
    //potatoImg[x].style.visibility = 'visible';

    hitPosition = position.id
}


// Function to add click event
box.forEach(id => {
    id.addEventListener('click', () => {
        if(id.id === hitPosition) {
            score = score + 1
            scoreBoard.textContent = score
        }
    })
})
// const grabPotato = () => {
//     // Loop through each
//     for (let i = 0; i < potatoImg.length; i++) {
//         potatoImg.addEventListener('click', grab)
//     }
// }


// // Function to remove click events
// const removeGrabPotato = () => {
//     let potatoImg = document.getElementsByClassName('.potato')
//         // Loop through each
//     for (let i = 0; i < potatoImg.length; i++) {
//         potatoImg.removeEventListener('click', removeGrabPotato)
//     }   
// }


// Game Over Function
const gameOver = () => {
    clearInterval(interval)
    clearInterval(popUp)
    timeUp = true
    //removeGrabPotato()
}