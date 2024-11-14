let homeScore = document.getElementById("home-el")
let guestScore = document.getElementById("guest-el")
let score = 0
let score1 = 0

function home1() {
    score += 1
    homeScore.innerText = score
}

function home2() {
    score += 2
    homeScore.innerText = score
}

function home3() {
    score += 3
    homeScore.innerText = score
}

function guest1() {
    score1 += 1
    guestScore.innerText = score1
}

function guest2() {
    score1 += 2
    guestScore.innerText = score1
    console.log('it works')
}

function guest3() {
    score1 += 3
    guestScore.innerText = score1
}

function gameOver() {

    let newGame = document.getElementById("newGame")
    homeScore.textContent = 0
    guestScore.textContent = 0
    score = 0
    score1 = 0


}